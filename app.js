const rounds = [
  { id: "grammar", kicker: "第一关", title: "语法竞技场", short: "语法", description: "现在完成时、used to、被动语态、宾语从句、定语从句和 it 句型。" },
  { id: "cloze", kicker: "第二关", title: "完形接力", short: "完形", description: "从上下文、固定搭配和语法结构中锁定最佳答案。" },
  { id: "reading", kicker: "第三关", title: "阅读对决", short: "阅读", description: "主旨、细节、推断、词义猜测和最佳标题。" },
  { id: "fill", kicker: "第四关", title: "短文填空", short: "填空", description: "根据语境补全单词，注意拼写、词形和句子结构。" },
  { id: "vocab", kicker: "第五关", title: "词汇闯关", short: "词汇", description: "新人教版九上 Unit 1–4 高频词汇闪击、变形和押分。" }
];

const passages = {
  readingA: [
    "Last National Day, the City History Museum introduced a robot guide named Xiao Zhi. It could show the shortest route to an exhibition, tell stories in Chinese and English, and remind families when a show was about to begin.",
    "The robot did not replace human guides. Instead, it handled repeated questions, such as where the washrooms were or when the museum closed. This gave human guides more time to lead longer tours and help visitors with special needs.",
    "There were still problems. On the busiest afternoon, the hall became so noisy that Xiao Zhi sometimes misunderstood children's voices. The museum team recorded these problems and improved the robot after the holiday.",
    "The team learned that technology works best when people decide clearly what it should and should not do. Next year, the museum plans to add sign language to Xiao Zhi, while keeping human guides at the centre of every visit."
  ],
  readingB: [
    "At fourteen, Lin Yue believed that people with strong memories were simply born lucky. Then her teacher taught the class a technique called the story chain. Students linked new words by putting them into one unusual story.",
    "Lin Yue practised for fifteen minutes after school. She also slept well and reviewed words after one day, three days and seven days.",
    "Two years later, she entered a city memory competition. She finished ninth because she tried to memorize too much without a break. Instead of giving up, she studied her mistakes, divided long tasks into shorter ones and took a two-minute rest between them.",
    "This year, Lin Yue won. She still says that her memory is ordinary. A useful method, regular practice and enough rest helped her make progress. Her experience reminds us that memory is a skill we can train."
  ]
};

const questions = {
  grammar: [
    q("choice", "Many travelers are interested ______ taking farther trips during the holiday.", ["at", "in", "on", "for"], 1, "be interested in doing sth. 表示“对做某事感兴趣”。", 5),
    q("choice", "The village ______ very little attention, but now it attracts thousands of visitors.", ["used to receive", "is used to receiving", "was used to receive", "used to receiving"], 0, "used to do 表示过去常常做某事。", 5),
    q("choice", "Smart robots ______ to guide tourists at the museum last National Day.", ["use", "used", "were used", "are using"], 2, "机器人被使用，时间在过去，使用一般过去时的被动语态。", 5),
    q("choice", "It was kind ______ the volunteers to help the older visitors.", ["for", "of", "with", "from"], 1, "kind 描述人的品质，使用 It is kind of sb. to do sth.", 5),
    q("choice", "I wonder ______ the new culture centre opens at nine tomorrow morning.", ["that", "what", "whether", "why"], 2, "表示“是否”用 whether 或 if；选项中只有 whether。", 5),
    q("choice", "The new railway ______ great changes to the town since it opened.", ["brings about", "brought about", "has brought about", "will bring about"], 2, "since 引导时间状语时，主句常用现在完成时。", 5),
    q("choice", "The scientist ______ story inspired the students visited our school yesterday.", ["who", "whose", "which", "whom"], 1, "whose 在定语从句中表示所属，修饰 story。", 5),
    q("choice", "Our teacher showed us ______ we could improve our memory through daily practice.", ["how", "what", "whether", "where"], 0, "how 表示方式，宾语从句使用陈述语序。", 5),
    q("choice", "The mountain road was so rough that drivers had difficulty ______ on it.", ["drive", "drove", "driving", "to driving"], 2, "have difficulty doing sth. 是固定搭配。", 5),
    q("choice", "Neither Li Ming nor his partners ______ given up their tree-planting plan.", ["has", "have", "is", "was"], 1, "neither...nor... 遵循就近一致，partners 为复数。", 5),
    q("choice", "The old factory has become one of the most popular tourist ______ in the city.", ["attract", "attractive", "attraction", "attractions"], 3, "one of the + 最高级 + 复数名词。", 5),
    q("choice", "By linking new knowledge with old knowledge, we can remember it ______.", ["good", "well", "better", "best"], 2, "句中含有比较意味，需用副词 well 的比较级 better。", 5)
  ],
  cloze: [
    q("choice", "For years, many young people left Dawan Village ______ work in big cities.", ["find", "to find", "finding", "found"], 1, "动词不定式表示离开家乡的目的。", 4),
    q("choice", "In 2022, a new railway station ______ near the village.", ["built", "is built", "was built", "has built"], 2, "车站被建造，且时间为 2022 年。", 4),
    q("choice", "Since then, change ______ quickly.", ["comes", "came", "has come", "will come"], 2, "since then 与现在完成时连用。", 4),
    q("choice", "Visitors became interested ______ the village's traditional crafts.", ["in", "at", "with", "from"], 0, "be interested in 是固定搭配。", 4),
    q("choice", "Ms Luo, ______ learned sugar painting from her grandfather, opened a workshop.", ["which", "whose", "who", "whom"], 2, "先行词指人，关系词在从句中作主语，用 who。", 4),
    q("choice", "She invited teenagers to learn the skill in ______ free time.", ["they", "their", "them", "theirs"], 1, "修饰名词 free time 需要形容词性物主代词 their。", 4),
    q("choice", "Soon, the workshop became ______ popular stop for families.", ["a", "an", "the", "/"], 0, "首次提到的可数名词单数，popular 以辅音音素开头。", 4),
    q("choice", "The village created an online map ______ visitors often got lost on the old paths.", ["although", "because", "unless", "while"], 1, "后半句解释创建地图的原因。", 4),
    q("choice", "Travelling became much ______ than before.", ["convenient", "more convenient", "most convenient", "conveniently"], 1, "than 前用比较级，much 修饰比较级。", 4),
    q("choice", "A service robot helped by answering questions and ______ visitors about local history.", ["teach", "taught", "teaching", "to teach"], 2, "teaching 与 answering 并列。", 4),
    q("choice", "The villagers know ______ real change takes time.", ["that", "what", "how", "whether"], 0, "know 后是结构完整的陈述句，用 that 引导。", 4),
    q("choice", "They want tourism to grow, ______ they also want to protect local traditions.", ["so", "or", "but", "for"], 2, "前后存在转折关系。", 4)
  ],
  reading: [
    q("choice", "What could Xiao Zhi do for visitors?", ["Sell tickets", "Plan family trips", "Give directions and tell stories", "Repair exhibits"], 2, "第一段列举了指路、讲故事和提醒演出时间。", 4, passages.readingA),
    q("choice", "Why did human guides have more time for longer tours?", ["The museum opened later", "The robot answered repeated questions", "Fewer people visited", "The guides stopped helping families"], 1, "第二段说明机器人处理重复问题，让真人导游腾出时间。", 4, passages.readingA),
    q("choice", "What does “handled” in the passage probably mean?", ["dealt with", "wrote down", "looked for", "worried about"], 0, "结合 repeated questions 可知 handled 表示“处理”。", 4, passages.readingA),
    q("choice", "What can we infer from the last paragraph?", ["Only robots will work next year", "The robot already uses sign language", "Human decisions matter when technology is used", "Visitors disliked the robot"], 2, "技术的边界需要人来清楚决定。", 4, passages.readingA),
    q("choice", "Which is the best title for Reading A?", ["A Museum Without Guides", "When a Robot Joins the Guide Team", "How to Build a Museum", "A Difficult Holiday Trip"], 1, "全文围绕机器人加入博物馆导览团队的作用和限制。", 4, passages.readingA),
    q("choice", "What was Lin Yue's first belief about memory?", ["It depended on luck at birth", "It improved only through sleep", "It was less useful than vocabulary", "It became weaker with practice"], 0, "首段说明她以为强记忆力是天生的幸运。", 4, passages.readingB),
    q("choice", "How long did Lin Yue practise after school?", ["Two minutes", "Fifteen minutes", "One hour", "Three days"], 1, "第二段明确提到 fifteen minutes。", 4, passages.readingB),
    q("choice", "Why did she finish ninth in her first competition?", ["She forgot to review pictures", "She entered the wrong event", "She worked too long without a break", "She did not know the story chain"], 2, "第三段说明她连续记忆太多内容，没有休息。", 4, passages.readingB),
    q("choice", "Which action best shows that Lin Yue reflected on learning?", ["She worried about words", "She studied mistakes and changed her plan", "She entered a competition", "She said her memory was ordinary"], 1, "分析错误并调整计划正是 reflect on learning。", 4, passages.readingB),
    q("choice", "What is the main idea of Reading B?", ["Competitions are the best way to learn", "Good learners never make mistakes", "Memory can be trained with effective habits", "Strange stories always help people win"], 2, "全文用林悦的经历说明记忆力可以通过方法和习惯训练。", 4, passages.readingB)
  ],
  fill: [
    t("Once, the hills outside Green River Town were c______ with sand.", ["covered"], "be covered with 表示“被……覆盖”。", 3),
    t("Strong winds often carried dirt i______ people's homes.", ["into"], "carry sth. into... 表示把某物带进……", 3),
    t("In 2015, the government s______ a tree-planting project.", ["started"], "时间在过去，start 用过去式 started。", 3),
    t("At first, water was in short s______.", ["supply"], "in short supply 表示“供应不足”。", 3),
    t("However, the volunteers did not give ______.", ["up"], "give up 表示“放弃”。", 3),
    t("They learned how ______ choose plants that could live in sandy soil.", ["to"], "疑问词 how 后可接动词不定式。", 3),
    t("Over the years, the trees ______ grown and the environment has improved.", ["have"], "主语 trees 为复数，现在完成时用 have grown。", 3),
    t("Birds have returned, ______ local families now sell handmade products.", ["and"], "前后是并列递进关系。", 3),
    t("The project has brought ______ more than a greener view.", ["about"], "bring about 表示“带来、引起”。", 3),
    t("It has reminded young people ______ patient work can change a hometown.", ["that"], "that 引导结构完整的宾语从句。", 3)
  ],
  vocab: [
    q("choice", "Which phrase means “带来或引起某种变化”?", ["bring about", "run out", "look up to", "give up"], 0, "bring about = 带来；引起。", 2, null, "VOCAB FLASH"),
    q("choice", "Which word means “崎岖的或粗糙的”?", ["rapid", "rough", "modest", "sandy"], 1, "rough 可描述崎岖的道路或粗糙的表面。", 2, null, "VOCAB FLASH"),
    q("choice", "Which word means “短缺或不足”?", ["support", "memory", "shortage", "position"], 2, "shortage = 短缺；不足。", 2, null, "VOCAB FLASH"),
    q("choice", "Which word means “鼓舞或激励”?", ["admire", "avoid", "inspire", "reflect"], 2, "inspire sb. to do sth. 表示激励某人做某事。", 2, null, "VOCAB FLASH"),
    q("choice", "Which word means “集中注意力”?", ["focus", "benefit", "remind", "support"], 0, "focus on = 集中注意力于……", 2, null, "VOCAB FLASH"),
    q("choice", "Which word means “提醒或使想起”?", ["reduce", "react", "remind", "memorize"], 2, "remind sb. to do / remind sb. of sth.", 2, null, "VOCAB FLASH"),
    t("The story of the village is truly ______. (inspire)", ["inspiring"], "事物令人鼓舞，用 inspiring。", 2, null, "WORD FORM"),
    t("The new railway has made travel more ______. (convenience)", ["convenient"], "make + 宾语 + 形容词，convenience 的形容词是 convenient。", 2, null, "WORD FORM"),
    t("The forest has become a tourist ______. (attract)", ["attraction"], "冠词 a 后需要名词 attraction。", 2, null, "WORD FORM"),
    t("Daily ______ helps students improve their plans. (reflect)", ["reflection"], "主语位置需要名词 reflection。", 2, null, "WORD FORM"),
    wager("The new road has greatly b______ the village.", ["benefited", "benefitted"], "benefit 的过去分词可写 benefited；英式拼写 benefitted 也可接受。"),
    wager("Try to a______ checking your phone while studying.", ["avoid"], "avoid doing sth. 表示避免做某事。")
  ]
};

const friendlyHints = {
  grammar: [
    "固定搭配：be interested ___ doing sth. 表示“对做某事感兴趣”。",
    "used to 后面接动词原形，表示“过去常常”。",
    "robots 和 use 是被动关系；时间是 last National Day。",
    "kind 描写的是 volunteers 的品质。想一想 for 和 of 哪个用来评价人。",
    "I wonder 后面缺少“是否”。",
    "看到 since，先考虑 have/has + 过去分词。",
    "空格后有名词 story，需要表达“这位科学家的故事”。",
    "句意是“老师向我们展示怎样提高记忆力”。",
    "have difficulty 后面的动词要加 -ing。",
    "neither...nor... 看离动词最近的主语 partners。",
    "one of the most popular 后面接复数名词。",
    "句意是“记得更好”，需要副词的比较级。"
  ],
  cloze: [
    "离开家乡是为了找工作，空格表示目的。",
    "station 是“被建造”的，时间在 2022 年。",
    "since then 是现在完成时的信号。",
    "固定搭配：be interested in。",
    "先行词 Ms Luo 指人，并且在从句中作主语。",
    "空格修饰 free time，意思是“他们的空闲时间”。",
    "第一次提到一个 popular stop，使用不定冠词。",
    "游客常迷路，这是制作地图的原因。",
    "看到 than 要用比较级，convenient 的比较级前加 more。",
    "空格和 answering 并列，也要用 -ing。",
    "know 后面是完整句子，只缺连接词。",
    "一方面想发展旅游，另一方面想保护传统，前后是转折。"
  ],
  reading: [
    "回到第一段，找 Xiao Zhi could 后面的三个动作。",
    "回到第二段，找 This gave the human guides more time 前面的原因。",
    "handled 后面的内容是 repeated questions，可理解为“处理问题”。",
    "最后一段强调 people decide clearly，答案与“人的决定”有关。",
    "标题应同时包含 robot 和 guide team。",
    "首句中的 born lucky 是关键信息。",
    "第二段第一句直接给出练习时长。",
    "第三段找 because 后面的原因。",
    "reflect on learning 表示分析学习并调整方法。",
    "最后一句是主旨：memory is a skill we can train。"
  ],
  fill: [
    "固定搭配：be c______ with，意思是“被……覆盖”。",
    "风把泥土带“进”家里，首字母是 i。",
    "时间是 In 2015，start 要变成过去式。",
    "固定搭配：in short s______，意思是“供应不足”。",
    "固定搭配：give ______，意思是“放弃”。",
    "结构：how + to + 动词原形。",
    "trees 是复数，结构为 ______ grown。",
    "前后两件事都发生了，需要并列连词。",
    "固定短语：bring ______，意思是“带来”。",
    "remind 后面接一个完整句子，需要 that。"
  ],
  vocab: [
    "bring 表示“带来”，与 about 组成目标短语。",
    "rough road 表示“崎岖的道路”。",
    "shortage 常用于 water shortage。",
    "inspire sb. to do sth. 表示激励某人做某事。",
    "focus on 表示集中注意力于……",
    "remind sb. to do sth. 表示提醒某人做某事。",
    "故事“令人鼓舞”，用 -ing 形式。",
    "more 后面需要形容词 convenient。",
    "冠词 a 后面需要名词 attraction。",
    "句子主语位置需要名词 reflection。",
    "has greatly 后面需要过去分词；benefit 变 benefited。",
    "try to 后接动词原形；avoid 后常接 doing。"
  ]
};

function q(type, prompt, options, answer, explanation, points, passage = null, label = null) {
  return { type, prompt, options, answer, explanation, points, passage, label };
}
function t(prompt, answers, explanation, points, passage = null, label = null) {
  return { type: "text", prompt, answers, explanation, points, passage, label };
}
function wager(prompt, answers, explanation) {
  return { type: "text", prompt, answers, explanation, points: 0, wager: true, noSteal: true, label: "SPELLING AUCTION" };
}

const $ = (id) => document.getElementById(id);
const els = Object.fromEntries([
  "homeScreen","planScreen","dailySetupScreen","dailyScreen","dailyResultScreen","setupScreen","gameScreen","finalScreen","resultScreen","setupForm","resumeBtn","displayA","duoNames","scoreA","scoreB",
  "roundNumber","roundNav","roundKicker","roundTitle","roundDescription","progressText","progressBar","turnName","turnHint","difficultyBadge",
  "timerBox","timerText","timerRing","questionCard","questionType","questionPoints","questionPrompt","answerArea","feedback",
  "passageBox","wagerBox","nextBtn","stealBtn","pauseBtn","timeBoostBtn","shieldBtn","teamLinkBtn","soundBtn","teacherBtn",
  "teacherDialog","forceNextBtn","clearSaveBtn","hintBtn","hintPanel","finalNameA","finalScoreA","finalScoreB","finishBtn","winnerTitle","winnerSubtitle",
  "resultNameA","resultScoreA","resultScoreB","resultStats","reviewList","printBtn","restartBtn","confetti",
  "choosePlanBtn","chooseDailyBtn","chooseClassBtn","dailySetupForm","dailyResumeBtn","todayDate","dailyDisplayName","dailyStreak","dailyStars","dailyClock","dailyModeLabel","dailyTitle","dailyResultTitle",
  "dailyProgressBar","dailyRoute","dailyLevel","dailyPassage","dailyType","dailyCount","dailyPrompt","dailyHintBtn","dailyHint","dailyAnswerArea",
  "dailyFeedback","dailyNextBtn","dailyResultMessage","dailyResultCorrect","dailyResultTotal","dailyResultStats","dailyReviewList","dailyAgainBtn",
  "planStageText","planScore","planScoreBar","planWeek","planCompleted","planWeekTarget","planSupport","planDayBadge","planMissionTitle","planMissionDetail","planMissionTags","startPlanBtn","startPlanText","weekGrid","roadmap"
].map(id => [id, $(id)]));

const SAVE_KEY = "grade9EnglishBattleStateV1";
const DAILY_KEY = "grade9EnglishDailySessionV1";
const DAILY_PROGRESS_KEY = "grade9EnglishDailyProgressV1";
const PLAN_PROGRESS_KEY = "grade9EnglishScorePlanV1";
let state = freshState();
let timerId = null;
let dailyTimerId = null;
let dailyState = null;
let audioOn = true;

function freshState() {
  return {
    names: { A: "挑战者 A", B1: "队员 B1", B2: "队员 B2" },
    mode: "adaptive",
    bLevel: 1,
    difficultyOverride: "auto",
    bStreak: 0,
    baseTime: 30,
    round: 0,
    index: 0,
    scores: { A: 0, B: 0 },
    correct: { A: 0, B: 0 },
    attempts: { A: 0, B: 0 },
    duoTurn: 0,
    powers: { timeBoost: 1, shield: 1, shieldArmed: false, teamLink: 2 },
    mistakes: [],
    timeLeft: 30,
    totalTime: 30,
    paused: false,
    stealMode: false,
    originalSide: null,
    usedChoices: [],
    wager: 3,
    retryUsed: false,
    hintShown: false,
    completed: false
  };
}

function activeRound() { return rounds[state.round]; }
function roundQuestions() { return questions[activeRound().id]; }
function currentQuestion() { return roundQuestions()[state.index]; }
function assignedSide(index = state.index) {
  if (index < 6) return index % 2 === 0 ? "A" : "B";
  return index % 2 === 0 ? "B" : "A";
}
function currentSide() { return state.stealMode ? (state.originalSide === "A" ? "B" : "A") : assignedSide(); }
function currentPerson() {
  if (currentSide() === "A") return state.names.A;
  return state.duoTurn % 2 === 0 ? state.names.B1 : state.names.B2;
}
function sideLabel(side) { return side === "A" ? state.names.A : "双人战队 B"; }
function supportLevel() {
  if (state.mode === "friendly") return 1;
  if (state.mode === "standard") return 3;
  if (state.difficultyOverride !== "auto") return Number(state.difficultyOverride);
  return state.bLevel;
}
function levelName(level) { return level === 1 ? "基础扶持" : level === 2 ? "引导进阶" : "独立挑战"; }

function save() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  els.resumeBtn.classList.toggle("hidden", !localStorage.getItem(SAVE_KEY));
}
function load() {
  try {
    const stored = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (stored && stored.names) state = { ...freshState(), ...stored };
  } catch (_) { localStorage.removeItem(SAVE_KEY); }
}

function showScreen(screen) {
  [els.homeScreen, els.planScreen, els.dailySetupScreen, els.dailyScreen, els.dailyResultScreen, els.setupScreen, els.gameScreen, els.finalScreen, els.resultScreen].forEach(el => el.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGame(fromSave = false) {
  if (!fromSave) {
    state = freshState();
    state.names = { A: $("nameA").value.trim() || "挑战者 A", B1: $("nameB1").value.trim() || "队员 B1", B2: $("nameB2").value.trim() || "队员 B2" };
    state.baseTime = Number($("timeSelect").value);
    state.mode = $("modeSelect").value;
  }
  showScreen(els.gameScreen);
  els.displayA.textContent = state.names.A;
  els.duoNames.textContent = `${state.names.B1} · ${state.names.B2}`;
  renderRoundNav();
  renderQuestion();
  updateScores();
  save();
}

function renderRoundNav() {
  els.roundNav.innerHTML = rounds.map((r, i) => `
    <button type="button" class="round-tab ${i === state.round ? "active" : ""} ${i < state.round ? "done" : ""}" disabled>
      <strong>${i < state.round ? "✓" : i + 1}</strong><span>${r.short}</span>
    </button>`).join("");
}

function renderQuestion() {
  clearInterval(timerId);
  const r = activeRound();
  const qs = roundQuestions();
  const item = currentQuestion();
  state.stealMode = false;
  state.originalSide = null;
  state.usedChoices = [];
  state.wager = 3;
  state.retryUsed = false;
  state.hintShown = false;
  const level = assignedSide() === "B" ? supportLevel() : 3;
  const supportBonus = assignedSide() === "B" ? (level === 1 ? 20 : level === 2 ? 12 : 0) : 0;
  state.timeLeft = state.baseTime + supportBonus;
  state.totalTime = state.timeLeft;
  state.paused = false;

  els.roundNumber.textContent = state.round + 1;
  els.roundKicker.textContent = r.kicker;
  els.roundTitle.textContent = r.title;
  els.roundDescription.textContent = r.description;
  els.progressText.textContent = `${state.index + 1} / ${qs.length}`;
  els.progressBar.style.width = `${((state.index + 1) / qs.length) * 100}%`;
  els.turnName.textContent = currentPerson();
  els.turnHint.textContent = currentSide() === "A" ? "单人方独立作答" : (level < 3 ? "可共同讨论  轮流说答案" : "B1 与 B2 轮流主答");
  els.difficultyBadge.textContent = currentSide() === "A" ? "标准难度" : levelName(level);
  els.questionCard.dataset.number = String(state.index + 1).padStart(2, "0");
  els.questionType.textContent = item.label || r.id.toUpperCase();
  els.questionPoints.textContent = item.wager ? "押分题" : `+${item.points} 分`;
  els.questionPrompt.textContent = item.prompt;
  els.feedback.className = "feedback hidden";
  els.feedback.innerHTML = "";
  els.nextBtn.classList.add("hidden");
  els.stealBtn.classList.add("hidden");
  els.wagerBox.classList.toggle("hidden", !item.wager);
  const friendlyB = currentSide() === "B" && level < 3;
  els.hintBtn.classList.toggle("hidden", !friendlyB || level === 1);
  els.hintPanel.classList.toggle("hidden", !(friendlyB && level === 1));
  els.hintPanel.textContent = friendlyHints[r.id][state.index];
  [...els.wagerBox.querySelectorAll("button")].forEach(b => b.classList.toggle("selected", Number(b.dataset.wager) === state.wager));

  if (item.passage) {
    els.passageBox.classList.remove("hidden");
    const glossary = friendlyB ? `<div class="friendly-note"><b>阅读小词典</b>　handled 处理　repeated 重复的　improve 改进　technique 方法　ordinary 普通的</div>` : "";
    els.passageBox.innerHTML = item.passage.map(p => `<p>${p}</p>`).join("") + glossary;
  } else {
    els.passageBox.classList.add("hidden");
    els.passageBox.innerHTML = "";
  }
  renderAnswers();
  updatePowerButtons();
  updateTimer();
  startTimer();
  save();
}

function renderAnswers() {
  const item = currentQuestion();
  if (item.type === "choice") {
    let visible = item.options.map((option, i) => ({ option, i }));
    const level = supportLevel();
    if (currentSide() === "B" && !state.stealMode && level < 3 && visible.length === 4) {
      const targetCount = level === 1 ? 2 : 3;
      const incorrect = visible.filter(x => x.i !== item.answer && !state.usedChoices.includes(x.i)).slice(0, targetCount - 1);
      visible = [{ option: item.options[item.answer], i: item.answer }, ...incorrect].sort((a, b) => a.i - b.i);
    }
    els.answerArea.innerHTML = visible.map(({ option, i }) => `
      <button type="button" class="answer-option" data-choice="${i}" ${state.usedChoices.includes(i) ? "disabled" : ""}>
        <span class="letter">${String.fromCharCode(65 + i)}</span><span>${option}</span>
      </button>`).join("");
    els.answerArea.querySelectorAll("[data-choice]").forEach(btn => btn.addEventListener("click", () => submitChoice(Number(btn.dataset.choice), btn)));
  } else {
    els.answerArea.innerHTML = `<div class="text-answer"><input id="textInput" autocomplete="off" spellcheck="false" placeholder="输入英文答案"><button class="primary-button" id="submitText" type="button">锁定答案</button></div>`;
    const input = $("textInput");
    $("submitText").addEventListener("click", () => submitText(input.value));
    input.addEventListener("keydown", e => { if (e.key === "Enter") submitText(input.value); });
    setTimeout(() => input.focus(), 50);
  }
}

function submitChoice(choice, button) {
  if (button.disabled) return;
  const item = currentQuestion();
  if (choice === item.answer) {
    button.classList.add("correct");
    resolveCorrect();
  } else {
    button.classList.add("wrong");
    state.usedChoices.push(choice);
    button.disabled = true;
    if (offerFriendlyRetry(String.fromCharCode(65 + choice))) return;
    resolveWrong(String.fromCharCode(65 + choice));
  }
}

function normalize(value) {
  return value.toLowerCase().trim().replace(/[.?!,;:'"“”‘’]/g, "").replace(/\s+/g, " ");
}
function submitText(value) {
  const clean = normalize(value);
  if (!clean) return;
  const item = currentQuestion();
  const ok = item.answers.some(a => normalize(a) === clean);
  if (ok) resolveCorrect();
  else if (!offerFriendlyRetry(value)) resolveWrong(value);
}

function offerFriendlyRetry(given) {
  if (supportLevel() >= 3 || currentSide() !== "B" || state.stealMode || state.retryUsed) return false;
  state.retryUsed = true;
  state.hintShown = true;
  els.hintBtn.classList.add("hidden");
  els.hintPanel.classList.remove("hidden");
  showFeedback(false, "很接近  再试一次", `先看提示，再讨论 8 秒。本次不扣分。你刚才的答案是 ${given}。`);
  addTime(8);
  if (currentQuestion().type === "choice") renderAnswers();
  else {
    const input = $("textInput");
    if (input) { input.value = ""; input.focus(); }
  }
  beep("soft");
  save();
  return true;
}

function scoreValue(item, steal = false) {
  if (item.wager) return state.wager;
  return steal ? Math.max(1, Math.ceil(item.points * .4)) : item.points;
}

function resolveCorrect() {
  clearInterval(timerId);
  const item = currentQuestion();
  const side = currentSide();
  const value = scoreValue(item, state.stealMode);
  state.scores[side] += value;
  state.correct[side] += 1;
  state.attempts[side] += 1;
  const levelNotice = side === "B" && !state.stealMode ? recordBResult(true) : "";
  showFeedback(true, state.stealMode ? `抢答成功  +${value}` : `回答正确  +${value}`, item.explanation + levelNotice);
  lockAnswers(true);
  els.nextBtn.classList.remove("hidden");
  els.stealBtn.classList.add("hidden");
  if (side === "B" && !state.stealMode) state.duoTurn += 1;
  updateScores();
  beep("good");
  save();
}

function resolveWrong(given = "超时") {
  clearInterval(timerId);
  const item = currentQuestion();
  const side = currentSide();
  state.attempts[side] += 1;
  state.mistakes.push({ round: activeRound().title, prompt: item.prompt, side: sideLabel(side), given, answer: answerText(item), explanation: item.explanation });
  const levelNotice = side === "B" && !state.stealMode ? recordBResult(false) : "";
  if (item.wager) {
    state.scores[side] = Math.max(0, state.scores[side] - state.wager);
  }
  if (state.stealMode) {
    showFeedback(false, "抢答未成功", `正确答案：${answerText(item)}。${item.explanation}`);
    lockAnswers(false);
    els.nextBtn.classList.remove("hidden");
  } else {
    state.originalSide = side;
    const shielded = side === "A" && state.powers.shieldArmed;
    if (shielded) {
      state.powers.shieldArmed = false;
      showFeedback(false, "本题失误  护盾已生效", `正确答案：${answerText(item)}。${item.explanation}${levelNotice}`);
      lockAnswers(false);
      els.nextBtn.classList.remove("hidden");
    } else if (item.noSteal) {
      showFeedback(false, `回答错误  -${state.wager}`, `正确答案：${answerText(item)}。${item.explanation}${levelNotice}`);
      lockAnswers(false);
      els.nextBtn.classList.remove("hidden");
    } else {
      showFeedback(false, "主答方失误", "暂不公布答案。对方可在 10 秒内抢答，抢答正确获得本题 40% 分值。", true);
      els.stealBtn.classList.remove("hidden");
      els.nextBtn.classList.remove("hidden");
    }
    if (side === "B") state.duoTurn += 1;
  }
  updateScores();
  updatePowerButtons();
  beep("bad");
  save();
}

function recordBResult(correct) {
  if (state.mode !== "adaptive" || state.difficultyOverride !== "auto") return "";
  state.bStreak = correct ? Math.max(1, state.bStreak + 1) : Math.min(-1, state.bStreak - 1);
  const before = state.bLevel;
  if (state.bStreak >= 3 && state.bLevel < 3) {
    state.bLevel += 1;
    state.bStreak = 0;
  } else if (state.bStreak <= -2 && state.bLevel > 1) {
    state.bLevel -= 1;
    state.bStreak = 0;
  }
  if (before !== state.bLevel) {
    return ` 系统已根据掌握情况调整为“${levelName(state.bLevel)}”档。`;
  }
  return "";
}

function beginSteal() {
  state.stealMode = true;
  els.stealBtn.classList.add("hidden");
  els.nextBtn.classList.add("hidden");
  els.feedback.classList.add("hidden");
  els.turnName.textContent = currentPerson();
  els.turnHint.textContent = "抢答机会  10 秒";
  els.difficultyBadge.textContent = "抢答模式";
  els.hintBtn.classList.add("hidden");
  els.hintPanel.classList.add("hidden");
  state.timeLeft = 10;
  state.totalTime = 10;
  renderAnswers();
  updateTimer();
  startTimer();
}

function answerText(item) {
  return item.type === "choice" ? `${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}` : item.answers[0];
}
function showFeedback(correct, title, body, keepOpen = false) {
  els.feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  els.feedback.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
  if (!keepOpen) els.feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
function lockAnswers(showCorrect) {
  els.answerArea.querySelectorAll("button, input").forEach(el => el.disabled = true);
  if (showCorrect && currentQuestion().type === "choice") {
    const correct = els.answerArea.querySelector(`[data-choice="${currentQuestion().answer}"]`);
    correct?.classList.add("correct");
  }
}

function nextQuestion() {
  clearInterval(timerId);
  const qs = roundQuestions();
  if (state.index + 1 < qs.length) {
    state.index += 1;
    renderQuestion();
  } else if (state.round + 1 < rounds.length) {
    state.round += 1;
    state.index = 0;
    renderRoundNav();
    renderQuestion();
  } else {
    showFinal();
  }
}

function showFinal() {
  clearInterval(timerId);
  els.finalNameA.textContent = state.names.A;
  els.finalScoreA.value = 0;
  els.finalScoreB.value = 0;
  showScreen(els.finalScreen);
  save();
}

function finishGame() {
  const fa = Math.max(0, Math.min(20, Number(els.finalScoreA.value) || 0));
  const fb = Math.max(0, Math.min(20, Number(els.finalScoreB.value) || 0));
  state.scores.A += fa;
  state.scores.B += fb;
  state.completed = true;
  showResults();
  save();
}

function showResults() {
  showScreen(els.resultScreen);
  const a = state.scores.A, b = state.scores.B;
  els.resultNameA.textContent = state.names.A;
  els.resultScoreA.textContent = a;
  els.resultScoreB.textContent = b;
  if (a === b) {
    els.winnerTitle.textContent = "本局平手";
    els.winnerSubtitle.textContent = "双方进入 30 秒单词链加赛。";
  } else {
    const winner = a > b ? state.names.A : "双人战队 B";
    els.winnerTitle.textContent = `${winner} 获胜`;
    els.winnerSubtitle.textContent = `领先 ${Math.abs(a - b)} 分。复盘错题后，可以立即再战一局。`;
    launchConfetti();
    beep("win");
  }
  const totalAttempts = state.attempts.A + state.attempts.B;
  const totalCorrect = state.correct.A + state.correct.B;
  const accuracy = totalAttempts ? Math.round(totalCorrect / totalAttempts * 100) : 0;
  els.resultStats.innerHTML = `
    <div class="stat"><strong>${accuracy}%</strong><span>全场正确率</span></div>
    <div class="stat"><strong>${state.mistakes.length}</strong><span>错题数量</span></div>
    <div class="stat"><strong>${state.correct.A} : ${state.correct.B}</strong><span>A 与 B 答对题数</span></div>`;
  const mistakes = state.mistakes.slice().reverse();
  els.reviewList.innerHTML = mistakes.length ? mistakes.map(m => `
    <details class="review-item">
      <summary>${m.round}  ${escapeHtml(m.prompt)}</summary>
      <div><b>${escapeHtml(m.side)}</b> 回答：${escapeHtml(String(m.given))}<br>正确答案：<b>${escapeHtml(m.answer)}</b><br>${escapeHtml(m.explanation)}</div>
    </details>`).join("") : "<p>本局没有错题，表现非常稳定。</p>";
}

function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function dateSeed() { return Number(todayKey().replaceAll("-", "")); }
function loadDailyProgress() {
  const base = { lastDate: null, streak: 0, totalDays: 0, completedDates: [], mastery: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(DAILY_PROGRESS_KEY));
    return { ...base, ...(saved || {}) };
  } catch (_) { return base; }
}
function masteryFor(roundId) {
  const progress = loadDailyProgress();
  return { level: 1, streak: 0, ...(progress.mastery[roundId] || {}) };
}
function saveMastery(roundId, result) {
  const progress = loadDailyProgress();
  const m = { level: 1, streak: 0, ...(progress.mastery[roundId] || {}) };
  m.streak = result ? Math.max(1, m.streak + 1) : Math.min(-1, m.streak - 1);
  if (m.streak >= 3 && m.level < 3) { m.level += 1; m.streak = 0; }
  if (m.streak <= -2 && m.level > 1) { m.level -= 1; m.streak = 0; }
  progress.mastery[roundId] = m;
  localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(progress));
  return m.level;
}
function pickRefs(roundId, count, offset = 0) {
  const len = questions[roundId].length;
  return Array.from({ length: count }, (_, i) => ({ roundId, index: (dateSeed() + offset + i * 7) % len }));
}
function buildDailyQueue(focus) {
  let plan;
  if (focus === "grammar") plan = { grammar: 4, fill: 2, vocab: 2, cloze: 1, reading: 1 };
  else if (focus === "reading") plan = { reading: 4, cloze: 3, grammar: 1, fill: 1, vocab: 1 };
  else if (focus === "vocab") plan = { vocab: 6, grammar: 1, cloze: 1, reading: 1, fill: 1 };
  else plan = { grammar: 2, cloze: 2, reading: 2, fill: 2, vocab: 2 };
  let refs = [];
  Object.entries(plan).forEach(([id, count], n) => refs.push(...pickRefs(id, count, n * 5)));
  // Interleave categories so the ten minutes do not feel repetitive.
  return refs.sort((a, b) => ((a.index + dateSeed()) % 7) - ((b.index + dateSeed()) % 7));
}

const planMissions = {
  fri: { day: "周五", title: "词汇 + 语法基础", detail: "先认词义和词形，再练时态、语态与固定搭配。答错可看提示并重试，把基础分稳稳拿住。", tags: ["10 个核心词", "5 道语法", "35 分钟"], seconds: 2100, plan: { vocab: 5, grammar: 5 } },
  sat: { day: "周六", title: "阅读理解攻坚", detail: "先看题干关键词，再回原文定位证据。练细节题、主旨题和推断题，不靠猜答案。", tags: ["5 道阅读", "3 道完形", "50 分钟"], seconds: 3000, plan: { reading: 5, cloze: 3, vocab: 2 } },
  sun: { day: "周日", title: "混合小测 + 错题回炉", detail: "把本周语法、词汇和阅读混合起来练。完成后只复盘错题，系统据此安排下周难度。", tags: ["10 题周测", "错题复盘", "45 分钟"], seconds: 2700, plan: { grammar: 2, vocab: 2, reading: 3, cloze: 2, fill: 1 } }
};
const planStages = [
  { weeks: "第 1–2 周", title: "补基础", detail: "核心词 · 基础时态 · 阅读定位", target: "预计 67 分" },
  { weeks: "第 3–4 周", title: "提正确率", detail: "被动语态 · 从句 · 主旨题", target: "预计 75 分" },
  { weeks: "第 5–6 周", title: "练综合", detail: "完形逻辑 · 推断题 · 限时阅读", target: "预计 83 分" },
  { weeks: "第 7–8 周", title: "冲刺 90", detail: "套题训练 · 错题清零 · 稳定速度", target: "预计 90 分" }
];
function loadPlanProgress() {
  const base = { startDate: todayKey(), completedSlots: [], sessions: [], totalCorrect: 0, totalQuestions: 0 };
  try {
    const saved = JSON.parse(localStorage.getItem(PLAN_PROGRESS_KEY));
    const result = { ...base, ...(saved || {}) };
    if (!saved) localStorage.setItem(PLAN_PROGRESS_KEY, JSON.stringify(result));
    return result;
  } catch (_) {
    localStorage.setItem(PLAN_PROGRESS_KEY, JSON.stringify(base));
    return base;
  }
}
function savePlanProgress(progress) { localStorage.setItem(PLAN_PROGRESS_KEY, JSON.stringify(progress)); }
function currentPlanWeek(progress = loadPlanProgress()) {
  const start = new Date(`${progress.startDate}T00:00:00`);
  const elapsed = Math.max(0, Math.floor((new Date().setHours(0,0,0,0) - start.getTime()) / 86400000));
  return Math.min(8, Math.max(1, Math.floor(elapsed / 7) + 1));
}
function todayPlanDay() {
  const day = new Date().getDay();
  return day === 6 ? "sat" : day === 0 ? "sun" : "fri";
}
function planSlot(week, day) { return `week-${week}-${day}`; }
function estimatedPlanScore(progress) {
  const completion = Math.min(1, progress.completedSlots.length / 24);
  const accuracy = progress.totalQuestions ? progress.totalCorrect / progress.totalQuestions : .5;
  return Math.min(90, 60 + Math.round(completion * (24 + accuracy * 6)));
}
function preparePlan() {
  const progress = loadPlanProgress();
  const week = currentPlanWeek(progress);
  const stageIndex = Math.min(3, Math.floor((week - 1) / 2));
  const stage = planStages[stageIndex];
  const dayKey = todayPlanDay();
  const mission = planMissions[dayKey];
  const realStudyDay = [0,5,6].includes(new Date().getDay());
  const score = estimatedPlanScore(progress);
  els.planWeek.textContent = week;
  els.planCompleted.textContent = progress.completedSlots.length;
  els.planScore.textContent = score;
  els.planScoreBar.style.width = `${Math.max(0, (score - 60) / 30 * 100)}%`;
  els.planStageText.textContent = `${stage.weeks} · ${stage.title}：${stage.detail}`;
  els.planWeekTarget.textContent = stage.target;
  const support = Math.min(masteryFor("grammar").level, masteryFor("vocab").level, masteryFor("reading").level);
  els.planSupport.textContent = levelName(support);
  els.planDayBadge.textContent = realStudyDay ? `今天 · ${mission.day}` : `下一次训练 · ${mission.day}`;
  els.planMissionTitle.textContent = mission.title;
  els.planMissionDetail.textContent = mission.detail;
  els.planMissionTags.innerHTML = mission.tags.map(tag => `<span>${tag}</span>`).join("");
  const slot = planSlot(week, dayKey);
  let resumable = false;
  try { const saved = JSON.parse(localStorage.getItem(DAILY_KEY)); resumable = saved?.planMode && saved?.planSlot === slot && !saved.completed; } catch (_) {}
  els.startPlanText.textContent = resumable ? "继续未完成任务" : (progress.completedSlots.includes(slot) ? "再练一次巩固" : "开始这次训练");
  els.weekGrid.innerHTML = Object.entries(planMissions).map(([key, item]) => {
    const done = progress.completedSlots.includes(planSlot(week, key));
    return `<article class="day-card ${key === dayKey ? "active" : ""} ${done ? "done" : ""}"><span>${item.day.toUpperCase()}</span><h3>${item.title}</h3><p>${item.detail}</p><small>${done ? "✓ 已完成" : item.tags.join(" · ")}</small></article>`;
  }).join("");
  els.roadmap.innerHTML = planStages.map((item, i) => `<div class="road-step ${i === stageIndex ? "active" : ""}"><strong>${item.weeks} · ${item.title}</strong><span>${item.detail}<br>${item.target}</span></div>`).join("");
  showScreen(els.planScreen);
}
function buildPlanQueue(dayKey, week) {
  const refs = [];
  Object.entries(planMissions[dayKey].plan).forEach(([id, count], i) => refs.push(...pickRefs(id, count, week * 11 + i * 7)));
  return refs.sort((a, b) => ((a.index + week * 3) % 7) - ((b.index + week * 3) % 7));
}
function openDailySession() {
  showScreen(els.dailyScreen);
  els.dailyDisplayName.textContent = dailyState.name;
  els.dailyModeLabel.textContent = dailyState.planMode ? `8-WEEK PLAN · ${planMissions[dailyState.planDay].day}` : "DAILY 15";
  els.dailyResultTitle.textContent = dailyState.planMode ? "本次提分任务完成了" : "今天的 15 分钟完成了";
  els.dailyStreak.textContent = Math.max(1, loadDailyProgress().streak || 1);
  renderDailyQuestion();
  startDailyTimer();
  saveDaily();
}
function startPlanSession() {
  clearInterval(dailyTimerId);
  const progress = loadPlanProgress();
  const week = currentPlanWeek(progress);
  const dayKey = todayPlanDay();
  const slot = planSlot(week, dayKey);
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(DAILY_KEY)); } catch (_) {}
  if (saved?.planMode && saved?.planSlot === slot && !saved.completed) dailyState = saved;
  else {
    const mission = planMissions[dayKey];
    dailyState = {
      date: todayKey(), name: $("dailyName").value.trim() || "初三同学", focus: dayKey,
      queue: buildPlanQueue(dayKey, week), index: 0, correct: 0, stars: 0, wrong: [],
      secondsLeft: mission.seconds, totalSeconds: mission.seconds, usedChoices: [], retryUsed: false,
      hintUsed: false, answered: false, completed: false, planMode: true, planDay: dayKey,
      planWeek: week, planSlot: slot, sessionRecorded: false
    };
  }
  openDailySession();
}
function prepareDailySetup() {
  els.todayDate.textContent = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
  let resumable = false;
  try {
    const saved = JSON.parse(localStorage.getItem(DAILY_KEY));
    resumable = saved?.date === todayKey() && !saved.completed;
    if (saved?.name) $("dailyName").value = saved.name;
  } catch (_) {}
  els.dailyResumeBtn.classList.toggle("hidden", !resumable);
  showScreen(els.dailySetupScreen);
}
function startDaily(fromSave = false) {
  clearInterval(dailyTimerId);
  if (fromSave) {
    try { dailyState = JSON.parse(localStorage.getItem(DAILY_KEY)); } catch (_) { dailyState = null; }
  }
  if (!dailyState || !fromSave) {
    const focus = $("dailyFocus").value;
    dailyState = {
      date: todayKey(),
      name: $("dailyName").value.trim() || "英语小达人",
      focus,
      queue: buildDailyQueue(focus),
      index: 0,
      correct: 0,
      stars: 0,
      wrong: [],
      secondsLeft: 900,
      totalSeconds: 900,
      usedChoices: [],
      retryUsed: false,
      hintUsed: false,
      answered: false,
      completed: false,
      planMode: false,
      sessionRecorded: false
    };
  }
  openDailySession();
}
function saveDaily() { localStorage.setItem(DAILY_KEY, JSON.stringify(dailyState)); }
function currentDailyRef() { return dailyState.queue[dailyState.index]; }
function currentDailyItem() { const ref = currentDailyRef(); return questions[ref.roundId][ref.index]; }
function dailyLevel() { return masteryFor(currentDailyRef().roundId).level; }
function renderDailyQuestion() {
  const ref = currentDailyRef();
  if (!ref) return finishDaily();
  const item = currentDailyItem();
  const level = dailyLevel();
  dailyState.usedChoices = [];
  dailyState.retryUsed = false;
  dailyState.hintUsed = false;
  dailyState.answered = false;
  els.dailyStars.textContent = dailyState.stars;
  els.dailyCount.textContent = `${dailyState.index + 1} / ${dailyState.queue.length}`;
  els.dailyProgressBar.style.width = `${dailyState.index / dailyState.queue.length * 100}%`;
  els.dailyType.textContent = `${rounds.find(r => r.id === ref.roundId).short}  ${item.label || ""}`;
  els.dailyPrompt.textContent = item.prompt;
  els.dailyLevel.textContent = levelName(level);
  els.dailyHint.textContent = friendlyHints[ref.roundId][ref.index];
  els.dailyHint.classList.toggle("hidden", level !== 1);
  els.dailyHintBtn.classList.toggle("hidden", level === 1 || level === 3);
  els.dailyFeedback.className = "feedback hidden";
  els.dailyFeedback.innerHTML = "";
  els.dailyNextBtn.classList.add("hidden");
  if (item.passage) {
    els.dailyPassage.classList.remove("hidden");
    els.dailyPassage.innerHTML = item.passage.map(p => `<p>${p}</p>`).join("") + (level < 3 ? `<div class="friendly-note"><b>阅读小词典</b>　handled 处理　repeated 重复的　technique 方法　ordinary 普通的</div>` : "");
  } else {
    els.dailyPassage.classList.add("hidden");
    els.dailyPassage.innerHTML = "";
  }
  renderDailyAnswers();
  renderDailyRoute();
  saveDaily();
}
function renderDailyRoute() {
  els.dailyRoute.innerHTML = dailyState.queue.map((ref, i) => {
    const r = rounds.find(x => x.id === ref.roundId);
    return `<div class="route-step ${i === dailyState.index ? "active" : ""} ${i < dailyState.index ? "done" : ""}"><i>${i < dailyState.index ? "✓" : i + 1}</i><span>${r.short}</span></div>`;
  }).join("");
}
function renderDailyAnswers() {
  const item = currentDailyItem();
  const level = dailyLevel();
  if (item.type === "choice") {
    let visible = item.options.map((option, i) => ({ option, i }));
    if (level < 3) {
      const target = level === 1 ? 2 : 3;
      const incorrect = visible.filter(x => x.i !== item.answer && !dailyState.usedChoices.includes(x.i)).slice(0, target - 1);
      visible = [{ option: item.options[item.answer], i: item.answer }, ...incorrect].sort((a, b) => a.i - b.i);
    }
    els.dailyAnswerArea.innerHTML = visible.map(({ option, i }) => `<button type="button" class="answer-option" data-daily-choice="${i}" ${dailyState.usedChoices.includes(i) ? "disabled" : ""}><span class="letter">${String.fromCharCode(65+i)}</span><span>${option}</span></button>`).join("");
    els.dailyAnswerArea.querySelectorAll("[data-daily-choice]").forEach(btn => btn.addEventListener("click", () => submitDailyChoice(Number(btn.dataset.dailyChoice), btn)));
  } else {
    els.dailyAnswerArea.innerHTML = `<div class="text-answer"><input id="dailyTextInput" autocomplete="off" spellcheck="false" placeholder="输入英文答案"><button class="primary-button" id="dailySubmitText" type="button">检查答案</button></div>`;
    const input = $("dailyTextInput");
    $("dailySubmitText").addEventListener("click", () => submitDailyText(input.value));
    input.addEventListener("keydown", e => { if (e.key === "Enter") submitDailyText(input.value); });
  }
}
function submitDailyChoice(choice, btn) {
  if (dailyState.answered) return;
  const item = currentDailyItem();
  if (choice === item.answer) { btn.classList.add("correct"); resolveDaily(true, String.fromCharCode(65+choice)); }
  else {
    btn.classList.add("wrong"); btn.disabled = true; dailyState.usedChoices.push(choice);
    if (!dailyRetry(String.fromCharCode(65+choice))) resolveDaily(false, String.fromCharCode(65+choice));
  }
}
function submitDailyText(value) {
  if (dailyState.answered || !normalize(value)) return;
  const item = currentDailyItem();
  const correct = item.answers.some(a => normalize(a) === normalize(value));
  if (correct) resolveDaily(true, value);
  else if (!dailyRetry(value)) resolveDaily(false, value);
}
function dailyRetry(given) {
  if (dailyLevel() >= 3 || dailyState.retryUsed) return false;
  dailyState.retryUsed = true;
  dailyState.hintUsed = true;
  els.dailyHint.classList.remove("hidden");
  els.dailyHintBtn.classList.add("hidden");
  els.dailyFeedback.className = "feedback wrong";
  els.dailyFeedback.innerHTML = `<strong>再想一想</strong><span>这次不扣星。看看提示，再试一次。</span>`;
  if (currentDailyItem().type === "choice") renderDailyAnswers();
  else { const input = $("dailyTextInput"); if (input) { input.value = ""; input.focus(); } }
  saveDaily();
  return true;
}
function resolveDaily(correct, given) {
  const ref = currentDailyRef();
  const item = currentDailyItem();
  dailyState.answered = true;
  if (correct) {
    dailyState.correct += 1;
    dailyState.stars += dailyState.hintUsed ? 1 : 2;
    els.dailyFeedback.className = "feedback correct";
    els.dailyFeedback.innerHTML = `<strong>答对了  +${dailyState.hintUsed ? 1 : 2} ★</strong><span>${item.explanation}</span>`;
    beep("good");
  } else {
    dailyState.wrong.push({ ref, prompt: item.prompt, given, answer: answerText(item), explanation: item.explanation });
    els.dailyFeedback.className = "feedback wrong";
    els.dailyFeedback.innerHTML = `<strong>没关系  今天记住它</strong><span>正确答案：${answerText(item)}。${item.explanation}</span>`;
    beep("soft");
  }
  saveMastery(ref.roundId, correct);
  els.dailyAnswerArea.querySelectorAll("button,input").forEach(el => el.disabled = true);
  if (correct && item.type === "choice") els.dailyAnswerArea.querySelector(`[data-daily-choice="${item.answer}"]`)?.classList.add("correct");
  els.dailyStars.textContent = dailyState.stars;
  els.dailyNextBtn.classList.remove("hidden");
  saveDaily();
}
function nextDaily() {
  dailyState.index += 1;
  if (dailyState.index >= dailyState.queue.length) finishDaily(); else renderDailyQuestion();
}
function startDailyTimer() {
  clearInterval(dailyTimerId);
  updateDailyClock();
  dailyTimerId = setInterval(() => {
    dailyState.secondsLeft -= 1;
    updateDailyClock();
    if (dailyState.secondsLeft <= 0) { clearInterval(dailyTimerId); finishDaily(); }
    if (dailyState.secondsLeft % 10 === 0) saveDaily();
  }, 1000);
}
function updateDailyClock() {
  const min = Math.floor(Math.max(0, dailyState.secondsLeft) / 60);
  const sec = Math.max(0, dailyState.secondsLeft) % 60;
  els.dailyClock.textContent = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}
function finishDaily() {
  clearInterval(dailyTimerId);
  dailyState.completed = true;
  const progress = loadDailyProgress();
  if (!progress.completedDates.includes(todayKey())) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,"0")}-${String(yesterday.getDate()).padStart(2,"0")}`;
    progress.streak = progress.lastDate === yKey ? progress.streak + 1 : 1;
    progress.totalDays += 1;
    progress.lastDate = todayKey();
    progress.completedDates.push(todayKey());
    localStorage.setItem(DAILY_PROGRESS_KEY, JSON.stringify(progress));
  }
  if (dailyState.planMode && !dailyState.sessionRecorded) {
    const plan = loadPlanProgress();
    if (!plan.completedSlots.includes(dailyState.planSlot)) plan.completedSlots.push(dailyState.planSlot);
    plan.totalCorrect += dailyState.correct;
    plan.totalQuestions += dailyState.queue.length;
    plan.sessions.push({ date: todayKey(), slot: dailyState.planSlot, correct: dailyState.correct, total: dailyState.queue.length });
    dailyState.sessionRecorded = true;
    savePlanProgress(plan);
  }
  saveDaily();
  showDailyResults();
}
function showDailyResults() {
  showScreen(els.dailyResultScreen);
  const progress = loadDailyProgress();
  els.dailyResultCorrect.textContent = dailyState.correct;
  els.dailyResultTotal.textContent = dailyState.queue.length;
  const plan = dailyState.planMode ? loadPlanProgress() : null;
  els.dailyResultMessage.textContent = dailyState.planMode ? `${dailyState.name} 完成第 ${dailyState.planWeek} 周任务，预计分数已到 ${estimatedPlanScore(plan)} 分。` : `${dailyState.name} 今天获得 ${dailyState.stars} 颗星，已连续学习 ${progress.streak} 天。`;
  const used = (dailyState.totalSeconds || 900) - dailyState.secondsLeft;
  els.dailyResultStats.innerHTML = `<div class="stat"><strong>${dailyState.stars} ★</strong><span>本次星星</span></div><div class="stat"><strong>${Math.floor(used/60)}分${used%60}秒</strong><span>学习时间</span></div><div class="stat"><strong>${dailyState.planMode ? `${plan.completedSlots.length}/24` : progress.totalDays}</strong><span>${dailyState.planMode ? "提分任务" : "累计学习天数"}</span></div>`;
  els.dailyReviewList.innerHTML = dailyState.wrong.length ? dailyState.wrong.map(w => `<details class="review-item"><summary>${escapeHtml(w.prompt)}</summary><div>你的答案：${escapeHtml(String(w.given))}<br>正确答案：<b>${escapeHtml(w.answer)}</b><br>${escapeHtml(w.explanation)}</div></details>`).join("") : "<p>今天全部答对，明天系统会适当提高挑战。</p>";
}
function practiceDailyWrongs() {
  const queue = dailyState.wrong.length ? dailyState.wrong.map(w => w.ref) : dailyState.queue;
  const retrySeconds = dailyState.planMode ? Math.min(900, dailyState.totalSeconds || 900) : 900;
  dailyState = { ...dailyState, queue, index: 0, correct: 0, stars: 0, wrong: [], secondsLeft: retrySeconds, totalSeconds: retrySeconds, completed: false, sessionRecorded: true };
  showScreen(els.dailyScreen);
  renderDailyQuestion();
  startDailyTimer();
}

function updateScores() {
  els.scoreA.textContent = state.scores.A;
  els.scoreB.textContent = state.scores.B;
}
function updatePowerButtons() {
  els.timeBoostBtn.disabled = state.powers.timeBoost <= 0;
  els.timeBoostBtn.querySelector("small").textContent = `${state.powers.timeBoost} 次`;
  els.shieldBtn.disabled = state.powers.shield <= 0;
  els.shieldBtn.querySelector("small").textContent = state.powers.shieldArmed ? "已启动" : `${state.powers.shield} 次`;
  els.teamLinkBtn.disabled = state.powers.teamLink <= 0;
  els.teamLinkBtn.querySelector("small").textContent = `${state.powers.teamLink} 次`;
}

function startTimer() {
  clearInterval(timerId);
  if (state.paused) return;
  timerId = setInterval(() => {
    state.timeLeft -= 1;
    updateTimer();
    if (state.timeLeft <= 0) {
      clearInterval(timerId);
      resolveWrong("超时");
    }
  }, 1000);
}
function updateTimer() {
  els.timerText.textContent = Math.max(0, state.timeLeft);
  const progress = Math.max(0, state.timeLeft / state.totalTime);
  els.timerRing.style.strokeDashoffset = String(327 * (1 - progress));
  els.timerBox.classList.toggle("warning", state.timeLeft <= Math.min(8, state.totalTime * .3));
}
function addTime(amount) {
  state.timeLeft += amount;
  state.totalTime += amount;
  updateTimer();
}

function beep(kind) {
  if (!audioOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = kind === "good" ? [620, 820] : kind === "win" ? [440, 660, 880] : kind === "soft" ? [420] : [220];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(.0001, ctx.currentTime + i * .1);
      gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + i * .1 + .01);
      gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + i * .1 + .13);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * .1);
      osc.stop(ctx.currentTime + i * .1 + .15);
    });
  } catch (_) {}
}
function launchConfetti() {
  const colors = ["#153a5b", "#1f6f8b", "#6dd5c3", "#f5b942", "#d44f4f"];
  els.confetti.innerHTML = Array.from({ length: 70 }, (_, i) => `<i style="left:${Math.random()*100}vw;background:${colors[i%colors.length]};animation-delay:${Math.random()*.8}s;transform:rotate(${Math.random()*180}deg)"></i>`).join("");
}
function escapeHtml(text) {
  return text.replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

els.setupForm.addEventListener("submit", e => { e.preventDefault(); startGame(false); });
els.choosePlanBtn.addEventListener("click", preparePlan);
els.startPlanBtn.addEventListener("click", startPlanSession);
els.chooseDailyBtn.addEventListener("click", prepareDailySetup);
els.chooseClassBtn.addEventListener("click", () => showScreen(els.setupScreen));
document.querySelectorAll("[data-home]").forEach(btn => btn.addEventListener("click", () => { clearInterval(timerId); clearInterval(dailyTimerId); showScreen(els.homeScreen); }));
document.querySelector(".brand").addEventListener("click", e => { e.preventDefault(); clearInterval(timerId); clearInterval(dailyTimerId); showScreen(els.homeScreen); });
els.dailySetupForm.addEventListener("submit", e => { e.preventDefault(); startDaily(false); });
els.dailyResumeBtn.addEventListener("click", () => startDaily(true));
els.dailyHintBtn.addEventListener("click", () => { dailyState.hintUsed = true; els.dailyHint.classList.remove("hidden"); els.dailyHintBtn.classList.add("hidden"); saveDaily(); });
els.dailyNextBtn.addEventListener("click", nextDaily);
els.dailyAgainBtn.addEventListener("click", practiceDailyWrongs);
els.resumeBtn.addEventListener("click", () => { load(); state.completed ? showResults() : startGame(true); });
els.nextBtn.addEventListener("click", nextQuestion);
els.stealBtn.addEventListener("click", beginSteal);
els.pauseBtn.addEventListener("click", () => {
  state.paused = !state.paused;
  els.pauseBtn.textContent = state.paused ? "继续计时" : "暂停计时";
  state.paused ? clearInterval(timerId) : startTimer();
});
els.timeBoostBtn.addEventListener("click", () => {
  if (currentSide() !== "A" || state.powers.timeBoost <= 0) return;
  state.powers.timeBoost -= 1; addTime(20); updatePowerButtons(); save();
});
els.shieldBtn.addEventListener("click", () => {
  if (currentSide() !== "A" || state.powers.shield <= 0) return;
  state.powers.shield -= 1; state.powers.shieldArmed = true; updatePowerButtons(); save();
});
els.teamLinkBtn.addEventListener("click", () => {
  if (currentSide() !== "B" || state.powers.teamLink <= 0) return;
  state.powers.teamLink -= 1; addTime(20); updatePowerButtons(); save();
});
els.wagerBox.addEventListener("click", e => {
  const btn = e.target.closest("[data-wager]"); if (!btn) return;
  state.wager = Number(btn.dataset.wager);
  [...els.wagerBox.querySelectorAll("button")].forEach(b => b.classList.toggle("selected", b === btn));
});
els.hintBtn.addEventListener("click", () => {
  state.hintShown = true;
  els.hintPanel.classList.remove("hidden");
  els.hintBtn.classList.add("hidden");
  save();
});
els.finishBtn.addEventListener("click", finishGame);
els.printBtn.addEventListener("click", () => window.print());
els.restartBtn.addEventListener("click", () => { localStorage.removeItem(SAVE_KEY); state = freshState(); location.reload(); });
els.soundBtn.addEventListener("click", () => { audioOn = !audioOn; els.soundBtn.setAttribute("aria-pressed", String(audioOn)); els.soundBtn.textContent = audioOn ? "♪" : "×"; });
els.teacherBtn.addEventListener("click", () => { updateDifficultyControls(); els.teacherDialog.showModal(); });
els.teacherDialog.addEventListener("click", e => {
  const levelBtn = e.target.closest("[data-level]");
  if (levelBtn) {
    state.mode = "adaptive";
    state.difficultyOverride = levelBtn.dataset.level;
    if (state.difficultyOverride !== "auto") state.bLevel = Number(state.difficultyOverride);
    updateDifficultyControls();
    save();
    if (!els.gameScreen.classList.contains("hidden")) renderQuestion();
    return;
  }
  const btn = e.target.closest("[data-adjust]"); if (!btn) return;
  const [side, amount] = btn.dataset.adjust.split(",");
  state.scores[side] = Math.max(0, state.scores[side] + Number(amount)); updateScores(); save();
});
function updateDifficultyControls() {
  els.teacherDialog.querySelectorAll("[data-level]").forEach(btn => btn.classList.toggle("active", btn.dataset.level === state.difficultyOverride));
}
els.forceNextBtn.addEventListener("click", () => { els.teacherDialog.close(); nextQuestion(); });
els.clearSaveBtn.addEventListener("click", () => { localStorage.removeItem(SAVE_KEY); els.resumeBtn.classList.add("hidden"); });

if (localStorage.getItem(SAVE_KEY)) els.resumeBtn.classList.remove("hidden");
