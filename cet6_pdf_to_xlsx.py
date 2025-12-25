# -*- coding: utf-8 -*-
"""
将《00-0512-1六级词汇.pdf》解析成题目文本 --> 答案单词 的 xlsx

用法示例：
    python cet6_pdf_to_xlsx.py \
        00-0512-1六级词汇.pdf \
        六级词汇_题目到答案.xlsx
"""

import re
import sys
import pdfplumber
from openpyxl import Workbook

try:
    import wordninja

    _split_words = wordninja.split
except Exception:  # optional dependency
    _split_words = None


def extract_text_from_pdf(pdf_path: str) -> str:
    """把整份 PDF 的文字拼成一个大字符串。"""
    pages_text = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            t = page.extract_text() or ""
            pages_text.append(t)
    return "\n".join(pages_text)


def parse_questions(all_text: str):
    """
    解析题目区：
    返回 {题号: {"stem": 题干, "options": {"A":..., "B":..., "C":..., "D":...}, "raw":完整题目+选项}}
    """
    # 截到“答案：”之前，都是题干 + 选项
    if "答案：" in all_text:
        q_block = all_text.split("答案：", 1)[0]
    else:
        q_block = all_text

    q_block = q_block.replace("\r", "")

    # 按 “数字.” 切分题目：1.  2.  3. ...
    # re.split 会保留括号里的捕获组：parts = [前缀, 题号1, body1, 题号2, body2, ...]
    parts = re.split(r'(\d{1,3})\.\s*', q_block)

    questions = {}
    for i in range(1, len(parts) - 1, 2):
        num_str = parts[i]
        body = parts[i + 1]

        if not num_str.isdigit():
            continue

        qnum = int(num_str)
        body = body.strip()
        body_clean = re.sub(r'\s+', ' ', body)  # 压缩空白

        # 选项的正则：允许 A) 或 A.，D 后面的 ) 可能缺失
        opt_pat = re.compile(
            r'A[\).]\s*(.*?)\s*'
            r'B[\).]\s*(.*?)\s*'
            r'C[\).]\s*(.*?)\s*'
            r'D[\).]?\s*(.*)'
        )
        mo = opt_pat.search(body_clean)

        if mo:
            stem = body_clean[:mo.start()].strip()
            A, B, C, D = [x.strip() for x in mo.groups()]
            questions[qnum] = {
                "stem": stem,
                "options": {"A": A, "B": B, "C": C, "D": D},
                "raw": body_clean,
            }
        else:
            # 没成功匹配到 A/B/C/D，就把整句当成题干
            questions[qnum] = {
                "stem": body_clean,
                "options": {},
                "raw": body_clean,
            }

    return questions


def parse_answers(all_text: str):
    """
    解析“答案：”后面的大块答案区：
    形如：
        1-5BDDCA 6-10DBCAB ...
        241--245CBDCD ...
    返回 {题号: "A"/"B"/"C"/"D"}
    """
    if "答案：" not in all_text:
        raise ValueError("没有找到“答案：”这一段，请检查 PDF 内容。")

    ans_block = all_text.split("答案：", 1)[1]
    ans_block = ans_block.replace("\r", " ")
    ans_block = re.sub(r'[ \t]+', ' ', ans_block)

    mapping = {}

    # 支持 1-5BDDCA、1-5 B D D C A、241--245CBDCD 等格式
    pattern = re.compile(r'(\d+)\s*--?\s*(\d+)\s*([A-D](?:\s*[A-D])*)')

    for m in pattern.finditer(ans_block):
        start = int(m.group(1))
        end = int(m.group(2))
        letters = re.sub(r'\s+', '', m.group(3))  # 去掉字母间空格

        if end - start + 1 != len(letters):
            # 如果字母个数对不上题号区间，就跳过这一段（也可以 print 出来手动检查）
            # print("答案长度不匹配：", start, end, letters)
            continue

        for i, ch in enumerate(letters):
            mapping[start + i] = ch

    return mapping


def segment_text(text: str) -> str:
    """Best-effort word segmentation for English-like text."""
    if not text:
        return ""
    cleaned = re.sub(r"[^A-Za-z0-9]+", " ", text).strip()
    if not cleaned:
        return text
    if _split_words:
        tokens = []
        for part in cleaned.split():
            tokens.extend(_split_words(part))
        return " ".join(tokens)
    return cleaned


def export_to_xlsx(questions: dict, answers: dict, out_path: str):
    """写出 xlsx：题号 | 题干 | 题干(分词) | 答案字母 | 答案单词 | 完整题目+选项"""
    wb = Workbook()
    ws = wb.active
    ws.title = "CET6词汇"

    ws.append(["题号", "题目文本", "题目文本(分词)", "答案字母", "答案单词", "完整题目+选项"])

    max_qid = max(questions.keys())
    for qid in range(1, max_qid + 1):
        q = questions.get(qid)
        if not q:
            continue

        letter = answers.get(qid, "")
        word = ""
        if letter and q["options"]:
            word = q["options"].get(letter, "")

        segmented = segment_text(q["stem"])

        ws.append([
            qid,
            q["stem"],   # 题干（句子中间的空格在 PDF 里本来就比较乱，这里保持原样）
            segmented,   # 题干分词结果
            letter,      # A/B/C/D
            word,        # 对应的单词
            q["raw"],    # 完整题目+选项备用
        ])

    wb.save(out_path)
    print(f"已生成：{out_path}")


def main():
    if len(sys.argv) < 3:
        print("用法：python cet6_pdf_to_xlsx.py 输入PDF 输出XLSX")
        print("示例：python cet6_pdf_to_xlsx.py 00-0512-1六级词汇.pdf 六级词汇_题目到答案.xlsx")
        sys.exit(1)

    pdf_path = sys.argv[1]
    xlsx_path = sys.argv[2]

    print("1) 读取 PDF 文本...")
    all_text = extract_text_from_pdf(pdf_path)

    print("2) 解析题目...")
    questions = parse_questions(all_text)
    print(f"   共解析到 {len(questions)} 道题（期望 270）")

    print("3) 解析答案...")
    answers = parse_answers(all_text)
    print(f"   共解析到 {len(answers)} 个答案（期望 270）")

    print("4) 导出到 xlsx...")
    export_to_xlsx(questions, answers, xlsx_path)


if __name__ == "__main__":
    main()
