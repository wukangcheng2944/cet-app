import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, BookOpen, Edit2, CheckCircle, XCircle, FileText, AlertCircle } from 'lucide-react';

// --- Default Data from OCR ---
const DEFAULT_TEXT = `词汇练习 sherry
1
1. The doctors don't _______ that he will live much longer. A) articulate B) anticipate C) manifest D) monitor
2.I suggest we put the scheme into effect, for it is quite_______. A) eligible B) sustainable C) probable D) feasible
3.The old gentleman was a very ________ looking person, with grey hair and gold spectacles. A) respectful B) respected C) respective D) respectable
4.This book is expected to _______ the best - seller lists. A) promote B) prevail C) dominate D) exemplify
5.That part of the city has long been ________ for its street violence. A) notorious B) responsible C) historical D) illegal
6.Under the guidance of their teacher, the pupils are building a model boat_______ by steam. A) towed B) pressed C) tossed D) propelled
7.Having finished their morning work, the clerks stood up behind their desks, ________
themselves. A) expanding B) stretching C) prolonging D) extending
8.England's team, who are now superbly fit, will be doing their best next week to ________
themselves for last year's defeat. A) revive B) retort C) revenge D) remedy
9.If you want to get into that tunnel, you first have to _______ away all the rocks. A) haul B) transfer C) repel D) dispose
10.It took us only a few hours to _______the paper off all four walls. A) shear B) scrape C) stroke D) chip
11.The famous scientist _______his success to hard work. A) imparted B) granted C) ascribed D) acknowledged
12.It is difficult to _______of a plan to end poverty. A) speculate B) conceive C) ponder D) reckon
13. Now the cheers and applause _______in a single sustained roar. A) mingled B) concentrated C) assembled D) permeated
14..Improved consumer confidence is ________ to an economic recovery. A) crucial B) subordinate C) cumulative D) satisfactory
15.Although the body is made up of many different tissues, these tissues are arranged in
an _______ and orderly fashion. A) incredible B) intricate C) internal D) initial
16.If you work under a car when repairing it, you often get very_______. A) waxy B) slippery C) sticky D) greasy
17.The damage to his car was_______; therefore, he could repair it himself. A) considerable B) appreciable C) negligible D) invisible
18. My sister is quite _______ and plans to get an M. A. degree within one year. A) aggressive B) enthusiastic C) considerate D) ambitious
19.The manager tried to wave aside these issues as _______ details that would be settled later. A) versatile B) trivial C) preliminary D) alternate
20.His_______was telling him that something was wrong. A) intuition B) hypothesis C) inspiration D) sentiment
21.This book is about how these basic beliefs and values affect important _______ of American life.
A) fashions B) frontiers C) facets D) formats
22.Parents often faced the _______ between doing what they felt was good for the development of the
child and what they could stand by way of undisciplined noise and destructiveness. A) paradox B) junction C) dilemma D) premise
23.Clark felt that his _______ in one of the most dramatic medical experiments of all time was worth
the suffering he underwent. A) apprehension B) appreciation C) presentation D) participation
24.As one of the youngest professors in the university, Miss King is certainly on the ________ of a
brilliant career. A) threshold B) edge C) porch D) course
25.The_______lawyer made a great impression on the jury. A) protecting B) guarding C) defending D) shielding
26.Very few people understood his lecture, the subject of which was very_______. A) dim B) obscure C) conspicuous D) intelligible
27.This movie is not ________ for children to see: it contains too much violence
and too many love scenes. A) profound B) valid C) decent D) upright
28.The wood was so rotten that, when we pulled, it _______ into fragments. A) broke off B) broke away C) broke through D) broke up
29.The detective and his assistant have begun to _______ the mysterious murder. A) come through B) look into C) make over D) see to
30.Sadly, the Giant Panda is one of the many species now in danger of_______. A) extinction B) migration C) destruction D) extraction
31.For many patients, institutional care is the most ______ and beneficial form of care. A) pertinent B) appropriate C) acute D) persistent
32.Among all the changes resulting from the ______ entry of women into the work force, the
transformation that has occurred in the women themselves is not the least important. A) massive B) quantitative C) surplus D) formidable
33.Mr. Smith became very ______ when it was suggested that he had made a mistake. A) ingenious B) empirical C) objective D) indignant
34.Rumours are everywhere, spreading fear, damaging reputations, and turning calm situations
into______ ones. A) turbulent B) tragic C) vulnerable D) suspicious
35.The ______ cycle of life and death is a subject of interest to scientists and philosophers alike. A) incompatible B) exceeding C) instantaneous D) eternal
36.She remains confident and ______ untroubled by our present problems. A) indefinitely B) infinitely C) optimistically D) seemingly
37.Fiber-optic cables can carry hundreds of telephone conversations ______. A. simultaneously B) spontaneously C) homogeneously D) contemporarily
38.The police were alerted that the escaped criminal might be in the ______. A) vain B) vicinity C) court D) jail
39.Whether you live to eat or eat to live, food is a major ______ in every family's budget. A) nutrition B) expenditure C) routine D) provision
40.Now a paper in Science argues that organic chemicals in the rock come mostly from ______
on earth rather than bacteria on Mars. A) configuration B) constitution C) condemnation D) contamination
41.There is much I enjoy about the changing seasons, but my favorite time is the ______ from fall
to winter. A) transmission B) transformation C) transition D) transfer
42.I think we need to see an investment ______ before we make an expensive mistake. A) guide B) entrepreneur C) consultant D) assessor
43.The ______ on this apartment expires in a year's time. A) treaty B) lease C) engagement D) subsidy
44.The elderly Russians find it hard to live on their state ______. A) pensions B) earnings C) salaries D) donations
45.There is supposed to be a safety ______ which makes it impossible for trains to collide. A) appliance B) accessory C) machine D) mechanism
46.After four years in the same job his enthusiasm finally ______. A) deteriorated B) dispersed C) dissipated D) drained
47.No one can function properly if they are _______ of adequate sleep. A) deprived B) ripped C) stripped D) contrived
48.For years now, the people of that faraway country have been cruelly ______ by a dictator. A) depressed B) immersed C) oppressed D) cursed
49.Ever since the rise of industrialism, education has been ______ towards producing workers. A) harnessed B) hatched C) motivated D) geared
50.The prospect of increased prices has already ______ worries. A) provoked B) irritated C) inspired D) hoisted
51.The suspect ______ that he had not been in the neighbourhood at the time of the crime. A) advocated B) alleged C) addressed D) announced
52.Although the colonists ______ to some extent with the native Americans, the Indians' influence
on American culture and language was not extensive. A) migrated B) matched C) mingled D) melted
53.E-mail is a convenient, highly democratic informal medium for conveying messages that _______ well to human needs. A) adheres B) reflects C) conforms D) satisfies
54.The wings of the bird still ______ after it had been shot down. A) slapped B) scratched C) flapped D) fluctuated
55.The disagreement over trade restrictions could seriously ______ relations between the two
countries. A) tumble B) jeopardize C) manipulate D) intimidate
56.When you put up wallpaper, should you ______ the edges or put them next to each other?
A) coincide B) extend C) overlap D) collide
57.Under the present system, state enterprises must ______ all profits to the government. A) turn down B) turn up C) turn out D) turn in
58.Oil companies in the U.S. are already beginning to feel the pressure. Refinery workers and
petroleum-equipment-manufacturing employees are being _______. A) laid out B) laid off C) laid down D) laid aside
59.We'll ______ you for any damage done to your house while we are in it.
A) compensate B) remedy C) supplement D) retrieve
60.She cut her hair short and tried to ______ herself as a man. A) decorate B) disguise C) fabricate D) fake
61. Starting with the ________ that there is life on the planet Mars, the scientist went on to
develop his argument. A) premise B) pretext C) foundation D) presentation
62. After several nuclear disasters, a ________ has raged over the safety of nuclear energy. A) quarrel B) suspicion C) verdict D) controversy
63. Their diplomatic principles completely laid bare their ________ for world conquest. A) admiration B) ambition C) administration D)orientation
64. The director gave me his ________ that he would double my pay if I did my job well. A) warrant B) obligation C) assurance D) certainty
65. The Christmas tree was decorated with shining ______ such as colored lights and glass balls. A) ornaments B) luxuries C) exhibits D)complements 66. The two most important ________ in making a cake are flour and sugar . A) elements B) components C) ingredients D) constituents
67. Cultural ________ indicates that human beings hand their languages down from
one generation to another. A) translation B) transition C) transmission D) transaction
68. We must look beyond ________ and assumptions and try to discover what is missing. A) justifications B) illusions C) manifestations D) specifications
69. No one imagined that the apparently ________ businessman was really a criminal. A) respective B) respectable C) respectful D) realistic
70. If nothing is done to protect the environment, millions of species that are alive today
will have become ________ . A) deteriorated B) degenerated C) suppressed D) extinct
71. The ________ of the scientific attitude is that the human mind can succeed in understanding
the universe. A) essence B) texture C) content D) threshold
72. The old lady has developed a ________ cough which cannot be cured completely in a short
time. A) perpetual B) permanent C) chronic D) sustained
73. What the correspondent sent us is an ________ news report. We can depend on it
A) evident B) authentic C) ultimate D) immediate
74. Having had her as a professor and adviser, I can tell you that she is an _______ force who
pushes her students to excel far beyond their own expectations. A) inspirational B) educational C) excessive D) instantaneous
75. Some researchers feel that certain people have nervous systems particularly ______ to hot, dry
winds. They are what we call weather sensitive people. A) subjective B) subordinate C) liable D) vulnerable
76. Hurricanes are killer winds, and their _______ power lies in the physical damage they can do. A) cumulative B) destructive C) turbulent D) prevalent
77. In some countries, students are expected to be quiet and ________ in the classroom. A) skeptical B) faithful C) obedient D) subsidiary
78. In spite of the ______economic forecasts, manufacturing output has risen slightly. A) gloomy B) miserable C) shadowy D) obscure
79. Body paint or face paint is used mostly by men in preliterate societies in order to attract good
health or to _______ disease. A) set aside B) ward off C) shrug off D) give away
80. The international situation has been growing _____difficult for the last few years. A) invariably B) presumably C) increasingly D) dominantly
81. The prisoner was ______ of his civil liberty for three years. A) discharged B) derived C) deprived D) dispatched
82. Small farms and the lack of modern technology have ______ agricultural production. A) blundered B) tangled C) bewildered D) hampered
83. The Japanese scientists have found that scents ______ efficiency and reduce stress among
office workers. A) enhance B) amplify C) foster D) magnify
84. All the students have to ______to the rules and regulations of the school. A) confirm B) confront C) confine D) conform
85. He ______ his head, wondering how to solve the problem
A) scrapped B) screwed C) scraped D) scratched
86. As soon as the boy was able to earn his own living he ______ his parents' strict rules. A) defied B) refuted C) excluded D) vetoed
87. The helicopter a light plane and both pilots were killed. A) coincided with B) stumbled on C) tumbled to D) collided with
88. To ______ is to save and protect, to leave what we ourselves enjoy in such good condition that
others may also share the enjoyment. A) conserve B) conceive C) convert D) contrive
89. Put on dark glasses or the sun will ______ you and you won' t be able to see. A) discern B) distort C) distract D) dazzle
90. In ______ times human beings did not travel for pleasure but to find a more favourable
climate. A) prime B) primitive C) primary D) preliminary
91.If you want this painkiller, you’ll have to ask the doctor for a________. A)transaction B)permit C)settlement D)prescription
92.The_________ from childhood to adulthood is always critical time for everybody. A)conversion B)transition C)turnover D)transformation
93.It is hard to tell whether we are going to have a boom in the economy or a __________. A)concession B)recession C)submission D)transmission
94.His use of color light and form quickly departed from the conventional style of his_________
as he developed his own technique. A)descendants B)predecessors C)successors D)ancestors
95.Failure in a required subject may result in the_________ of a diploma. A) refusal B)betrayal C)denial D)burial
96.To help students understand how we see teachers often draw an__________ between an eye
and a camera. A)image B)analogy C)imitation D)axis
97.A 1994 World Bank report concluded that_________ girls in school was probably the single
most effective anti-poverty policy in the developing world today. A)assigning B)admitting C)involving D)enrolling
98.The author of the report is well __________with the problems in the hospital because he has
been working there for many years. A)acquainted B)informed C)accustomed D)known
99.When the farmers visited the city for the first time, they were __________by its complicated
traffic system. A)evoked B)bewildered C)diverted D)undermined
100.If Japan__________ its relation with that country it will have to find another supplier of raw
materials. A)precludes B)terminates C)partitions D) expires
101.They were __________in their scientific research, not knowing what happened just outside
their lab. A)submerged B)drowned C)immersed D)dipped
102.You should _________to one or more weekly magazines such as Time or Newsweek. A)ascribe B)order C)reclaim D)subscribe
103.The automatic doors in supermarkets _________the entry and exit of customers with
shopping carts. A)furnish B)induce C)facilitate D)allocate
104.Each workday, the workers followed the same schedules and rarely ________from this
routine. A)deviated B)disconnected C)detached D)distorted
105.The little girl was _________by the death of her dog since her affection for the pet had been
real and deep. A)grieved B)suppressed C)oppressed D)sustained
106.A visitor to a museum today would notice _______changes in the way museums are operated. A)cognitive B)rigorous C)conspicuous D)exclusive
107.Most people tend to think they are so efficient at their job that they are_________. A)inaccessible B)irreversible C)immovable D)irreplaceable
108.Being impatient is________ with being a good teacher. A)intrinsic B)ingenious C)incompatible D)inherent
109.For a particular reason, he wanted the information to be treated as___________ . A)assured B)reserved C)intimate D)confidential
110.Fortune-tellers are good at marking ________statements such as “Your sorrows will change,” A)philosophical B)ambiguous C)literal D)invalid
111.The tenant must be prepared to decorate the house _________the terms of the contract. A)in the vicinity of B)in quest of
C)in accordance with D)in collaboration with
112.The winners of the football championship ran off the field carrying the silver cup_________ . A)turbulently B)tremendously C)triumphantly D)tentatively
113.He said that they had ________been obliged to give up the scheme for lack of support. A)gravely B)regrettably C)forcibly D)graciously
114.The law on drinking and driving is _____________stated.
A)extravagantly B)empirically C)exceptionally D)explicitly
115.There claims to damages have not been convincingly___________ . A)refuted B)overwhelmed C)depressed D)intimidated
116.Please don’t _______too much on the painful memories. Everything will be all right. A)hesitate B)linger C)retain D)dwell
117.The jobs of wildlife technicians and biologists seemed ______to him ,but one day he
discovered their difference. A)identical B)vertical C)parallel D)specific
118.Mary became _________homesick and critical of the United States, so she fled from her
home in west Bloomfield to her hometown in Austria. A)completely B)sincerely C)absolutely D)increasingly
119.Despite almost universal ________of the vital importance of women’s literacy, education
remains a dream for far too many women in far too many countries of the world. A)identification B)compliment C)confession D)acknowledgement
120.In today’s medical, little agreement exists on the __________for defining mental illness. A)legislation B)requirement C)criteria D)measures
121. The lady in this strange tale very obviously suffers from a serious mental illness. Her plot
against a completely innocent old man is a clear sign of________. A) impulse B) insanity C) inspiration D) disposition
122. The Prime Minister was followed by five or six _______ when he got off the plane. A) laymen B) servants C) directors D) attendants
123. There is no doubt that the ________ of these goods to the others is easy to see. A) prestige B) superiority C) priority D) publicity
124. All the guests were invited to attend the wedding ________ and had a very good time. A) feast B) congratulations C) festival D) recreation
125. The price of the coal will vary according to how far it has to be transported and how
expensive the freight _______ are. A) payments B) charges C) funds D) prices
126. The manager gave her his ________ that her complaint would be investigated. A) assurance B) assumption C) sanction D) insurance
127. Although the model looks good on the surface, it will not bear close________. A) temperament B) contamination C) scrutiny D) symmetry
128. We are doing this work in the _________ of reforms in the economic, social and cultural
spheres. A) context B) contest C) pretext D) texture
129. While a full understanding of what causes the disease may be several years away, ________
leading to a successful treatment could come much sooner. A) a distinction B) a breakthrough C) an identification D) an interpretation
130. Doctors are often caught in a _________ because they have to decide whether they hould tell
their patients the truth or not. A) puzzle B) perplexity C) dilemma D) bewilderment
131. To ________ important dates in history, countries create special holidays. A) commend B) memorize C) propagate D) commemorate
132. His successful negotiations with the Americans helped him to _________ his position in he
government. A) contrive B) consolidate C) heave D) intensify
133. Please do not be ________ by his offensive remarks since he is merely trying to attract
attention. A) distracted B) disregarded C) irritated D) intervened
134. Once you get to know your mistakes, you should __________ them as soon as possible. A) rectify B) reclaim C) refrain D) reckon
135. He wouldn't answer the reporters' questions, nor would he __________ for a photograph. A) summon B) highlight C) pose D) marshal
136. The club will ________ new members the first week in September. A) enroll B) subscribe C) absorb D) register
137. If you don't ________ the children properly, Mr. Chiver, they'll just run riot. A) mobilize B) warrant C) manipulate D) supervise
138. Already the class is ________ about who our new teacher will be. A) foreseeing B) speculating C) fabricating D) contemplating
139. We should ________ our energy and youth to the development of our country. A) dedicate B) cater C) ascribe D) cling
140. Just because I'm ________ to him, my boss thinks he can order me around without showing
me any respect. A) redundant B) trivial C) versatile D) subordinate
141. Many scientists remain ________ about the value of this research program. A) sceptical B) stationary C) spacious D) specific
142. Depression is often caused by the ________ effects of stress and overwork.. A) total B) increased C) terrific D) cumulative
143. A human's eyesight is not as ________ as that of an eagle. A) eccentric B) acute C) sensible D) sensitive
144. It is ________ that women should be paid less than men for doing the same kind of work. A) abrupt B) absurd C) adverse D) addictive
145. Shoes of this kind are ________ to slip on wet ground. A) feasible B) appropriate C) apt D) fitting
146. We'll be very careful and keep what you've told us strictly________. A) rigorous B) confidential C) private D) mysterious
147. The members of Parliament were ________ that the government had not consulted them. A) impatient B) tolerant C) crude D) indignant
148. Some American colleges are state-supported, others are privately _______ , and still others
are supported by religious organizations. A) ensured B) attributed C) authorized D) endowed
149. The prison guards were armed and ready to shoot if _______ in any way. A) intervened B) incurred C) provoked D) poked
150. Many pure metals have little use because they are too soft, rust too easily, or have some other _______. A) drawbacks B) handicaps C) bruises D) blunders
151. It was ____ that the restaurant discriminated against black customers. A) addicted B) alleged C) assaulted D) ascribed
152. The medicine ____ his pain but did not cure his illness. A) activated B) alleviated C) mediated D) deteriorated
153. He is the only person who can ____ in this case because the other witnesses were killed
mysteriously. A) testify B) charge C) accuse D) rectify
154. Professor Hawking is ____ as one of the world's greatest living physicists. A) dignified B) clarified C) acknowledged D) illustrated
155. The financial problem of this company is further ____ by the rise in interest rates. A) increased B) strengthened C) reinforced D) aggravated
156. We shall probably never be able to ____ the exact nature of these sub-atomic particles. A) assert B) impart C) ascertain D) notify
157. All the people in the stadium cheered up when they saw hundreds of colorful balloons ____
slowly into the sky. A) ascending B) elevating C) escalating D) lingering
158. Many years had ____ before they returned to their original urban areas. A) floated B) elapsed C) skipped D) proceeded
159. What you say now is not ____ with what you said last week. A) consistent B) persistent C) permanent D insistent
160. Military orders are ____ and cannot be disobeyed. A) defective B) conservative C) alternative D) imperative
161. Some educators try to put students of similar abilities into the same class because they
believe this kind of ____ grouping is advisable. A) homogeneous B) instantaneous C) spontaneous D) anonymous
162. Even sensible men do ____ things sometimes. A) abrupt B) absurd C) acute D) apt
163. The commission would find itself ____ at every turn if its members couldn’t reach an
agreement. A) collided B) savaged C) crumbled D) hampered
164. Grain production in the world is _____ but still millions go hungry. A) staggering B) shrinking C) soaring D) suspending
165. He developed a ____ attitude after years of frustration in his career. A) sneaking B) disgusted C) drastic D) cynical
166. They believed that this was not the ____ of their campaign for equality but merely the
beginning. A) climax B) summit C) pitch D) maximum
167. Several guests were waiting in the ____ for the front door to open. A) porch B) vent C) inlet D) entry
168. As the mountains were covered with a _____ of cloud we couldn’t see their tops. A) coating B) film C) veil D) shade
169. We couldn’t really afford to buy a house so we got it on hire purchase and paid monthly ____. A) investments B) requirements C) arrangements D) installments
170. The magician made us think he cut the girl into pieces but it was merely an _____.
A) illusion B) impression C) image D) illumination
171. A good education is an ____ you can fall back on for the rest of your life. A) asset B) ethic C) inventory D) obligation
172. Giving a gift can convey a wealth of meaning about your appreciation of their ____ and the
importance you place upon the relationship. A) solidarity B) priority C) superiority D) hospitality
173. The designer has applied for a ____ for his new invention. A) tariff B) discount C) version D) patent
174. The toy maker produces a ____ copy of the space station exact in every detail. A) minimal B) minimum C) miniature D) minor
175. An energy tax would curb ordinary air pollution limit oil imports and cut the budget ____. A) disposition B) discrepancy C) defect D) deficit
176. They have decided to ____ physical punishment in all local schools. A) put away B) break away from C) do away with D) pass away
177. Astronauts are ____ all kinds of tests before they are actually sent up in a spacecraft. A) inclined to B) subjected to C) prone to D) bound to
178. Individual sports are run by over 370 independent governing bodies whose functions usually
include ____rules holding events selecting national teams and promoting international links. A) drawing on B) drawing in C) drawing up D) drawing down
179. Up until that time his interest had focused almost ____ on fully mastering the skills and
techniques of his craft. A) restrictively B) radically C) inclusively D) exclusively
180. All the ceremonies at the 2000 Olympic Games had a unique Australian flavor ____ of
their multicultural communities. A noticeable B) indicative C) conspicuous D) implicit
181. I have had my eyes tested and the report says that my ________ is perfect. A) outlook B) vision C) horizon D) perspective
182. He was looking admiringly at the photograph published by Collins in ________ with the
Imperial Museum. A) collection B) connection C) collaboration D) combination
183. In those days, executives expected to spend most of their lives in the same firm and, unless
they were dismissed for ________, to retire at the age of 65. A) integrity B) denial C) incompetence D) deduction
184. Others viewed the finding with ________, noting that a cause-and-effect relationship
between passive smoking and cancer remains to be shown. A) optimism B) passion C) caution D) deliberation
185. The 1986 Challenger space-shuttle ________ was caused by unusually low temperatures
immediately before the launch. A) expedition B) controversy C) dismay D) disaster
186. When supply exceeds demand for any product, prices are ________ to fall. A) timely B) simultaneous C) subject D) liable
187. The music aroused an ________ feeling of homesickness in him. A) intentional B) intermittent C) intense D) intrinsic
188. I bought an alarm clock with a(n) ________ dial, which can be seen clearly in the dark.
A) supersonic B) luminous C) audible D) amplified
189. The results are hardly ________; he cannot believe they are accurate. A) credible B) contrary C) critical D) crucial
190. This new laser printer is ________ with all leading software. A) comparable B) competitive C) compatible D) cooperative
191. The ball ________ two or three times before rolling down the slope. A) swayed B) bounced C) hopped D) darted
192. He raised his eyebrows and stuck his head forward and ________ it in a single nod, a gesture
boys used then for O.K. when they were pleased. A) shrugged B) tugged C) jerked D) twisted
193. Many types of rock are ________ from volcanoes as solid, fragmentary material. A) flung B) propelled C) ejected D) injected
194. With prices ________ so much, it is difficult for the school to plan a budget. A) vibrating B) fluctuating C) fluttering D) swinging
195. The person who ________ this type of approach for doing research deserves our praise. A) originated B) speculated C) generate D) manufactured
196. ________ that the demand for power continues to rise at the current rate, it will not be long
before traditional sources become inadequate. A) Concerning B) Ascertaining C) Assuming D) Regarding
197. Her jewelry ________ under the spotlights and she became the dominant figure at the ball. A) glared B) glittered C) blazed D) dazzled
198. Connie was told that if she worked too hard, her health would ________. A) deteriorate B) descend C) degrade D) decay
199. We find that some birds ________ twice a year between hot and cold countries. A) transfer B) commute C) migrate D) emigrate
200. As visiting scholars, they willingly ________ to the customs of the country they live in. A) submit B) conform C) subject D) commit
201. More than 85 percent of French Canada’s population speaks French as mother tongue and
________ to the Roman Catholic faith. A) caters B) adheres C) ascribes D) subscribes
202. The professor found himself constantly ________ the question: “How could anyone do these
things?” A) presiding B) poring C) pondering D) presuming
203. Weeks ________ before anyone was arrested in connection with the bank robbery. A) terminated B) elapsed C) overlapped D) expired
204. In order to prevent stress from being set up in the metal, expansion joints are fitted which
________ the stress by allowing the pipe to expand or contra ct freely. A) relieve B) reconcile C) reclaim D) rectify
205. How much of your country’s electrical supply is ________ from water power?
A) deduced B) detached C) derived D) declined
206. She has recently left a job and had helped herself to copies of the company’s client data,
which she intended to ________ in starting her own business. A) dwell on B) come upon C) base on D) draw upon
207. The glass vessels should be handled most carefully since they are ________.
A) intricate B) fragile C) subtle D) crisp
208. Hill slopes are cleared of forests to make way for crops, but this only ________ the crisis. A) accelerates B) prevails C) ascends D) precedes
209. He blew out the candle and ________ his way to the door. A) converged B) groped C) strived D) wrenched
210. Often such arguments have the effect of ________ rather than clarifying the issues involved. A) obscuring B) prejudicing C) tackling D) blocking
211. In November 1987 the government _____ a public debate on the future direction of the
official sports policy. A) initiated B) designated C) induced D) promoted
212. I found it difficult to _____ my career ambitions with the need to bring up my children. A) consolidate B) amend C) reconcile D) Intensify
213. We all enjoy our freedom of choice and do not like to see it_____ when it is within the legal
and moral boundaries of society. A) compacted B) restricted C) dispersed D)delayed
214. It is fortunate for the old couple that their son's career goals and their wishes for him _____. A) coincide B) comply C) conform D) collaborate
215. Allen will soon find out that real life is seldom as simple as it is _____ in commercials. A) permeated B) alleged C) depicted D) drafted
216. Europe's earlier industrial growth was _____ by the availability of key resources, abundant
and cheap labor, coal, iron ore, etc. A) constrained B) detained C) remained D) sustained
217. As the trial went on, the story behind the murder slowly _____ itself. A) convicted B) released C) haunted D) unfolded
218. We’ve just installed a fan to _________________ cooking smells from the kitchen. A) eject B) exclude C) expel D) exile
219. Retirement is obviously a very complex _____ period; and the earlier you start planning for it, the better. A) transformation B) transmission C) transaction D) transition
220. Mutual respect for territorial _____is one of the bases upon which our two countries develop
relationships. A) unity B) integrity C) entirety D) reliability
221. As one of the youngest professors in the university, Mr. Brown is certainly on the _____ of a
brilliant career. A) porch B) edge C) course D) threshold
222. We work to make money, but it's a _____ that people who work hard and long often do not
make the most money. A) paradox B) prejudice C) dilemma D) conflict
223. The design of this auditorium shows a great deal of _____. We have never seen such a
building before. A) invention B) illusion C) originality D) orientation
224. The damage to my car was _____in the accident, but I have a lingering fear even today. A) insufficient B) ignorant C) ambiguous D) negligible
225. Very few people could understand the lecture the professor delivered because its subject was
very_____. A) obscure B) indefinite C) dubious D) intriguing
226. Diamonds have little __________ value and their price depends almost entirely on their
scarcity. A) intrinsic B) eternal C) subtle D) inherent
227. Doctors are interested in using lasers as a surgical tool in operations on people who are _____
to heart attack. A) infectious B) disposed C) accessible D) prone
228. Many countries have adopted systems of_____ education in order to promote the average
level of education. A) compulsory B) cardinal C) constrained D) conventional
229. I had eaten Chinese food often, but I could not have imagined how_____ and extravagant a
real Chinese banquet could be. A) prominent B) fabulous C) handsome D) gracious
230. They are _____ investors who always make thorough investigations both on local and
international markets before making an investment. A) implicit B) conscious C) cautious D) indecisive
231. In addition to the rising birthrate and immigration, the _____death rate contributed to the
population growth. A) inclining B) increasing C) declining D) descending
232. Because of the _____ noise of traffic I couldn't get to sleep last night. A) prevalent B) perpetual C) provocative D) progressive
233. Don't let such a _____ matter as this come between us so that we can concentrate on the
major issue. A) trivial B) slight C) partial D) minimal
234. If you go to the park every day in the morning, you will _____ find him doing physical
exercise there. A) ordinarily B) variably C) logically D) persistently
235. Although she's a(n) _______________talented dancer, she still practices several hours every
day. A) traditionally B) additionally C) exceptionally D) rationally
236. The cut in her hand has healed completely, without leaving a. A) defect B) sign C) wound D) scar
237. The idea is to ___________ the frequent incidents of collision to test the strength of the
wind-shields. A) assemble B) simulate C) accumulate D) forge
238. Most people in the modem world ________________ freedom and independence more than
anything else. A) embody B) cherish C) fascinate D) illuminate
239.1 told him that I would _____________ him to act for me while I was away from office.. A) authorize B) justify C) rationalize D) identify
240. Over the past ten years, natural gas production has remained steady, but _______________
has risen steadily.
A) dissipation B) disposal C) consumption D) expenditure
241. These were stubborn men. not easily ________to change their mind. A) tilted B) converted C) persuaded D) suppressed
242. The circus has always been very, popular because it ________both the old and the young. A) facilitates B) fascinates C) immerses D) indulges
243. By patient questioning the lawyer managed to ________enough information from the
witnesses. A) evacuate B) withdraw C) impart D) elicit
244. George enjoys talking about people's private affairs. He is a ________. A) solicitor B) coward C) gossip D) rebel
245. The new secretary has written a remarkably ________report within a few hundred words but
with all the important details included. A) concise B) brisk C) precise D) elaborate
246. His face ________as he came in after running all the way from school. A) flared B) fluctuated C) fluttered D) flushed
247. Steel is not as ________ as cast iron; it does not break as easily. A) elastic B) brittle C) adaptable D) flexible
248. A big problem in lemming English as a foreign language is lack of opportunities for ________interaction with proficient speakers of English. A) instantaneous B) provocative C) verbal D) dual
249. Within ten years they have tamed the ________hill into green woods. A) vacant B) barren C) weird D) wasteful
250. The ________of our trip to London was the visit to Buckingham Palace. A) summit B) height C) peak D) highlight
251. Harold claimed that he was a serious and well-known artist, but in fact he was a(n) ________. A) alien B) client. C) counterpart D) fraud
252. We don't ________any difficulties in completing the project so long as we keep within our
budget. A) foresee B) fabricate C) infer D) inhibit
253. He is looking for a job that will give him greater ________for career development. A) insight B) scope C) momentum D) phase
254. The high school my daughter studies in is ________our university. A) linked by B) relevant to C) mingled with D) affiliated with
255. The Browns lived in a ________and comfortably furnished house in the suburbs. A) spacious B) sufficient C) wide D) wretched
256. A membership card ________the holder to use the club's facilities for a period of twelve
months. A) approves B) authorizes C) rectifies D) endows
257. They have done away with ________Latin for university entrance at Harvard. 2A) influential B) indispensable C) compulsory D) essential
258. It is no ________that a large number of violent crimes are committed under the influence of
alcohol. A) coincidence B) correspondence C) inspiration D) intuition
259. One's university days often appear happier in ________than they actually were at the time. A) retention B) retrospect C) return D) revere
260. She ________through the pages of a magazine, not really concentrating on them. A) tumbled B) tossed C) switched D) flipped
261. Scientists are pushing known technologies to their limits in an attempt to ________more
energy from the earth. A) extract B) inject C) discharge D) drain
262. The Chinese Red Cross ________a generous sum to the relief of the victims of the
earthquake in Turkey. A) administered B) elevated C) assessed D) contributed
263. The first sentence in this paragraph is ________; it can be interpreted in many ways. A) intricate B) ambiguous C) duplicated D) confused
264. They used to quarrel a lot, but now they are completely ________with each other. A) reconciled B) negotiated C) associated D) accommodated
265. The local business was not much ________by the sudden outbreak of the epidemic. A) intervened B) insulated C) hampered D) hoisted
266. The most important ________for assessment in this contest is originality of design. A) threshold B) partition C) warrant D) criterion
267. The woman was worried about the side effects of taking aspirins. but her doctor ________her
that it is absolutely harmless. A) retrieved B) released C) reassured D) revived
268. We can't help being ________of Bob who bought a luxurious sports car just after the money
was stolen from the office. A) skeptical B) appreciative C) suspicious D) tolerant
269. He greatly resented the publication of this book. which he saw as an embarrassing invasion of
his ________. A) privacy B) morality C) dignity D) secrecy
270. In fact as he approached this famous statue, he only barely resisted the ________to reach into
his bag for his camera. A) impatience B) impulse C) incentive D) initiative
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
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '40px' }}>
      
      {/* Header */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={24} color="#4f46e5" />
              Vocabulary Matcher
            </h1>
            <button 
              onClick={() => setShowInput(!showInput)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', padding: '6px 12px', borderRadius: '6px', backgroundColor: showInput ? '#e0e7ff' : '#f3f4f6', color: showInput ? '#4f46e5' : '#374151', border: 'none', cursor: 'pointer', fontWeight: 500 }}
            >
              <Edit2 size={16} />
              {showInput ? 'Hide Source' : 'Edit Source'}
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search by word, question number, or option..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem', outline: 'none', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
            />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 16px' }}>
        
        {/* Source Input Area (Collapsible) */}
        {showInput && (
          <div style={{ marginBottom: '24px', backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Source Text (Paste PDF content here)</h3>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              style={{ width: '100%', height: '300px', padding: '12px', borderRadius: '6px', border: '1px solid #d1d5db', fontFamily: 'monospace', fontSize: '0.875rem', resize: 'vertical' }}
            />
            <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#6b7280' }}>
              Format: Number. Question text... A) opt1 B) opt2 ... <br/>
              Answers at end: 1-5 A B C D E
            </div>
          </div>
        )}

        {/* Stats */}
        <div style={{ marginBottom: '16px', fontSize: '0.875rem', color: '#6b7280', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Found {questions.length} questions. Showing {filteredQuestions.length}.</span>
            {parseError && <span style={{ color: '#dc2626' }}>{parseError}</span>}
        </div>

        {/* Questions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredQuestions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
              <p>No questions found matching your search.</p>
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <div key={q.id} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '20px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                {/* Question Header */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '700', color: '#4f46e5', minWidth: '30px' }}>{q.id}.</span>
                  <div style={{ fontSize: '1.05rem', color: '#111827', lineHeight: '1.5' }}>
                    {/* Highlight blanks matches in text if simple underscores */}
                    {q.text.split(/(_+)/).map((part, i) => 
                      part.match(/_+/) ? <span key={i} style={{ color: '#d1d5db', fontWeight: 'bold' }}>_______</span> : part
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
                          backgroundColor: isCorrect ? '#ecfdf5' : '#f9fafb',
                          border: isCorrect ? '1px solid #10b981' : '1px solid #f3f4f6',
                          color: isCorrect ? '#065f46' : '#4b5563',
                          transition: 'all 0.2s'
                        }}
                      >
                        <span style={{ fontWeight: '600', marginRight: '8px', color: isCorrect ? '#059669' : '#9ca3af', minWidth: '20px' }}>{opt.key})</span>
                        <span style={{ fontWeight: isCorrect ? '600' : '400' }}>{opt.text}</span>
                        {isCorrect && <CheckCircle size={16} style={{ marginLeft: 'auto', color: '#10b981' }} />}
                      </div>
                    );
                  })}
                </div>

                {/* Fallback if answer key exists but option parsing failed or no matching option key */}
                {q.correctAnswer && !q.options.find(o => o.key === q.correctAnswer) && (
                   <div style={{ marginTop: '12px', fontSize: '0.875rem', color: '#059669', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle size={14} />
                      Correct Answer: {q.correctAnswer} (Option text not found)
                   </div>
                )}
                 {/* Fallback if no answer key found */}
                 {!q.correctAnswer && (
                   <div style={{ marginTop: '12px', fontSize: '0.875rem', color: '#d97706', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
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
