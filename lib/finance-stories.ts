import type { Story } from "@/lib/stories";

const secondLevelImages = {
  cover: "https://i.ytimg.com/vi/prEhRSxXyE0/maxresdefault.jpg",
  levels: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhdeGoYgNkYQ_SuLEtCUqulDCgIgEFqDHC6ZBZ2-b4OCewU0OL170bqI&s=10",
  pendulum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5oi7VsHbRHNZhuY9Z0oI-ud_RYfU44WICtftOTGzbD73oLLlzygu-F5g&s=10",
};

const wealthImages = {
  cover: "https://i.ytimg.com/vi/wwCM-H5zAdc/maxresdefault.jpg",
  snowball: "https://i.ytimg.com/vi/wwCM-H5zAdc/maxresdefault.jpg",
};

const ratRaceImages = {
  cover: "https://i.ytimg.com/vi/BoObTXbIcyA/maxresdefault.jpg",
  wheel: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTodi8V55pR4HS4y9yGaEHbqw4h4R7z9Rz3XTBAyFs-7ZNO_Bt1TMlQ8KUOacAbt874CXMU_IhwXWv-Swo",
  assets: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSSn70WGJScjMhMo0fOgrwY-yGTPQu5JkUmEXu860rhwEel74vOHjMlUeuOcJmanYW2IbJr9OYde4Dr02E",
};

export const outsmartCrowdEnglish = {
  slug: "outsmart-the-crowd",
  title: "Outsmart the Crowd",
  subtitle: "A market adventure about second-level thinking",
  age: "Ages 12-14",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=prEhRSxXyE0",
  cover: secondLevelImages.cover,
  locale: "en",
  languageLabel: "English",
  alternateSlug: "outsmart-the-crowd-zh",
  sections: [
    {
      id: "trend-trap",
      kicker: "Chapter one",
      title: "The Trend Trap",
      paragraphs: [
        "Imagine saving for months to buy the glowing game skin everyone at school wants. You finally click Buy Now, show it off the next morning, and feel unstoppable.",
        "Then the game releases a million more skins. The hype vanishes. The price falls. You did what everyone else did, but somehow doing the obvious thing made you late.",
        "Howard Marks calls this the problem of crowd thinking. When a choice is already popular, the easy profit may already be gone.",
      ],
      image: { src: secondLevelImages.levels, alt: "Levels of deeper thinking", credit: "AI-generated image surfaced in the Gemini response" },
      choice: { question: "Why can the obvious choice become dangerous?", options: ["Everyone may already know it", "Thinking is never useful", "Trends always last forever"], answer: "Everyone may already know it" },
    },
    {
      id: "second-level",
      kicker: "Mind tool one",
      title: "Second-Level Thinking",
      paragraphs: [
        "First-level thinking says: great product, buy the stock. Second-level thinking pauses and asks: if everyone already knows it is great, is the price already too high?",
        "First-level thinking follows the crowd. Second-level thinking studies the crowd. It asks what other people believe, what they may be missing, and what could happen next.",
        "This does not mean being opposite just to look clever. It means doing the homework before the crowd's excitement borrows your brain.",
      ],
      comparison: {
        leftTitle: "First-level thought",
        rightTitle: "Second-level question",
        rows: [
          ["Everyone wants this card.", "Is the hype already at the top?"],
          ["The expert says buy.", "How many people heard the same advice?"],
          ["This company is amazing.", "What price am I paying for amazing?"],
          ["I am afraid to miss out.", "What happens if the crowd gets bored?"],
        ],
      },
      choice: { question: "What does second-level thinking study?", options: ["The crowd's beliefs", "Only the newest trend", "Random guesses"], answer: "The crowd's beliefs" },
    },
    {
      id: "three-filter",
      kicker: "Detective drill",
      title: "The Three-Question Filter",
      paragraphs: [
        "Before a big choice, start with the crowd check: what will most people think or do right now?",
        "Then find the hidden twist: what future change, hidden cost, or missing fact might the crowd be ignoring?",
        "Finally, run the survival check: if your idea is wrong, can you survive the mistake without a total Game Over?",
      ],
      choice: { question: "Which question protects you from a Game Over?", options: ["Can I survive being wrong?", "Can I copy everyone faster?", "Can I spend everything today?"], answer: "Can I survive being wrong?" },
    },
    {
      id: "pendulum",
      kicker: "Market weather",
      title: "The Pendulum of Doom",
      paragraphs: [
        "Markets and trends rarely sit calmly in the middle. They swing like a heavy clock pendulum between greed and fear.",
        "When everyone is celebrating and saying a trend cannot lose, prices may already be stretched high. When everyone is terrified, hidden opportunities may appear.",
        "The goal is not to predict every swing. The goal is to stay calm enough to notice when the room has become too excited or too afraid.",
      ],
      image: { src: secondLevelImages.pendulum, alt: "Market sentiment swinging like a pendulum", credit: "AI-generated image surfaced in the Gemini response" },
      choice: { question: "Where does the pendulum rarely stay?", options: ["Calmly in the middle", "At an extreme", "Inside a clock"], answer: "Calmly in the middle" },
    },
    {
      id: "defense",
      kicker: "Final chapter",
      title: "Win by Staying in the Game",
      paragraphs: [
        "Beginners often chase the flashiest move. Long-term winners focus on avoiding mistakes that knock them out completely.",
        "Leave room for error. Do not bet all your money, time, or energy on one idea. A backup plan is not boring; it is armor.",
        "Next time a crowd is shouting, pause and ask: what are they missing, what do I know, and where is my safety net?",
      ],
      choice: { question: "What is the real goal of defense?", options: ["Avoid fatal mistakes", "Never try anything", "Always follow the loudest person"], answer: "Avoid fatal mistakes" },
    },
  ],
} satisfies Story;

export const outsmartCrowdChinese = {
  slug: "outsmart-the-crowd-zh",
  title: "看穿人群的秘密",
  subtitle: "一个关于第二层次思维的市场故事",
  age: "适合 12-14 岁",
  duration: "阅读约 10 分钟",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=prEhRSxXyE0",
  cover: secondLevelImages.cover,
  locale: "zh-CN",
  languageLabel: "中文",
  alternateSlug: "outsmart-the-crowd",
  sections: [
    {
      id: "trend-trap",
      kicker: "第一章",
      title: "潮流陷阱",
      paragraphs: [
        "想象一下，你攒了好几个月零花钱，终于买到学校里人人都想要的发光游戏皮肤。第二天你带着它出现，感觉自己像传奇玩家。",
        "可是当天晚上，游戏公司突然又发售了一百万套。热度消失，价格下跌。你明明跟上了大家，却发现自己已经太晚了。",
        "霍华德·马克斯提醒我们：当一个选择已经变得非常热门时，最容易赚到的部分可能早就被人群抢走了。",
      ],
      image: { src: secondLevelImages.levels, alt: "更深层思考的层级", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "为什么最明显的选择可能很危险？", options: ["大家可能早就知道了", "思考永远没用", "潮流一定永远持续"], answer: "大家可能早就知道了" },
    },
    {
      id: "second-level",
      kicker: "思维工具一",
      title: "第二层次思维",
      paragraphs: [
        "第一层次思维会说：这个产品真棒，赶紧买。第二层次思维会停下来问：如果所有人都知道它很棒，价格是不是已经太高了？",
        "第一层次思维跟随人群。第二层次思维研究人群：大家相信什么？他们忽略了什么？接下来可能发生什么？",
        "这不是为了叛逆而叛逆，而是在情绪借走你的大脑之前，先把功课做完。",
      ],
      comparison: {
        leftTitle: "第一层想法",
        rightTitle: "第二层问题",
        rows: [
          ["每个人都想要这张卡。", "热度是不是已经到顶了？"],
          ["专家说应该买。", "有多少人听到了同样建议？"],
          ["这家公司太厉害了。", "我正在为厉害支付什么价格？"],
          ["我害怕错过。", "如果大家下周腻了会怎样？"],
        ],
      },
      choice: { question: "第二层次思维研究什么？", options: ["人群的想法", "只研究最新潮流", "随便猜"], answer: "人群的想法" },
    },
    {
      id: "three-filter",
      kicker: "侦探训练",
      title: "三个问题过滤器",
      paragraphs: [
        "做重大决定之前，先观察人群：大多数人现在最容易怎么想、怎么做？",
        "再寻找隐藏转折：人群因为兴奋而忽略了什么未来变化、隐藏成本或关键事实？",
        "最后做生存测试：如果你的判断错了，你还能承受吗，还是会直接 Game Over？",
      ],
      choice: { question: "哪个问题能防止你 Game Over？", options: ["我能承受错误吗？", "我能更快复制别人吗？", "我能今天花光所有钱吗？"], answer: "我能承受错误吗？" },
    },
    {
      id: "pendulum",
      kicker: "市场天气",
      title: "疯狂的钟摆",
      paragraphs: [
        "市场和潮流很少安静地停在中间。它们像沉重的钟摆，在贪婪和恐惧之间来回摇晃。",
        "当所有人都在庆祝，说某个东西绝对不会亏时，价格可能已经被推得太高。当所有人都恐慌逃跑时，机会反而可能悄悄出现。",
        "你的目标不是预测每一次摇摆，而是在房间太兴奋或太害怕时，仍然保持清醒。",
      ],
      image: { src: secondLevelImages.pendulum, alt: "市场情绪像钟摆一样摇晃", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "钟摆最少停在哪里？", options: ["平静的中间", "极端位置", "时钟里面"], answer: "平静的中间" },
    },
    {
      id: "defense",
      kicker: "最后一章",
      title: "留在游戏里才有机会赢",
      paragraphs: [
        "新手常常追求最闪亮的操作。长期赢家更重视避免那些会把自己彻底淘汰的致命错误。",
        "永远留出犯错空间。不要把所有金钱、时间和精力都押在一个想法上。备用计划不是无聊，而是护甲。",
        "下次人群大喊时，先停一下：他们忽略了什么？我知道什么？如果我错了，我的安全网在哪里？",
      ],
      choice: { question: "防守真正保护的是什么？", options: ["避免致命错误", "永远不尝试", "永远听最吵的人"], answer: "避免致命错误" },
    },
  ],
} satisfies Story;

export const magicSnowballEnglish = {
  slug: "magic-snowball",
  title: "The Magic Snowball",
  subtitle: "A psychology-of-wealth story about time, behavior, and freedom",
  age: "Ages 12-14",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=wwCM-H5zAdc",
  cover: wealthImages.cover,
  locale: "en",
  languageLabel: "English",
  alternateSlug: "magic-snowball-zh",
  sections: [
    {
      id: "two-players",
      kicker: "Chapter one",
      title: "Two Players in the Game of Life",
      paragraphs: [
        "Player One is a genius with a huge salary, a mansion, and a gold-plated sports car. Player Two is a quiet janitor with an old truck and a plain jacket.",
        "Fifty years later, the janitor is the secret millionaire and the genius is broke. It feels impossible until you learn the hidden rule: money is less about looking smart and more about behaving wisely.",
        "The psychology of wealth begins with small habits repeated for a very long time.",
      ],
      image: { src: wealthImages.cover, alt: "Two very different money paths", credit: "YouTube thumbnail from the source video" },
      choice: { question: "What made the difference over time?", options: ["Behavior", "Flashy cars", "A perfect salary"], answer: "Behavior" },
    },
    {
      id: "compounding",
      kicker: "Mind-hack one",
      title: "The Magic Snowball",
      paragraphs: [
        "Compounding is like rolling a tiny snowball down a long mountain. At first it barely changes. Then it gathers snow, grows wider, and gathers even more snow each turn.",
        "Money can do something similar when it earns returns and those returns begin earning returns too. Time becomes the mountain.",
        "You do not need a giant snowball to start. You need a long hill and the patience not to kick the snowball apart.",
      ],
      comparison: {
        leftTitle: "Under the mattress",
        rightTitle: "Magic snowball",
        rows: [
          ["Adds only what you put in.", "Growth can start making more growth."],
          ["Time passes quietly.", "Time becomes a helper."],
          ["Feels safe but stays small.", "Bounces around but can grow large."],
        ],
      },
      choice: { question: "What is the most powerful snowball helper?", options: ["Time", "Showing off", "Buying every trend"], answer: "Time" },
    },
    {
      id: "stay-wealthy",
      kicker: "Mind-hack two",
      title: "Getting Wealthy vs. Staying Wealthy",
      paragraphs: [
        "Getting wealthy and staying wealthy are not the same game. Getting wealth may require courage. Staying wealthy requires humility, caution, and room for mistakes.",
        "In Minecraft terms, first you run, mine, and fight for diamonds. Once you have diamonds, you build a secure base and protect them.",
        "The genius in the story could earn money, but he kept taking risks to get more. The janitor quietly protected his base.",
      ],
      choice: { question: "What does staying wealthy require?", options: ["Humility and protection", "Endless showing off", "Risking everything forever"], answer: "Humility and protection" },
    },
    {
      id: "invisible",
      kicker: "Mind-hack three",
      title: "The Ferrari Illusion",
      paragraphs: [
        "When you see a shiny $300,000 car, you may think the driver is rich. But the only thing you know for sure is that the car cost a lot of money.",
        "True wealth is often invisible. It is the savings not spent, the freedom not shown off, and the choices your future self gets to keep.",
        "A normal backpack and an ordinary phone can hide a powerful snowball quietly rolling in the background.",
      ],
      comparison: {
        leftTitle: "What people see",
        rightTitle: "What may be real",
        rows: [
          ["A closet full of expensive sneakers.", "Money that cannot grow anymore."],
          ["A new phone every few months.", "Little savings for the future."],
          ["A regular kid with simple gear.", "A freedom snowball growing quietly."],
        ],
      },
      choice: { question: "What is true wealth really buying?", options: ["Freedom", "Stranger approval", "More bills"], answer: "Freedom" },
    },
    {
      id: "cheat-sheet",
      kicker: "Final chapter",
      title: "The Ultimate Cheat Sheet",
      paragraphs: [
        "Start early, even if the beginning feels tiny. Learn to survive, because not losing everything is part of winning.",
        "Ignore the shiny car test. Spending money to prove you have money is a quick way to have less money.",
        "The quiet habit that buys freedom is simple: roll the snowball, protect it, and let time work.",
      ],
      choice: { question: "Which habit helps the future most?", options: ["Roll and protect the snowball", "Spend to impress strangers", "Wait until everything is perfect"], answer: "Roll and protect the snowball" },
    },
  ],
} satisfies Story;

export const magicSnowballChinese = {
  slug: "magic-snowball-zh",
  title: "魔法雪球",
  subtitle: "一个关于财富心理、时间和自由的故事",
  age: "适合 12-14 岁",
  duration: "阅读约 10 分钟",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=wwCM-H5zAdc",
  cover: wealthImages.cover,
  locale: "zh-CN",
  languageLabel: "中文",
  alternateSlug: "magic-snowball",
  sections: [
    {
      id: "two-players",
      kicker: "第一章",
      title: "人生游戏里的两个玩家",
      paragraphs: [
        "玩家一是天才，工资很高，住豪宅，开闪亮跑车。玩家二是安静的清洁工，开旧皮卡，穿普通外套。",
        "五十年后，清洁工成了隐藏的富翁，天才却破产了。听起来像游戏出错，其实是因为财富不只看智商，更看行为习惯。",
        "财富心理学的第一课，就是让小习惯在很长很长的时间里持续发生。",
      ],
      image: { src: wealthImages.cover, alt: "两条不同的金钱道路", credit: "来源视频的 YouTube 缩略图" },
      choice: { question: "长期来看，真正造成差别的是什么？", options: ["行为习惯", "炫酷跑车", "完美工资"], answer: "行为习惯" },
    },
    {
      id: "compounding",
      kicker: "大脑技巧一",
      title: "魔法雪球",
      paragraphs: [
        "复利就像把一个小雪球推下长长的雪山。刚开始它几乎没变化，后来越滚越大，每一圈都能粘上更多雪。",
        "钱也可能这样工作：收益开始产生新的收益，时间就变成了那条长长的山坡。",
        "开始时不需要巨大的雪球。你需要的是足够长的坡道，以及不把雪球踢散的耐心。",
      ],
      comparison: {
        leftTitle: "藏在床底",
        rightTitle: "魔法雪球",
        rows: [
          ["只增加你放进去的钱。", "增长也可能继续产生增长。"],
          ["时间只是悄悄过去。", "时间变成帮手。"],
          ["看起来安全，但长得慢。", "会波动，但可能长得很大。"],
        ],
      },
      choice: { question: "雪球最强大的帮手是什么？", options: ["时间", "炫耀", "买下每个潮流"], answer: "时间" },
    },
    {
      id: "stay-wealthy",
      kicker: "大脑技巧二",
      title: "变富和守富不是同一个游戏",
      paragraphs: [
        "变富和守富需要不同能力。变富可能需要勇气，守富需要谦虚、谨慎和犯错空间。",
        "像玩生存游戏一样，刚开始你要奔跑、挖矿、找钻石。得到钻石之后，你要建基地、点火把、保护它们。",
        "故事里的天才很会赚钱，却总想冒更大风险得到更多。清洁工则安静地保护自己的基地。",
      ],
      choice: { question: "守富最需要什么？", options: ["谦虚和保护", "不停炫耀", "永远赌上全部"], answer: "谦虚和保护" },
    },
    {
      id: "invisible",
      kicker: "大脑技巧三",
      title: "法拉利错觉",
      paragraphs: [
        "看到一辆 30 万美元的跑车时，很多人会想：司机一定很有钱。但你唯一确定的是，这辆车花掉了很多钱。",
        "真正的财富常常是看不见的。它是没有花掉的储蓄，是不用炫耀的自由，也是未来的你还能保留的选择。",
        "普通书包和普通手机背后，也可能藏着一个正在悄悄滚大的自由雪球。",
      ],
      comparison: {
        leftTitle: "大家看见的",
        rightTitle: "真实可能是",
        rows: [
          ["一柜子昂贵球鞋。", "被困住、不能继续成长的钱。"],
          ["几个月就换一次新手机。", "未来储蓄很少。"],
          ["普通装备的低调学生。", "自由雪球正在悄悄变大。"],
        ],
      },
      choice: { question: "真正的财富买来的是什么？", options: ["自由", "陌生人的认可", "更多账单"], answer: "自由" },
    },
    {
      id: "cheat-sheet",
      kicker: "最后一章",
      title: "终极通关秘籍",
      paragraphs: [
        "尽早开始，即使开头很小。学会生存，因为不把一切输光也是胜利的一部分。",
        "不要被闪亮跑车测试骗住。为了证明自己有钱而花钱，最快的结果就是变得更没钱。",
        "能买来自由的习惯很简单：滚动雪球，保护雪球，然后让时间工作。",
      ],
      choice: { question: "哪个习惯最能帮助未来？", options: ["滚动并保护雪球", "花钱让陌生人佩服", "等到一切完美再开始"], answer: "滚动并保护雪球" },
    },
  ],
} satisfies Story;

export const escapeRatRaceEnglish = {
  slug: "escape-the-rat-race",
  title: "Escape the Rat Race",
  subtitle: "A money-machine story about assets, liabilities, and freedom",
  age: "Ages 12-14",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=BoObTXbIcyA",
  cover: ratRaceImages.cover,
  locale: "en",
  languageLabel: "English",
  alternateSlug: "escape-the-rat-race-zh",
  sections: [
    {
      id: "wheel",
      kicker: "Chapter one",
      title: "The Invisible Wheel",
      paragraphs: [
        "A hamster can run as fast as its legs can go and still end up in the same place. Adults can get stuck on a similar wheel: work, earn, spend, repeat.",
        "The wheel is called the Rat Race. A big salary does not guarantee freedom if every dollar disappears the moment it arrives.",
        "To step off the wheel, you need a new rule: stop working only for money and begin building things that can work for you.",
      ],
      image: { src: ratRaceImages.wheel, alt: "The rat race as a repeating wheel", credit: "AI-generated image surfaced in the Gemini response" },
      choice: { question: "What keeps someone on the wheel?", options: ["Spending everything they earn", "Learning new skills", "Saving for freedom"], answer: "Spending everything they earn" },
    },
    {
      id: "assets",
      kicker: "Secret one",
      title: "Money Machines vs. Money Vampires",
      paragraphs: [
        "An asset is a money machine: something that can put money into your pocket. A liability is a money vampire: something that takes money out.",
        "A new phone may look rich, but it loses value and brings bills. A small vending machine may look boring, but it can earn while you are in school.",
        "The wealth game changes when you start using x-ray vision. Do not ask only whether something looks cool. Ask what it does to your pocket.",
      ],
      image: { src: ratRaceImages.assets, alt: "Assets and liabilities explained visually", credit: "AI-generated image surfaced in the Gemini response" },
      comparison: {
        leftTitle: "Money vampire",
        rightTitle: "Money machine",
        rows: [
          ["A phone that loses value and adds bills.", "A small machine that earns coins."],
          ["Shoes that empty birthday money.", "Equipment for a neighborhood job."],
          ["Stuff bought only to impress people.", "A piece of a business that can grow."],
        ],
      },
      choice: { question: "What does an asset do?", options: ["Can put money into your pocket", "Always looks expensive", "Always takes money away"], answer: "Can put money into your pocket" },
    },
    {
      id: "own-business",
      kicker: "Secret two",
      title: "Mind Your Own Business",
      paragraphs: [
        "If you work at a burger restaurant, you can earn wages. But the owner is building the business. Both matter, but they are not the same.",
        "Minding your own business does not mean quitting school. It means building your asset column a little at a time after the homework is done.",
        "Your first empire can be tiny: a savings habit, a lawn-mowing kit, a tutoring plan, or an index fund with help from a trusted adult.",
      ],
      choice: { question: "What is an asset column?", options: ["A list of things that can work for you", "A pile of receipts", "A shopping wish list"], answer: "A list of things that can work for you" },
    },
    {
      id: "loop",
      kicker: "Secret three",
      title: "The Infinite Loop",
      paragraphs: [
        "Pay yourself first. Before candy, before games, set aside 10% to 20% for your Empire Building Fund.",
        "Use that fund to hunt for assets. When a money machine earns its first dollars, do not spend them immediately.",
        "Reinvest the magic. Let your machines help build more machines until the wheel begins to slow down.",
      ],
      comparison: {
        leftTitle: "Spend loop",
        rightTitle: "Freedom loop",
        rows: [
          ["Earn money.", "Earn money."],
          ["Spend it all.", "Save a piece first."],
          ["Need the next paycheck.", "Buy or build assets."],
          ["Repeat the wheel.", "Assets help buy more assets."],
        ],
      },
      choice: { question: "What should happen when a money machine earns money?", options: ["Reinvest some of it", "Spend all of it instantly", "Hide it from every plan"], answer: "Reinvest some of it" },
    },
    {
      id: "boss",
      kicker: "Final chapter",
      title: "The Final Boss Is Your Brain",
      paragraphs: [
        "The hardest enemies are fear and greed. Greed says: buy the shiny thing now. Fear says: building anything is too hard, stay on the wheel.",
        "A wise money player pauses for three seconds and asks: is this a money machine or a money vampire?",
        "Choose more machines, fewer vampires, and enough patience for your future freedom to grow.",
      ],
      choice: { question: "What question should you ask in the store?", options: ["Machine or vampire?", "Will strangers clap?", "Can I empty my wallet fastest?"], answer: "Machine or vampire?" },
    },
  ],
} satisfies Story;

export const escapeRatRaceChinese = {
  slug: "escape-the-rat-race-zh",
  title: "逃离老鼠赛跑",
  subtitle: "一个关于资产、负债和自由的金钱故事",
  age: "适合 12-14 岁",
  duration: "阅读约 10 分钟",
  sourceUrl: "https://gemini.google.com/app/dfcd2764ca2a1dc3",
  videoUrl: "https://www.youtube.com/watch?v=BoObTXbIcyA",
  cover: ratRaceImages.cover,
  locale: "zh-CN",
  languageLabel: "中文",
  alternateSlug: "escape-the-rat-race",
  sections: [
    {
      id: "wheel",
      kicker: "第一章",
      title: "隐形跑轮",
      paragraphs: [
        "仓鼠可以拼命奔跑，却一直留在原地。成年人也可能困在类似的跑轮上：工作、赚钱、花光、再重复。",
        "这个跑轮叫做老鼠赛跑。工资高不一定代表自由，如果每一块钱刚到手就消失了，你仍然会被下一张账单追着跑。",
        "想走下跑轮，你需要一条新规则：不要只为钱工作，也要开始建造能为你工作的东西。",
      ],
      image: { src: ratRaceImages.wheel, alt: "老鼠赛跑的循环跑轮", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "什么会让人困在跑轮上？", options: ["花光赚到的每一分钱", "学习新技能", "为自由储蓄"], answer: "花光赚到的每一分钱" },
    },
    {
      id: "assets",
      kicker: "秘密一",
      title: "印钞机 vs. 金钱吸血鬼",
      paragraphs: [
        "资产像印钞机：能把钱放进你的口袋。负债像金钱吸血鬼：会把钱从你的口袋里吸走。",
        "新手机看起来很富有，但会贬值，还会带来账单。小小的自动售货机看起来无聊，却可能在你上学时帮你赚钱。",
        "当你打开财富 X 光眼，问题就变了。不要只问它酷不酷，要问它会怎样影响你的口袋。",
      ],
      image: { src: ratRaceImages.assets, alt: "资产和负债的视觉解释", credit: "原 Gemini 回答中的 AI 生成图片" },
      comparison: {
        leftTitle: "金钱吸血鬼",
        rightTitle: "印钞机",
        rows: [
          ["会贬值、还带来账单的手机。", "能赚硬币的小机器。"],
          ["花光生日钱的名牌鞋。", "能做社区小生意的工具。"],
          ["只为了让别人羡慕而买的东西。", "可能成长的企业一小部分。"],
        ],
      },
      choice: { question: "资产会做什么？", options: ["可能把钱放进口袋", "一定看起来很贵", "一定把钱拿走"], answer: "可能把钱放进口袋" },
    },
    {
      id: "own-business",
      kicker: "秘密二",
      title: "关注你自己的事业",
      paragraphs: [
        "如果你在汉堡店打工，你能赚工资。但老板正在建造一家生意。两者都重要，但不是同一件事。",
        "关注自己的事业，不是让你退学。它的意思是：做完功课后，一点点建立自己的资产栏。",
        "你的第一个帝国可以很小：储蓄习惯、一套割草工具、一个辅导计划，或者在可信大人的帮助下了解指数基金。",
      ],
      choice: { question: "资产栏是什么？", options: ["能为你工作的东西清单", "一堆收据", "购物愿望清单"], answer: "能为你工作的东西清单" },
    },
    {
      id: "loop",
      kicker: "秘密三",
      title: "无限循环",
      paragraphs: [
        "先支付你自己。买糖果和游戏之前，先拿出 10% 到 20% 放进你的帝国建设基金。",
        "用这笔基金寻找资产。当印钞机赚到第一笔钱时，不要立刻全部花掉。",
        "把魔法重新投入进去。让机器帮助你建造更多机器，直到跑轮慢慢停下来。",
      ],
      comparison: {
        leftTitle: "消费循环",
        rightTitle: "自由循环",
        rows: [
          ["赚到钱。", "赚到钱。"],
          ["全部花光。", "先存下一部分。"],
          ["继续等待下一份收入。", "购买或建造资产。"],
          ["跑轮重复。", "资产帮助买更多资产。"],
        ],
      },
      choice: { question: "印钞机赚到钱以后应该怎样？", options: ["把一部分重新投入", "立刻全部花光", "完全不做计划"], answer: "把一部分重新投入" },
    },
    {
      id: "boss",
      kicker: "最后一章",
      title: "最终 Boss 是你的大脑",
      paragraphs: [
        "最难打败的敌人是恐惧和贪婪。贪婪说：现在就买那个闪亮东西。恐惧说：建造太难了，还是待在跑轮上吧。",
        "聪明的金钱玩家会停三秒，问自己：这是印钞机，还是金钱吸血鬼？",
        "选择更多印钞机，更少吸血鬼，再给未来的自由一点耐心。",
      ],
      choice: { question: "在商店里应该问自己什么？", options: ["印钞机还是吸血鬼？", "陌生人会鼓掌吗？", "怎样最快花光钱包？"], answer: "印钞机还是吸血鬼？" },
    },
  ],
} satisfies Story;

export const financeStoryPairs = [
  outsmartCrowdEnglish,
  outsmartCrowdChinese,
  magicSnowballEnglish,
  magicSnowballChinese,
  escapeRatRaceEnglish,
  escapeRatRaceChinese,
];

export const featuredFinanceStories = [
  outsmartCrowdEnglish,
  magicSnowballEnglish,
  escapeRatRaceEnglish,
];
