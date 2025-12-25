import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, BookOpen, Edit2, CheckCircle, XCircle, FileText, AlertCircle, Moon, Sun } from 'lucide-react';

// --- Default Data from OCR ---
const DEFAULT_TEXT = `词汇练习 sherry
1
1. The doctors don't _______ that he will live much longer. A) articulate 清晰表达 B) anticipate 预期，预料 C) manifest 显示，表明 D) monitor 监测，监控
2.I suggest we put the scheme into effect, for it is quite_______. A) eligible 有资格的 B) sustainable 可持续的 C) probable 可能的 D) feasible 可行的
3.The old gentleman was a very ________ looking person, with grey hair and gold spectacles. A) respectful 恭敬的 B) respected 受尊敬的 C) respective 各自的 D) respectable 体面的，值得尊敬的
4.This book is expected to _______ the best - seller lists. A) promote 促进，推广 B) prevail 盛行，获胜 C) dominate 主导，占据 D) exemplify 例证，作为典范
5.That part of the city has long been ________ for its street violence. A) notorious 臭名昭著的 B) responsible 负责的 C) historical 历史的 D) illegal 非法的
6.Under the guidance of their teacher, the pupils are building a model boat_______ by steam. A) towed 拖拽 B) pressed 按压 C) tossed 抛掷 D) propelled 推进，驱动
7.Having finished their morning work, the clerks stood up behind their desks, ________
themselves. A) expanding 扩展 B) stretching 伸展身体 C) prolonging 延长 D) extending 延伸
8.England's team, who are now superbly fit, will be doing their best next week to ________
themselves for last year's defeat. A) revive 复兴 B) retort 反驳 C) revenge 报仇，复仇 D) remedy 补救
9.If you want to get into that tunnel, you first have to _______ away all the rocks. A) haul 拖，拉 B) transfer 转移 C) repel 击退 D) dispose 处理
10.It took us only a few hours to _______the paper off all four walls. A) shear 剪切 B) scrape 刮掉 C) stroke 抚摸 D) chip 削，凿
11.The famous scientist _______his success to hard work. A) imparted 传授 B) granted 授予 C) ascribed 归因于 D) acknowledged 承认
12.It is difficult to _______of a plan to end poverty. A) speculate 推测 B) conceive 构想，设想 C) ponder 沉思 D) reckon 认为
13. Now the cheers and applause _______in a single sustained roar. A) mingled 混合 B) concentrated 集中 C) assembled 集合 D) permeated 渗透
14..Improved consumer confidence is ________ to an economic recovery. A) crucial 至关重要的 B) subordinate 次要的 C) cumulative 累积的 D) satisfactory 令人满意的
15.Although the body is made up of many different tissues, these tissues are arranged in
an _______ and orderly fashion. A) incredible 难以置信的 B) intricate 错综复杂的 C) internal 内部的 D) initial 最初的
16.If you work under a car when repairing it, you often get very_______. A) waxy 蜡质的 B) slippery 滑的 C) sticky 黏的 D) greasy 油腻的
17.The damage to his car was_______; therefore, he could repair it himself. A) considerable 相当大的 B) appreciable 可察觉的 C) negligible 微不足道的 D) invisible 看不见的
18. My sister is quite _______ and plans to get an M. A. degree within one year. A) aggressive 有进取心的 B) enthusiastic 热情的 C) considerate 体贴的 D) ambitious 有抱负的
19.The manager tried to wave aside these issues as _______ details that would be settled later. A) versatile 多才多艺的 B) trivial 琐碎的，不重要的 C) preliminary 初步的 D) alternate 交替的
20.His_______was telling him that something was wrong. A) intuition 直觉 B) hypothesis 假设 C) inspiration 灵感 D) sentiment 情感
21.This book is about how these basic beliefs and values affect important _______ of American life.
A) fashions 时尚 B) frontiers 边界 C) facets 方面 D) formats 格式
22.Parents often faced the _______ between doing what they felt was good for the development of the
child and what they could stand by way of undisciplined noise and destructiveness. A) paradox 悖论 B) junction 交汇处 C) dilemma 困境，两难 D) premise 前提
23.Clark felt that his _______ in one of the most dramatic medical experiments of all time was worth
the suffering he underwent. A) apprehension 忧虑 B) appreciation 欣赏 C) presentation 展示 D) participation 参与
24.As one of the youngest professors in the university, Miss King is certainly on the ________ of a
brilliant career. A) threshold 门槛，起点 B) edge 边缘 C) porch 门廊 D) course 课程，进程
25.The_______lawyer made a great impression on the jury. A) protecting 保护的 B) guarding 守卫的 C) defending 辩护的 D) shielding 遮蔽的
26.Very few people understood his lecture, the subject of which was very_______. A) dim 昏暗的 B) obscure 晦涩的，模糊的 C) conspicuous 显眼的 D) intelligible 易理解的
27.This movie is not ________ for children to see: it contains too much violence
and too many love scenes. A) profound 深刻的 B) valid 有效的 C) decent 得体的，适当的 D) upright 正直的
28.The wood was so rotten that, when we pulled, it _______ into fragments. A) broke off 折断 B) broke away 脱离 C) broke through 突破 D) broke up 破碎
29.The detective and his assistant have begun to _______ the mysterious murder. A) come through 经历 B) look into 调查 C) make over 改造 D) see to 照管
30.Sadly, the Giant Panda is one of the many species now in danger of_______. A) extinction 灭绝 B) migration 迁移 C) destruction 破坏 D) extraction 提取
31.For many patients, institutional care is the most ______ and beneficial form of care. A) pertinent 相关的 B) appropriate 适当的 C) acute 急性的 D) persistent 持续的
32.Among all the changes resulting from the ______ entry of women into the work force, the
transformation that has occurred in the women themselves is not the least important. A) massive 大规模的 B) quantitative 定量的 C) surplus 过剩的 D) formidable 可怕的
33.Mr. Smith became very ______ when it was suggested that he had made a mistake. A) ingenious 精巧的 B) empirical 经验的 C) objective 客观的 D) indignant 愤怒的，愤慨的
34.Rumours are everywhere, spreading fear, damaging reputations, and turning calm situations
into______ ones. A) turbulent 动荡的 B) tragic 悲剧的 C) vulnerable 脆弱的 D) suspicious 可疑的
35.The ______ cycle of life and death is a subject of interest to scientists and philosophers alike. A) incompatible 不兼容的 B) exceeding 超过的 C) instantaneous 瞬间的 D) eternal 永恒的
36.She remains confident and ______ untroubled by our present problems. A) indefinitely 无限期地 B) infinitely 无限地 C) optimistically 乐观地 D) seemingly 看起来
37.Fiber-optic cables can carry hundreds of telephone conversations ______. A. simultaneously 同时地 B) spontaneously 自发地 C) homogeneously 均匀地 D) contemporarily 同时代地
38.The police were alerted that the escaped criminal might be in the ______. A) vain 徒劳 B) vicinity 附近 C) court 法院 D) jail 监狱
39.Whether you live to eat or eat to live, food is a major ______ in every family's budget. A) nutrition 营养 B) expenditure 开支，支出 C) routine 日常 D) provision 供应
40.Now a paper in Science argues that organic chemicals in the rock come mostly from ______
on earth rather than bacteria on Mars. A) configuration 配置 B) constitution 构成 C) condemnation 谴责 D) contamination 污染
41.There is much I enjoy about the changing seasons, but my favorite time is the ______ from fall
to winter. A) transmission 传输 B) transformation 转变 C) transition 过渡 D) transfer 转移
42.I think we need to see an investment ______ before we make an expensive mistake. A) guide 指南 B) entrepreneur 企业家 C) consultant 顾问 D) assessor 评估员
43.The ______ on this apartment expires in a year's time. A) treaty 条约 B) lease 租约 C) engagement 订婚 D) subsidy 补贴
44.The elderly Russians find it hard to live on their state ______. A) pensions 养老金 B) earnings 收入 C) salaries 薪水 D) donations 捐款
45.There is supposed to be a safety ______ which makes it impossible for trains to collide. A) appliance 电器 B) accessory 配件 C) machine 机器 D) mechanism 机制
46.After four years in the same job his enthusiasm finally ______. A) deteriorated 恶化 B) dispersed 分散 C) dissipated 消散 D) drained 耗尽
47.No one can function properly if they are _______ of adequate sleep. A) deprived 被剥夺 B) ripped 撕裂 C) stripped 剥去 D) contrived 策划的
48.For years now, the people of that faraway country have been cruelly ______ by a dictator. A) depressed 沮丧的 B) immersed 沉浸的 C) oppressed 压迫 D) cursed 诅咒的
49.Ever since the rise of industrialism, education has been ______ towards producing workers. A) harnessed 利用 B) hatched 孵化 C) motivated 激励 D) geared 调整，使适应
50.The prospect of increased prices has already ______ worries. A) provoked 激起，引发 B) irritated 激怒 C) inspired 激励 D) hoisted 升起
51.The suspect ______ that he had not been in the neighbourhood at the time of the crime. A) advocated 提倡 B) alleged 声称 C) addressed 演说 D) announced 宣布
52.Although the colonists ______ to some extent with the native Americans, the Indians' influence
on American culture and language was not extensive. A) migrated 迁移 B) matched 匹配 C) mingled 混合，交往 D) melted 融化
53.E-mail is a convenient, highly democratic informal medium for conveying messages that _______ well to human needs. A) adheres 坚持 B) reflects 反映 C) conforms 符合 D) satisfies 满足
54.The wings of the bird still ______ after it had been shot down. A) slapped 拍打 B) scratched 抓挠 C) flapped 拍动（翅膀） D) fluctuated 波动
55.The disagreement over trade restrictions could seriously ______ relations between the two
countries. A) tumble 跌倒 B) jeopardize 危及 C) manipulate 操控 D) intimidate 恐吓
56.When you put up wallpaper, should you ______ the edges or put them next to each other?
A) coincide 一致 B) extend 延伸 C) overlap 重叠 D) collide 碰撞
57.Under the present system, state enterprises must ______ all profits to the government. A) turn down 拒绝 B) turn up 出现 C) turn out 结果是 D) turn in 上交
58.Oil companies in the U.S. are already beginning to feel the pressure. Refinery workers and
petroleum-equipment-manufacturing employees are being _______. A) laid out 摆放 B) laid off 解雇 C) laid down 放下 D) laid aside 搁置
59.We'll ______ you for any damage done to your house while we are in it.
A) compensate 补偿 B) remedy 补救 C) supplement 补充 D) retrieve 取回
60.She cut her hair short and tried to ______ herself as a man. A) decorate 装饰 B) disguise 伪装 C) fabricate 捏造 D) fake 伪造
61. Starting with the ________ that there is life on the planet Mars, the scientist went on to
develop his argument. A) premise 前提 B) pretext 借口 C) foundation 基础 D) presentation 展示
62. After several nuclear disasters, a ________ has raged over the safety of nuclear energy. A) quarrel 争吵 B) suspicion 怀疑 C) verdict 裁决 D) controversy 争论
63. Their diplomatic principles completely laid bare their ________ for world conquest. A) admiration 钦佩 B) ambition 野心 C) administration 管理 D) orientation 方向
64. The director gave me his ________ that he would double my pay if I did my job well. A) warrant 授权 B) obligation 义务 C) assurance 保证 D) certainty 确定性
65. The Christmas tree was decorated with shining ______ such as colored lights and glass balls. A) ornaments 装饰品 B) luxuries 奢侈品 C) exhibits 展品 D) complements 补充 66. The two most important ________ in making a cake are flour and sugar . A) elements 元素 B) components 组成部分 C) ingredients 原料 D) constituents 成分
67. Cultural ________ indicates that human beings hand their languages down from
one generation to another. A) translation 翻译 B) transition 过渡 C) transmission 传递 D) transaction 交易
68. We must look beyond ________ and assumptions and try to discover what is missing. A) justifications 正当理由 B) illusions 幻觉 C) manifestations 表现 D) specifications 规格
69. No one imagined that the apparently ________ businessman was really a criminal. A) respective 各自的 B) respectable 体面的 C) respectful 恭敬的 D) realistic 现实的
70. If nothing is done to protect the environment, millions of species that are alive today
will have become ________ . A) deteriorated 恶化的 B) degenerated 退化的 C) suppressed 压制的 D) extinct 灭绝的
71. The ________ of the scientific attitude is that the human mind can succeed in understanding
the universe. A) essence 本质 B) texture 质地 C) content 内容 D) threshold 门槛
72. The old lady has developed a ________ cough which cannot be cured completely in a short
time. A) perpetual 永久的 B) permanent 永久的 C) chronic 慢性的 D) sustained 持续的
73. What the correspondent sent us is an ________ news report. We can depend on it
A) evident 明显的 B) authentic 真实的 C) ultimate 最终的 D) immediate 立即的
74. Having had her as a professor and adviser, I can tell you that she is an _______ force who
pushes her students to excel far beyond their own expectations. A) inspirational 鼓舞人心的 B) educational 教育的 C) excessive 过度的 D) instantaneous 瞬间的
75. Some researchers feel that certain people have nervous systems particularly ______ to hot, dry
winds. They are what we call weather sensitive people. A) subjective 主观的 B) subordinate 从属的 C) liable 有责任的 D) vulnerable 易受影响的
76. Hurricanes are killer winds, and their _______ power lies in the physical damage they can do. A) cumulative 累积的 B) destructive 破坏性的 C) turbulent 动荡的 D) prevalent 流行的
77. In some countries, students are expected to be quiet and ________ in the classroom. A) skeptical 怀疑的 B) faithful 忠诚的 C) obedient 顺从的 D) subsidiary 附属的
78. In spite of the ______economic forecasts, manufacturing output has risen slightly. A) gloomy 悲观的 B) miserable 悲惨的 C) shadowy 阴暗的 D) obscure 模糊的
79. Body paint or face paint is used mostly by men in preliterate societies in order to attract good
health or to _______ disease. A) set aside 搁置 B) ward off 抵挡 C) shrug off 不予理会 D) give away 赠送
80. The international situation has been growing _____difficult for the last few years. A) invariably 始终如一地 B) presumably 大概 C) increasingly 越来越 D) dominantly 占主导地位地
81. The prisoner was ______ of his civil liberty for three years. A) discharged 释放 B) derived 获得 C) deprived 剥夺 D) dispatched 派遣
82. Small farms and the lack of modern technology have ______ agricultural production. A) blundered 犯错 B) tangled 缠结 C) bewildered 困惑 D) hampered 妨碍
83. The Japanese scientists have found that scents ______ efficiency and reduce stress among
office workers. A) enhance 增强 B) amplify 放大 C) foster 培养 D) magnify 放大
84. All the students have to ______to the rules and regulations of the school. A) confirm 确认 B) confront 面对 C) confine 限制 D) conform 遵守
85. He ______ his head, wondering how to solve the problem
A) scrapped 废弃 B) screwed 拧 C) scraped 刮 D) scratched 挠
86. As soon as the boy was able to earn his own living he ______ his parents' strict rules. A) defied 违抗 B) refuted 驳斥 C) excluded 排除 D) vetoed 否决
87. The helicopter a light plane and both pilots were killed. A) coincided with 与...一致 B) stumbled on 偶然发现 C) tumbled to 意识到 D) collided with 与...碰撞
88. To ______ is to save and protect, to leave what we ourselves enjoy in such good condition that
others may also share the enjoyment. A) conserve 保护 B) conceive 构想 C) convert 转换 D) contrive 设法
89. Put on dark glasses or the sun will ______ you and you won' t be able to see. A) discern 辨别 B) distort 扭曲 C) distract 分散注意力 D) dazzle 使目眩
90. In ______ times human beings did not travel for pleasure but to find a more favourable
climate. A) prime 最初的 B) primitive 原始的 C) primary 主要的 D) preliminary 初步的
91.If you want this painkiller, you'll have to ask the doctor for a________. A)transaction 交易 B)permit 许可证 C)settlement 解决 D)prescription 处方
92.The_________ from childhood to adulthood is always critical time for everybody. A)conversion 转换 B)transition 过渡 C)turnover 营业额 D)transformation 转变
93.It is hard to tell whether we are going to have a boom in the economy or a __________. A)concession 让步 B)recession 衰退 C)submission 提交 D)transmission 传输
94.His use of color light and form quickly departed from the conventional style of his_________
as he developed his own technique. A)descendants 后代 B)predecessors 前辈 C)successors 继任者 D)ancestors 祖先
95.Failure in a required subject may result in the_________ of a diploma. A) refusal 拒绝 B)betrayal 背叛 C)denial 拒绝，否认 D)burial 埋葬
96.To help students understand how we see teachers often draw an__________ between an eye
and a camera. A)image 图像 B)analogy 类比 C)imitation 模仿 D)axis 轴
97.A 1994 World Bank report concluded that_________ girls in school was probably the single
most effective anti-poverty policy in the developing world today. A)assigning 分配 B)admitting 承认 C)involving 涉及 D)enrolling 招收
98.The author of the report is well __________with the problems in the hospital because he has
been working there for many years. A)acquainted 熟悉 B)informed 了解 C)accustomed 习惯 D)known 知道
99.When the farmers visited the city for the first time, they were __________by its complicated
traffic system. A)evoked 唤起 B)bewildered 困惑 C)diverted 转移 D)undermined 破坏
100.If Japan__________ its relation with that country it will have to find another supplier of raw
materials. A)precludes 排除 B)terminates 终止 C)partitions 分割 D) expires 到期
101.They were __________in their scientific research, not knowing what happened just outside
their lab. A)submerged 淹没 B)drowned 溺死 C)immersed 沉浸 D)dipped 浸泡
102.You should _________to one or more weekly magazines such as Time or Newsweek. A)ascribe 归因于 B)order 订购 C)reclaim 收回 D)subscribe 订阅
103.The automatic doors in supermarkets _________the entry and exit of customers with
shopping carts. A)furnish 提供 B)induce 诱导 C)facilitate 促进，使便利 D)allocate 分配
104.Each workday, the workers followed the same schedules and rarely ________from this
routine. A)deviated 偏离 B)disconnected 断开 C)detached 分离 D)distorted 扭曲
105.The little girl was _________by the death of her dog since her affection for the pet had been
real and deep. A)grieved 悲伤 B)suppressed 压制 C)oppressed 压迫 D)sustained 维持
106.A visitor to a museum today would notice _______changes in the way museums are operated. A)cognitive 认知的 B)rigorous 严格的 C)conspicuous 显著的 D)exclusive 排他的
107.Most people tend to think they are so efficient at their job that they are_________. A)inaccessible 难以接近的 B)irreversible 不可逆的 C)immovable 不动的 D)irreplaceable 不可替代的
108.Being impatient is________ with being a good teacher. A)intrinsic 固有的 B)ingenious 精巧的 C)incompatible 不兼容的 D)inherent 内在的
109.For a particular reason, he wanted the information to be treated as___________ . A)assured 确定的 B)reserved 保留的 C)intimate 亲密的 D)confidential 机密的
110.Fortune-tellers are good at marking ________statements such as "Your sorrows will change," A)philosophical 哲学的 B)ambiguous 模棱两可的 C)literal 字面的 D)invalid 无效的
111.The tenant must be prepared to decorate the house _________the terms of the contract. A)in the vicinity of 在...附近 B)in quest of 寻求
C)in accordance with 按照 D)in collaboration with 与...合作
112.The winners of the football championship ran off the field carrying the silver cup_________ . A)turbulently 动荡地 B)tremendously 极其 C)triumphantly 胜利地 D)tentatively 试探地
113.He said that they had ________been obliged to give up the scheme for lack of support. A)gravely 严肃地 B)regrettably 遗憾地 C)forcibly 强制地 D)graciously 优雅地
114.The law on drinking and driving is _____________stated.
A)extravagantly 奢侈地 B)empirically 经验性地 C)exceptionally 异常地 D)explicitly 明确地
115.There claims to damages have not been convincingly___________ . A)refuted 驳斥 B)overwhelmed 压倒 C)depressed 沮丧 D)intimidated 恐吓
116.Please don't _______too much on the painful memories. Everything will be all right. A)hesitate 犹豫 B)linger 逗留 C)retain 保留 D)dwell 停留，细想
117.The jobs of wildlife technicians and biologists seemed ______to him ,but one day he
discovered their difference. A)identical 完全相同的 B)vertical 垂直的 C)parallel 平行的 D)specific 具体的
118.Mary became _________homesick and critical of the United States, so she fled from her
home in west Bloomfield to her hometown in Austria. A)completely 完全地 B)sincerely 真诚地 C)absolutely 绝对地 D)increasingly 越来越
119.Despite almost universal ________of the vital importance of women's literacy, education
remains a dream for far too many women in far too many countries of the world. A)identification 识别 B)compliment 赞美 C)confession 忏悔 D)acknowledgement 承认
120.In today's medical, little agreement exists on the __________for defining mental illness. A)legislation 立法 B)requirement 要求 C)criteria 标准 D)measures 措施
121. The lady in this strange tale very obviously suffers from a serious mental illness. Her plot
against a completely innocent old man is a clear sign of________. A) impulse 冲动 B) insanity 精神错乱 C) inspiration 灵感 D) disposition 性情
122. The Prime Minister was followed by five or six _______ when he got off the plane. A) laymen 外行 B) servants 仆人 C) directors 主管 D) attendants 随从
123. There is no doubt that the ________ of these goods to the others is easy to see. A) prestige 威望 B) superiority 优越性 C) priority 优先 D) publicity 公开
124. All the guests were invited to attend the wedding ________ and had a very good time. A) feast 宴会 B) congratulations 祝贺 C) festival 节日 D) recreation 娱乐
125. The price of the coal will vary according to how far it has to be transported and how
expensive the freight _______ are. A) payments 付款 B) charges 费用 C) funds 资金 D) prices 价格
126. The manager gave her his ________ that her complaint would be investigated. A) assurance 保证 B) assumption 假设 C) sanction 制裁 D) insurance 保险
127. Although the model looks good on the surface, it will not bear close________. A) temperament 气质 B) contamination 污染 C) scrutiny 审查 D) symmetry 对称
128. We are doing this work in the _________ of reforms in the economic, social and cultural
spheres. A) context 背景 B) contest 比赛 C) pretext 借口 D) texture 质地
129. While a full understanding of what causes the disease may be several years away, ________
leading to a successful treatment could come much sooner. A) a distinction 区别 B) a breakthrough 突破 C) an identification 识别 D) an interpretation 解释
130. Doctors are often caught in a _________ because they have to decide whether they hould tell
their patients the truth or not. A) puzzle 困惑 B) perplexity 困惑 C) dilemma 困境 D) bewilderment 迷惑
131. To ________ important dates in history, countries create special holidays. A) commend 赞扬 B) memorize 记忆 C) propagate 传播 D) commemorate 纪念
132. His successful negotiations with the Americans helped him to _________ his position in he
government. A) contrive 设法 B) consolidate 巩固 C) heave 举起 D) intensify 加剧
133. Please do not be ________ by his offensive remarks since he is merely trying to attract
attention. A) distracted 分心 B) disregarded 忽视 C) irritated 恼怒 D) intervened 干预
134. Once you get to know your mistakes, you should __________ them as soon as possible. A) rectify 纠正 B) reclaim 收回 C) refrain 抑制 D) reckon 认为
135. He wouldn't answer the reporters' questions, nor would he __________ for a photograph. A) summon 召唤 B) highlight 突出 C) pose 摆姿势 D) marshal 整理
136. The club will ________ new members the first week in September. A) enroll 招收 B) subscribe 订阅 C) absorb 吸收 D) register 登记
137. If you don't ________ the children properly, Mr. Chiver, they'll just run riot. A) mobilize 动员 B) warrant 保证 C) manipulate 操纵 D) supervise 监督
138. Already the class is ________ about who our new teacher will be. A) foreseeing 预见 B) speculating 推测 C) fabricating 捏造 D) contemplating 沉思
139. We should ________ our energy and youth to the development of our country. A) dedicate 奉献 B) cater 迎合 C) ascribe 归因于 D) cling 紧抓
140. Just because I'm ________ to him, my boss thinks he can order me around without showing
me any respect. A) redundant 多余的 B) trivial 琐碎的 C) versatile 多才多艺的 D) subordinate 下属的
141. Many scientists remain ________ about the value of this research program. A) sceptical 怀疑的 B) stationary 静止的 C) spacious 宽敞的 D) specific 具体的
142. Depression is often caused by the ________ effects of stress and overwork.. A) total 总的 B) increased 增加的 C) terrific 极好的 D) cumulative 累积的
143. A human's eyesight is not as ________ as that of an eagle. A) eccentric 古怪的 B) acute 敏锐的 C) sensible 明智的 D) sensitive 敏感的
144. It is ________ that women should be paid less than men for doing the same kind of work. A) abrupt 突然的 B) absurd 荒谬的 C) adverse 不利的 D) addictive 上瘾的
145. Shoes of this kind are ________ to slip on wet ground. A) feasible 可行的 B) appropriate 适当的 C) apt 易于 D) fitting 合适的
146. We'll be very careful and keep what you've told us strictly________. A) rigorous 严格的 B) confidential 机密的 C) private 私人的 D) mysterious 神秘的
147. The members of Parliament were ________ that the government had not consulted them. A) impatient 不耐烦的 B) tolerant 宽容的 C) crude 粗糙的 D) indignant 愤慨的
148. Some American colleges are state-supported, others are privately _______ , and still others
are supported by religious organizations. A) ensured 确保 B) attributed 归因于 C) authorized 授权 D) endowed 捐赠
149. The prison guards were armed and ready to shoot if _______ in any way. A) intervened 干预 B) incurred 招致 C) provoked 激怒 D) poked 戳
150. Many pure metals have little use because they are too soft, rust too easily, or have some other _______. A) drawbacks 缺点 B) handicaps 障碍 C) bruises 瘀伤 D) blunders 错误
151. It is was ____ that the restaurant discriminated against black customers. A) addicted 上瘾的 B) alleged 被指控的 C) assaulted 攻击 D) ascribed 归因于
152. The medicine ____ his pain but did not cure his illness. A) activated 激活 B) alleviated 减轻 C) mediated 调解 D) deteriorated 恶化
153. He is the only person who can ____ in this case because the other witnesses were killed
mysteriously. A) testify 作证 B) charge 控告 C) accuse 指责 D) rectify 纠正
154. Professor Hawking is ____ as one of the world's greatest living physicists. A) dignified 有尊严的 B) clarified 澄清 C) acknowledged 公认 D) illustrated 说明
155. The financial problem of this company is further ____ by the rise in interest rates. A) increased 增加 B) strengthened 加强 C) reinforced 加固 D) aggravated 加剧
156. We shall probably never be able to ____ the exact nature of these sub-atomic particles. A) assert 断言 B) impart 传授 C) ascertain 确定 D) notify 通知
157. All the people in the stadium cheered up when they saw hundreds of colorful balloons ____
slowly into the sky. A) ascending 上升 B) elevating 提升 C) escalating 升级 D) lingering 逗留
158. Many years had ____ before they returned to their original urban areas. A) floated 漂浮 B) elapsed 流逝 C) skipped 跳过 D) proceeded 进行
159. What you say now is not ____ with what you said last week. A) consistent 一致的 B) persistent 坚持的 C) permanent 永久的 D) insistent 坚持的
160. Military orders are ____ and cannot be disobeyed. A) defective 有缺陷的 B) conservative 保守的 C) alternative 可替代的 D) imperative 必须服从的
161. Some educators try to put students of similar abilities into the same class because they
believe this kind of ____ grouping is advisable. A) homogeneous 同质的 B) instantaneous 瞬间的 C) spontaneous 自发的 D) anonymous 匿名的
162. Even sensible men do ____ things sometimes. A) abrupt 突然的 B) absurd 荒谬的 C) acute 敏锐的 D) apt 易于
163. The commission would find itself ____ at every turn if its members couldn't reach an
agreement. A) collided 碰撞 B) savaged 攻击 C) crumbled 崩溃 D) hampered 阻碍
164. Grain production in the world is _____ but still millions go hungry. A) staggering 惊人的 B) shrinking 缩小 C) soaring 飙升 D) suspending 暂停
165. He developed a ____ attitude after years of frustration in his career. A) sneaking 偷偷摸摸的 B) disgusted 厌恶的 C) drastic 激烈的 D) cynical 愤世嫉俗的
166. They believed that this was not the ____ of their campaign for equality but merely the
beginning. A) climax 高潮 B) summit 顶峰 C) pitch 高度 D) maximum 最大值
167. Several guests were waiting in the ____ for the front door to open. A) porch 门廊 B) vent 通风口 C) inlet 入口 D) entry 入口
168. As the mountains were covered with a _____ of cloud we couldn't see their tops. A) coating 涂层 B) film 薄膜 C) veil 面纱 D) shade 阴影
169. We couldn't really afford to buy a house so we got it on hire purchase and paid monthly ____. A) investments 投资 B) requirements 要求 C) arrangements 安排 D) installments 分期付款
170. The magician made us think he cut the girl into pieces but it was merely an _____.
A) illusion 幻觉 B) impression 印象 C) image 图像 D) illumination 照明
171. A good education is an ____ you can fall back on for the rest of your life. A) asset 资产 B) ethic 伦理 C) inventory 库存 D) obligation 义务
172. Giving a gift can convey a wealth of meaning about your appreciation of their ____ and the
importance you place upon the relationship. A) solidarity 团结 B) priority 优先 C) superiority 优越 D) hospitality 款待
173. The designer has applied for a ____ for his new invention. A) tariff 关税 B) discount 折扣 C) version 版本 D) patent 专利
174. The toy maker produces a ____ copy of the space station exact in every detail. A) minimal 最小的 B) minimum 最低的 C) miniature 微型的 D) minor 较小的
175. An energy tax would curb ordinary air pollution limit oil imports and cut the budget ____. A) disposition 处置 B) discrepancy 差异 C) defect 缺陷 D) deficit 赤字
176. They have decided to ____ physical punishment in all local schools. A) put away 放好 B) break away from 脱离 C) do away with 废除 D) pass away 去世
177. Astronauts are ____ all kinds of tests before they are actually sent up in a spacecraft. A) inclined to 倾向于 B) subjected to 经受 C) prone to 易于 D) bound to 必定
178. Individual sports are run by over 370 independent governing bodies whose functions usually
include ____rules holding events selecting national teams and promoting international links. A) drawing on 利用 B) drawing in 吸引 C) drawing up 起草 D) drawing down 减少
179. Up until that time his interest had focused almost ____ on fully mastering the skills and
techniques of his craft. A) restrictively 限制性地 B) radically 根本地 C) inclusively 包容地 D) exclusively 专门地
180. All the ceremonies at the 2000 Olympic Games had a unique Australian flavor ____ of
their multicultural communities. A) noticeable 显著的 B) indicative 表明的 C) conspicuous 显眼的 D) implicit 隐含的
181. I have had my eyes tested and the report says that my ________ is perfect. A) outlook 观点 B) vision 视力 C) horizon 地平线 D) perspective 视角
182. He was looking admiringly at the photograph published by Collins in ________ with the
Imperial Museum. A) collection 收藏 B) connection 联系 C) collaboration 合作 D) combination 组合
183. In those days, executives expected to spend most of their lives in the same firm and, unless
they were dismissed for ________, to retire at the age of 65. A) integrity 正直 B) denial 否认 C) incompetence 无能 D) deduction 推理
184. Others viewed the finding with ________, noting that a cause-and-effect relationship
between passive smoking and cancer remains to be shown. A) optimism 乐观 B) passion 热情 C) caution 谨慎 D) deliberation 深思
185. The 1986 Challenger space-shuttle ________ was caused by unusually low temperatures
immediately before the launch. A) expedition 探险 B) controversy 争议 C) dismay 沮丧 D) disaster 灾难
186. When supply exceeds demand for any product, prices are ________ to fall. A) timely 及时的 B) simultaneous 同时的 C) subject 易受...的 D) liable 可能的
187. The music aroused an ________ feeling of homesickness in him. A) intentional 故意的 B) intermittent 间歇的 C) intense 强烈的 D) intrinsic 内在的
188. I bought an alarm clock with a(n) ________ dial, which can be seen clearly in the dark.
A) supersonic 超音速的 B) luminous 发光的 C) audible 可听见的 D) amplified 放大的
189. The results are hardly ________; he cannot believe they are accurate. A) credible 可信的 B) contrary 相反的 C) critical 关键的 D) crucial 重要的
190. This new laser printer is ________ with all leading software. A) comparable 可比较的 B) competitive 竞争的 C) compatible 兼容的 D) cooperative 合作的
191. The ball ________ two or three times before rolling down the slope. A) swayed 摇摆 B) bounced 弹跳 C) hopped 跳跃 D) darted 飞奔
192. He raised his eyebrows and stuck his head forward and ________ it in a single nod, a gesture
boys used then for O.K. when they were pleased. A) shrugged 耸肩 B) tugged 拉拽 C) jerked 急拉 D) twisted 扭动
193. Many types of rock are ________ from volcanoes as solid, fragmentary material. A) flung 投掷 B) propelled 推进 C) ejected 喷射 D) injected 注入
194. With prices ________ so much, it is difficult for the school to plan a budget. A) vibrating 振动 B) fluctuating 波动 C) fluttering 飘动 D) swinging 摆动
195. The person who ________ this type of approach for doing research deserves our praise. A) originated 创始 B) speculated 推测 C) generate 产生 D) manufactured 制造
196. ________ that the demand for power continues to rise at the current rate, it will not be long
before traditional sources become inadequate. A) Concerning 关于 B) Ascertaining 确定 C) Assuming 假设 D) Regarding 关于
197. Her jewelry ________ under the spotlights and she became the dominant figure at the ball. A) glared 怒视 B) glittered 闪闪发光 C) blazed 燃烧 D) dazzled 使眼花
198. Connie was told that if she worked too hard, her health would ________. A) deteriorate 恶化 B) descend 下降 C) degrade 降低 D) decay 腐烂
199. We find that some birds ________ twice a year between hot and cold countries. A) transfer 转移 B) commute 通勤 C) migrate 迁徙 D) emigrate 移居
200. As visiting scholars, they willingly ________ to the customs of the country they live in. A) submit 服从 B) conform 遵从 C) subject 使服从 D) commit 致力于
201. More than 85 percent of French Canada's population speaks French as mother tongue and
________ to the Roman Catholic faith. A) caters 迎合 B) adheres 坚持 C) ascribes 归因于 D) subscribes 订阅
202. The professor found himself constantly ________ the question: "How could anyone do these
things?" A) presiding 主持 B) poring 仔细阅读 C) pondering 沉思 D) presuming 假设
203. Weeks ________ before anyone was arrested in connection with the bank robbery. A) terminated 终止 B) elapsed 流逝 C) overlapped 重叠 D) expired 到期
204. In order to prevent stress from being set up in the metal, expansion joints are fitted which
________ the stress by allowing the pipe to expand or contra ct freely. A) relieve 缓解 B) reconcile 调和 C) reclaim 收回 D) rectify 纠正
205. How much of your country's electrical supply is ________ from water power?
A) deduced 推断 B) detached 分离 C) derived 获得 D) declined 下降
206. She has recently left a job and had helped herself to copies of the company's client data,
which she intended to ________ in starting her own business. A) dwell on 细想 B) come upon 偶然发现 C) base on 基于 D) draw upon 利用
207. The glass vessels should be handled most carefully since they are ________.
A) intricate 复杂的 B) fragile 易碎的 C) subtle 微妙的 D) crisp 脆的
208. Hill slopes are cleared of forests to make way for crops, but this only ________ the crisis. A) accelerates 加速 B) prevails 盛行 C) ascends 上升 D) precedes 先于
209. He blew out the candle and ________ his way to the door. A) converged 汇聚 B) groped 摸索 C) strived 努力 D) wrenched 扭动
210. Often such arguments have the effect of ________ rather than clarifying the issues involved. A) obscuring 模糊 B) prejudicing 偏见 C) tackling 处理 D) blocking 阻塞
211. In November 1987 the government _____ a public debate on the future direction of the
official sports policy. A) initiated 发起 B) designated 指定 C) induced 诱导 D) promoted 促进
212. I found it difficult to _____ my career ambitions with the need to bring up my children. A) consolidate 巩固 B) amend 修改 C) reconcile 协调 D) Intensify 加强
213. We all enjoy our freedom of choice and do not like to see it_____ when it is within the legal
and moral boundaries of society. A) compacted 压缩 B) restricted 限制 C) dispersed 分散 D) delayed 延迟
214. It is fortunate for the old couple that their son's career goals and their wishes for him _____. A) coincide 一致 B) comply 遵守 C) conform 符合 D) collaborate 合作
215. Allen will soon find out that real life is seldom as simple as it is _____ in commercials. A) permeated 渗透 B) alleged 声称 C) depicted 描绘 D) drafted 起草
216. Europe's earlier industrial growth was _____ by the availability of key resources, abundant
and cheap labor, coal, iron ore, etc. A) constrained 约束 B) detained 拘留 C) remained 保持 D) sustained 维持
217. As the trial went on, the story behind the murder slowly _____ itself. A) convicted 定罪 B) released 释放 C) haunted 困扰 D) unfolded 展开
218. We've just installed a fan to _________________ cooking smells from the kitchen. A) eject 弹出 B) exclude 排除 C) expel 驱逐 D) exile 流放
219. Retirement is obviously a very complex _____ period; and the earlier you start planning for it, the better. A) transformation 转变 B) transmission 传输 C) transaction 交易 D) transition 过渡
220. Mutual respect for territorial _____is one of the bases upon which our two countries develop
relationships. A) unity 统一 B) integrity 完整 C) entirety 全部 D) reliability 可靠性
221. As one of the youngest professors in the university, Mr. Brown is certainly on the _____ of a
brilliant career. A) porch 门廊 B) edge 边缘 C) course 进程 D) threshold 门槛
222. We work to make money, but it's a _____ that people who work hard and long often do not
make the most money. A) paradox 悖论 B) prejudice 偏见 C) dilemma 困境 D) conflict 冲突
223. The design of this auditorium shows a great deal of _____. We have never seen such a
building before. A) invention 发明 B) illusion 幻觉 C) originality 创意 D) orientation 方向
224. The damage to my car was _____in the accident, but I have a lingering fear even today. A) insufficient 不足的 B) ignorant 无知的 C) ambiguous 模糊的 D) negligible 可忽略的
225. Very few people could understand the lecture the professor delivered because its subject was
very_____. A) obscure 晦涩的 B) indefinite 不确定的 C) dubious 可疑的 D) intriguing 有趣的
226. Diamonds have little __________ value and their price depends almost entirely on their
scarcity. A) intrinsic 内在的 B) eternal 永恒的 C) subtle 微妙的 D) inherent 固有的
227. Doctors are interested in using lasers as a surgical tool in operations on people who are _____
to heart attack. A) infectious 传染的 B) disposed 倾向于 C) accessible 可接近的 D) prone 易于
228. Many countries have adopted systems of_____ education in order to promote the average
level of education. A) compulsory 强制的 B) cardinal 主要的 C) constrained 受限的 D) conventional 传统的
229. I had eaten Chinese food often, but I could not have imagined how_____ and extravagant a
real Chinese banquet could be. A) prominent 突出的 B) fabulous 极好的 C) handsome 英俊的 D) gracious 亲切的
230. They are _____ investors who always make thorough investigations both on local and
international markets before making an investment. A) implicit 隐含的 B) conscious 有意识的 C) cautious 谨慎的 D) indecisive 优柔寡断的
231. In addition to the rising birthrate and immigration, the _____death rate contributed to the
population growth. A) inclining 倾斜的 B) increasing 增加的 C) declining 下降的 D) descending 下降的
232. Because of the _____ noise of traffic I couldn't get to sleep last night. A) prevalent 普遍的 B) perpetual 永久的 C) provocative 挑衅的 D) progressive 进步的
233. Don't let such a _____ matter as this come between us so that we can concentrate on the
major issue. A) trivial 琐碎的 B) slight 轻微的 C) partial 部分的 D) minimal 最小的
234. If you go to the park every day in the morning, you will _____ find him doing physical
exercise there. A) ordinarily 通常地 B) variably 可变地 C) logically 逻辑上 D) persistently 坚持地
235. Although she's a(n) _______________talented dancer, she still practices several hours every
day. A) traditionally 传统地 B) additionally 另外 C) exceptionally 异常地 D) rationally 理性地
236. The cut in her hand has healed completely, without leaving a. A) defect 缺陷 B) sign 迹象 C) wound 伤口 D) scar 疤痕
237. The idea is to ___________ the frequent incidents of collision to test the strength of the
wind-shields. A) assemble 组装 B) simulate 模拟 C) accumulate 积累 D) forge 锻造
238. Most people in the modem world ________________ freedom and independence more than
anything else. A) embody 体现 B) cherish 珍惜 C) fascinate 迷住 D) illuminate 照亮
239.1 told him that I would _____________ him to act for me while I was away from office.. A) authorize 授权 B) justify 证明 C) rationalize 合理化 D) identify 识别
240. Over the past ten years, natural gas production has remained steady, but _______________
has risen steadily.
A) dissipation 消散 B) disposal 处理 C) consumption 消费 D) expenditure 支出
241. These were stubborn men. not easily ________to change their mind. A) tilted 倾斜 B) converted 转变 C) persuaded 说服 D) suppressed 压制
242. The circus has always been very, popular because it ________both the old and the young. A) facilitates 便利 B) fascinates 使着迷 C) immerses 沉浸 D) indulges 放纵
243. By patient questioning the lawyer managed to ________enough information from the
witnesses. A) evacuate 撤离 B) withdraw 撤回 C) impart 传授 D) elicit 引出
244. George enjoys talking about people's private affairs. He is a ________. A) solicitor 律师 B) coward 懦夫 C) gossip 爱说闲话的人 D) rebel 叛逆者
245. The new secretary has written a remarkably ________report within a few hundred words but
with all the important details included. A) concise 简洁的 B) brisk 轻快的 C) precise 精确的 D) elaborate 精心制作的
246. His face ________as he came in after running all the way from school. A) flared 燃烧 B) fluctuated 波动 C) fluttered 颤动 D) flushed 发红
247. Steel is not as ________ as cast iron; it does not break as easily. A) elastic 有弹性的 B) brittle 脆的 C) adaptable 适应性强的 D) flexible 灵活的
248. A big problem in lemming English as a foreign language is lack of opportunities for ________interaction with proficient speakers of English. A) instantaneous 即时的 B) provocative 挑衅的 C) verbal 口头的 D) dual 双重的
249. Within ten years they have tamed the ________hill into green woods. A) vacant 空的 B) barren 贫瘠的 C) weird 奇怪的 D) wasteful 浪费的
250. The ________of our trip to London was the visit to Buckingham Palace. A) summit 顶点 B) height 高度 C) peak 顶峰 D) highlight 亮点
251. Harold claimed that he was a serious and well-known artist, but in fact he was a(n) ________. A) alien 外星人 B) client 客户 C) counterpart 对应物 D) fraud 骗子
252. We don't ________any difficulties in completing the project so long as we keep within our
budget. A) foresee 预见 B) fabricate 捏造 C) infer 推断 D) inhibit 抑制
253. He is looking for a job that will give him greater ________for career development. A) insight 洞察力 B) scope 范围 C) momentum 动力 D) phase 阶段
254. The high school my daughter studies in is ________our university. A) linked by 连接 B) relevant to 相关 C) mingled with 混合 D) affiliated with 隶属于
255. The Browns lived in a ________and comfortably furnished house in the suburbs. A) spacious 宽敞的 B) sufficient 足够的 C) wide 宽的 D) wretched 可怜的
256. A membership card ________the holder to use the club's facilities for a period of twelve
months. A) approves 批准 B) authorizes 授权 C) rectifies 纠正 D) endows 赋予
257. They have done away with ________Latin for university entrance at Harvard. 2A) influential 有影响的 B) indispensable 必不可少的 C) compulsory 必修的 D) essential 必要的
258. It is no ________that a large number of violent crimes are committed under the influence of
alcohol. A) coincidence 巧合 B) correspondence 通信 C) inspiration 灵感 D) intuition 直觉
259. One's university days often appear happier in ________than they actually were at the time. A) retention 保留 B) retrospect 回顾 C) return 返回 D) revere 尊敬
260. She ________through the pages of a magazine, not really concentrating on them. A) tumbled 跌倒 B) tossed 抛 C) switched 切换 D) flipped 翻阅
261. Scientists are pushing known technologies to their limits in an attempt to ________more
energy from the earth. A) extract 提取 B) inject 注入 C) discharge 释放 D) drain 排出
262. The Chinese Red Cross ________a generous sum to the relief of the victims of the
earthquake in Turkey. A) administered 管理 B) elevated 提升 C) assessed 评估 D) contributed 捐献
263. The first sentence in this paragraph is ________; it can be interpreted in many ways. A) intricate 复杂的 B) ambiguous 模糊的 C) duplicated 复制的 D) confused 困惑的
264. They used to quarrel a lot, but now they are completely ________with each other. A) reconciled 和解 B) negotiated 谈判 C) associated 联合 D) accommodated 适应
265. The local business was not much ________by the sudden outbreak of the epidemic. A) intervened 干预 B) insulated 隔离 C) hampered 阻碍 D) hoisted 升起
266. The most important ________for assessment in this contest is originality of design. A) threshold 门槛 B) partition 分区 C) warrant 授权 D) criterion 标准
267. The woman was worried about the side effects of taking aspirins. but her doctor ________her
that it is absolutely harmless. A) retrieved 取回 B) released 释放 C) reassured 使安心 D) revived 复苏
268. We can't help being ________of Bob who bought a luxurious sports car just after the money
was stolen from the office. A) skeptical 怀疑的 B) appreciative 感激的 C) suspicious 怀疑的 D) tolerant 宽容的
269. He greatly resented the publication of this book. which he saw as an embarrassing invasion of
his ________. A) privacy 隐私 B) morality 道德 C) dignity 尊严 D) secrecy 保密
270. In fact as he approached this famous statue, he only barely resisted the ________to reach into
his bag for his camera. A) impatience 不耐烦 B) impulse 冲动 C) incentive 激励 D) initiative 主动性
答案：
1-5 B D D C A
6-10 D B C A B
11-15 C B A A B
16-20 D C D B A
21-25 C C D A C
26-30 B C D B A
31-35 B A D A D
36-40 C A B B B
41-45 C C B A D
46-50 D A C D A
51-55 B C C C B
56-60 B C B A B
61-65A D B C A
66-70 C C B B D
71-75A C B A D
76-80 B C A B C
81-85 C D A D D
86-90 A D A D B
91-95 D B B B C
96-100 B D A B B
101-105 C D C A A
106-110 C D C D B
111-115 C C B D A
116-120 D A D D C
121-125A D B A B
126-130A C A D C
131-135D B C A C
136-140C D B A D
141-145A D B B C
146-150 B D D C A
151-155 B B A C D
156-160CABAD
161-165 A B D C D
166-170 A A C D A
171-175 A D D C D
176-180C B C D B
181- 185 B C C C D
186-190 D C B A C
191-195 B C C B A
196-200C B A C B
201-205 B C B A C
206-210 D B A B A
211-215 A C B A C
216-220 D D C D B
221-225 D A C D A 226-230 A D A C C 231-235 C B A B C 236-240 D B B A C
241--245 C B D C D 246--250 D B C B A 251--255 D A B D A 256--260 B C A B D
261--265 A D B A C 266--270 D C C A B
`;

// --- Type Definitions ---
interface Question {
  id: number;
  text: string;
  options: { key: string; text: string }[];
  correctAnswer?: string; // "A", "B", "C", "D"
}

interface ParseResult {
  questions: Question[];
  answerMap: Record<number, string>;
  error?: string;
}

// --- Theme Definitions ---
const THEMES = {
  light: {
    bg: '#f9fafb',
    headerBg: '#ffffff',
    cardBg: '#ffffff',
    textMain: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    primary: '#4f46e5',
    inputBg: '#ffffff',
    inputBorder: '#d1d5db',
    highlightBg: '#e0e7ff',
    highlightText: '#4f46e5',
    buttonBg: '#f3f4f6',
    buttonText: '#374151',
    correctBg: '#ecfdf5',
    correctBorder: '#10b981',
    correctText: '#065f46',
    correctIcon: '#10b981',
    optionBg: '#f9fafb',
    optionBorder: '#f3f4f6',
    optionText: '#4b5563',
    optionKey: '#9ca3af',
    missingKey: '#d97706',
    searchIcon: '#9ca3af',
  },
  dark: {
    bg: '#0f172a', // slate-900
    headerBg: '#1e293b', // slate-800
    cardBg: '#1e293b',
    textMain: '#f8fafc', // slate-50
    textSecondary: '#94a3b8', // slate-400
    border: '#334155', // slate-700
    primary: '#818cf8', // indigo-400
    inputBg: '#0f172a',
    inputBorder: '#334155',
    highlightBg: 'rgba(79, 70, 229, 0.2)',
    highlightText: '#818cf8',
    buttonBg: '#334155',
    buttonText: '#cbd5e1',
    correctBg: 'rgba(5, 150, 105, 0.2)', // emerald-900/20
    correctBorder: '#059669', // emerald-600
    correctText: '#34d399', // emerald-400
    correctIcon: '#34d399',
    optionBg: '#0f172a',
    optionBorder: '#334155',
    optionText: '#cbd5e1',
    optionKey: '#64748b',
    missingKey: '#fbbf24',
    searchIcon: '#64748b',
  }
};

// --- Parsing Logic ---
const parseContent = (rawText: string): ParseResult => {
  const questions: Question[] = [];
  const answerMap: Record<number, string> = {};

  try {
    const lines = rawText.split('\n');
    let currentQuestion: Partial<Question> | null = null;
    let inAnswerSection = false;

    // Helper to push current question
    const pushCurrentQuestion = () => {
      if (currentQuestion && currentQuestion.id && currentQuestion.text) {
        // Extract options from the accumulated text
        const fullText = currentQuestion.text;
        
        // Regex to find Options: A) ... B) ... C) ... D) ...
        // We look for " A)", " B)" etc, or start of line "A)"
        // This is a bit tricky because options can be on new lines or same line
        // Strategy: Split by the option markers
        
        // 1. Identify where options start. Usually look for "A)" or "A."
        // We will assume standard format A) B) C) D) or A. B. C. D.
        const optionRegex = /(?:\s|^)(?:[A-D]\)|[A-D]\.)\s/g;
        const matches = [...fullText.matchAll(optionRegex)];
        
        let qTextEndIndex = fullText.length;
        if (matches.length > 0) {
          qTextEndIndex = matches[0].index!;
        }

        const qBody = fullText.substring(0, qTextEndIndex).trim();
        const optionsPart = fullText.substring(qTextEndIndex);

        const options: { key: string; text: string }[] = [];
        
        // specific parsers for A) B) C) D)
        const parts = optionsPart.split(/(?:\s|^)([A-D](?:\)|\.))\s/);
        // parts[0] is empty or garbage before A
        // parts[1] is "A)"
        // parts[2] is text for A
        // parts[3] is "B)"
        // parts[4] is text for B...
        
        for (let i = 1; i < parts.length; i += 2) {
          const key = parts[i].replace(/[).]/, '').trim(); // "A"
          const val = parts[i+1]?.trim() || "";
          if (key && val) {
            options.push({ key, text: val });
          }
        }

        questions.push({
          id: currentQuestion.id!,
          text: qBody,
          options: options
        });
      }
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (!line) continue;

      // Detect Answer Section Start
      if (line.includes('答案') || line.match(/^\d+[-~]\d+\s+[A-D]/)) {
        inAnswerSection = true;
      }

      if (inAnswerSection) {
        // Parse Answer Line: "1-5 A B C D A" or "261--265 A D B A C"
        // Regex for range: (\d+)[-~]+(\d+)
        const rangeMatch = line.match(/(\d+)(?:[-~]+)(\d+)(.*)/);
        if (rangeMatch) {
          const start = parseInt(rangeMatch[1]);
          const end = parseInt(rangeMatch[2]);
          // The rest of the line contains the answers, usually space separated letters
          // Remove non-answer chars
          const answerString = rangeMatch[3].toUpperCase().replace(/[^A-D]/g, '');
          
          if (answerString.length > 0) {
            const answers = answerString.split('');
            let currentId = start;
            answers.forEach(ans => {
               if (currentId <= end) {
                 answerMap[currentId] = ans;
                 currentId++;
               }
            });
          }
          
          // Handle multiple ranges on one line? e.g. "221-225 ... 226-230 ..."
          // The above simple regex only catches the first one. Let's do a global approach for the line.
          // Better approach for answer line: Find all occurrences of "Range Answers"
          const globalRangeRegex = /(\d+)(?:[-~]+)(\d+)\s+([A-D\s]+)/g;
          const allRanges = [...line.matchAll(globalRangeRegex)];
          
          if (allRanges.length > 0) {
              // Reset what we might have done with the simple match if complex match works better
              // Actually, simply iterating matches is safer
              for (const match of allRanges) {
                  const s = parseInt(match[1]);
                  const e = parseInt(match[2]);
                  const ansStr = match[3].replace(/\s+/g, '');
                  for (let k = 0; k < ansStr.length; k++) {
                      if (s + k <= e) {
                          answerMap[s+k] = ansStr[k];
                      }
                  }
              }
          }
        }
        continue; // Don't parse as question
      }

      // Detect Question Start: "1. " or "259. "
      const qStartMatch = line.match(/^(\d+)(?:[\.|])\s*(.*)/);
      if (qStartMatch) {
        // Save previous
        pushCurrentQuestion();
        
        // Start new
        currentQuestion = {
          id: parseInt(qStartMatch[1]),
          text: qStartMatch[2]
        };
      } else {
        // Continuation of previous question or options
        if (currentQuestion) {
          currentQuestion.text += " " + line;
        }
      }
    }
    // Push last question
    pushCurrentQuestion();

    // Map answers to questions
    questions.forEach(q => {
      if (answerMap[q.id]) {
        q.correctAnswer = answerMap[q.id];
      }
    });

    return { questions, answerMap };

  } catch (e) {
    return { questions: [], answerMap: {}, error: "Failed to parse content." };
  }
};

const App = () => {
  const [rawText, setRawText] = useState(DEFAULT_TEXT);
  const [showInput, setShowInput] = useState(false); // Default hidden to show UI first
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? THEMES.dark : THEMES.light;
  
  // Sync body background with theme
  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.textMain;
    document.body.style.transition = 'background-color 0.2s, color 0.2s';
  }, [theme]);
  
  const { questions, parseError } = useMemo(() => {
    const res = parseContent(rawText);
    return { questions: res.questions, parseError: res.error };
  }, [rawText]);

  // Filter Logic
  const filteredQuestions = useMemo(() => {
    if (!searchTerm) return questions;
    const lower = searchTerm.toLowerCase();
    return questions.filter(q => 
      q.text.toLowerCase().includes(lower) || 
      q.id.toString() === lower ||
      q.options.some(o => o.text.toLowerCase().includes(lower))
    );
  }, [questions, searchTerm]);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: theme.bg, minHeight: '100vh', paddingBottom: '40px', color: theme.textMain, transition: 'background-color 0.2s, color 0.2s' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: theme.headerBg, borderBottom: `1px solid ${theme.border}`, position: 'sticky', top: 0, zIndex: 10, transition: 'background-color 0.2s, border-color 0.2s' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: theme.textMain, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={24} color={theme.primary} />
              Vocabulary Matcher
            </h1>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', borderRadius: '6px', backgroundColor: theme.buttonBg, color: theme.buttonText, border: 'none', cursor: 'pointer' }}
                title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => setShowInput(!showInput)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', padding: '6px 12px', borderRadius: '6px', backgroundColor: showInput ? theme.highlightBg : theme.buttonBg, color: showInput ? theme.highlightText : theme.buttonText, border: 'none', cursor: 'pointer', fontWeight: 500 }}
              >
                <Edit2 size={16} />
                {showInput ? 'Hide Source' : 'Edit Source'}
              </button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <Search size={20} color={theme.searchIcon} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search by word, question number, or option..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: `1px solid ${theme.inputBorder}`, backgroundColor: theme.inputBg, color: theme.textMain, fontSize: '1rem', outline: 'none', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
            />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px' }}>
        
        {/* Source Input Area (Collapsible) */}
        {showInput && (
          <div style={{ marginBottom: '24px', backgroundColor: theme.cardBg, padding: '16px', borderRadius: '8px', border: `1px solid ${theme.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: theme.textSecondary, marginBottom: '8px' }}>Source Text (Paste PDF content here)</h3>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              style={{ width: '100%', height: '300px', padding: '12px', borderRadius: '6px', border: `1px solid ${theme.inputBorder}`, backgroundColor: theme.inputBg, color: theme.textMain, fontFamily: 'monospace', fontSize: '0.875rem', resize: 'vertical' }}
            />
            <div style={{ marginTop: '8px', fontSize: '0.75rem', color: theme.textSecondary }}>
              Format: Number. Question text... A) opt1 B) opt2 ... <br/>
              Answers at end: 1-5 A B C D E
            </div>
          </div>
        )}

        {/* Stats */}
        <div style={{ marginBottom: '16px', fontSize: '0.875rem', color: theme.textSecondary, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Found {questions.length} questions. Showing {filteredQuestions.length}.</span>
            {parseError && <span style={{ color: '#dc2626' }}>{parseError}</span>}
        </div>

        {/* Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredQuestions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: theme.textSecondary }}>
              <p>No questions found matching your search.</p>
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <div key={q.id} style={{ backgroundColor: theme.cardBg, borderRadius: '12px', border: `1px solid ${theme.border}`, padding: '20px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transition: 'background-color 0.2s, border-color 0.2s' }}>
                {/* Question Header */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '700', color: theme.primary, minWidth: '30px' }}>{q.id}.</span>
                  <div style={{ fontSize: '1.05rem', color: theme.textMain, lineHeight: '1.5' }}>
                    {/* Highlight blanks matches in text if simple underscores */}
                    {q.text.split(/(_+)/).map((part, i) => 
                      part.match(/_+/) ? <span key={i} style={{ color: theme.textSecondary, fontWeight: 'bold' }}>_______</span> : part
                    )}
                  </div>
                </div>

                {/* Options Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px' }}>
                  {q.options.map((opt) => {
                    const isCorrect = q.correctAnswer === opt.key;
                    return (
                      <div 
                        key={opt.key} 
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          padding: '10px 12px', 
                          borderRadius: '8px', 
                          backgroundColor: isCorrect ? theme.correctBg : theme.optionBg,
                          border: isCorrect ? `1px solid ${theme.correctBorder}` : `1px solid ${theme.optionBorder}`,
                          color: isCorrect ? theme.correctText : theme.optionText,
                          transition: 'all 0.2s'
                        }}
                      >
                        <span style={{ fontWeight: '600', marginRight: '8px', color: isCorrect ? theme.correctText : theme.optionKey, minWidth: '20px' }}>{opt.key})</span>
                        <span style={{ fontWeight: isCorrect ? '600' : '400' }}>{opt.text}</span>
                        {isCorrect && <CheckCircle size={16} style={{ marginLeft: 'auto', color: theme.correctIcon }} />}
                      </div>
                    );
                  })}
                </div>

                {/* Fallback if answer key exists but option parsing failed or no matching option key */}
                {q.correctAnswer && !q.options.find(o => o.key === q.correctAnswer) && (
                   <div style={{ marginTop: '12px', fontSize: '0.875rem', color: theme.correctText, fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle size={14} />
                      Correct Answer: {q.correctAnswer} (Option text not found)
                   </div>
                )}
                 {/* Fallback if no answer key found */}
                 {!q.correctAnswer && (
                   <div style={{ marginTop: '12px', fontSize: '0.875rem', color: theme.missingKey, fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <AlertCircle size={14} />
                      Answer key not found
                   </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}