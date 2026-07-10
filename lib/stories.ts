export type StorySection = {
  id: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; credit: string };
  choice?: { question: string; options: string[]; answer: string };
  comparison?: { leftTitle: string; rightTitle: string; rows: Array<[string, string]> };
};

export type Story = {
  slug: string;
  title: string;
  subtitle: string;
  age: string;
  duration: string;
  sourceUrl: string;
  videoUrl: string;
  cover: string;
  locale: "en" | "zh-CN";
  languageLabel: string;
  alternateSlug?: string;
  sections: StorySection[];
};

import { financeStoryPairs, featuredFinanceStories } from "@/lib/finance-stories";

export const leoStory = {
  slug: "leo-five-secrets",
  title: "Leo's Five Secrets",
  subtitle: "A small adventure about big choices",
  age: "Ages 7-11",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/share/3bc84977e299",
  videoUrl: "https://www.youtube.com/watch?v=ofAgMbcoSZc",
  cover: "https://i.ytimg.com/vi/ofAgMbcoSZc/maxresdefault.jpg",
  locale: "en",
  languageLabel: "English",
  sections: [
    {
      id: "choice-wobbles",
      kicker: "Chapter one",
      title: "The Choice-Wobbles",
      paragraphs: [
        "In a bright little town called Decide-a-Lot lived a cheerful kid named Leo. He loved jokes, races, and Saturday adventures. But whenever he had to choose, his knees wobbled, his tummy flipped, and his thoughts spun like a carousel.",
        "Chocolate or strawberry? A bubble blower or a wooden glider? Leo wanted every choice to be perfect. Choosing one thing meant leaving another behind, and that felt scary.",
        "One sunny morning, Grandpa found Leo frozen between two toys. He sat beside him and opened a giant economics book. 'This is really a treasure map for choices,' Grandpa said. 'Let me show you five secrets.'",
      ],
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_yLZ5xWFYrKoe5tDXqePvzm-UPeN28Lme6AduDMcIgUAyp3LKkfrzBA&s=10",
        alt: "A child choosing between toys",
        credit: "AI-generated image surfaced in the original Gemini response",
      },
      choice: {
        question: "What makes Leo's choices feel hard?",
        options: ["He wants every option", "He has no imagination", "He dislikes toys"],
        answer: "He wants every option",
      },
    },
    {
      id: "opportunity-cost",
      kicker: "Secret one",
      title: "Every Yes Has a No",
      paragraphs: [
        "Grandpa pointed to the bubble blower. 'Its price is two coins, but its true cost is the glider you leave on the shelf. Economists call the next-best thing you give up your opportunity cost.'",
        "Leo stopped asking whether the bubbles were perfect. Instead he asked, 'Am I happy to trade the glider for an afternoon of bubbles?' He imagined glittering bubbles floating across the park and nodded.",
        "The moment Leo accepted what he was giving up, the wobble shrank. A wise choice was not a choice with no cost. It was a trade he understood and accepted.",
      ],
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbpVE0n6qXZxhvwMcybG09Uya9Ijdjnxk3IupGjs2dOH0I1MyH8ePpW4&s=10",
        alt: "A balance showing gains and tradeoffs",
        credit: "Image surfaced in the original Gemini response",
      },
      choice: {
        question: "If Leo buys bubbles, what is his opportunity cost?",
        options: ["The glider", "The two coins only", "The park bench"],
        answer: "The glider",
      },
    },
    {
      id: "one-more",
      kicker: "Secret two",
      title: "Should I Do One More?",
      paragraphs: [
        "After ten joyful minutes, Leo's hands were sticky and his arm felt tired. 'Should I blow another bubble?' he asked.",
        "Grandpa called this thinking at the margin. Most decisions are not forever decisions. We ask whether one more minute, one more bite, or one more turn is worth it.",
        "Leo compared the extra fun with the extra cost. This time, the sticky fingers and dry throat mattered more. He stopped without guilt, because stopping was also a good decision.",
      ],
      choice: {
        question: "When is one more turn worth taking?",
        options: ["When the extra benefit beats the extra cost", "Always", "Never"],
        answer: "When the extra benefit beats the extra cost",
      },
    },
    {
      id: "incentives",
      kicker: "Secret three",
      title: "The Secret Carrot",
      paragraphs: [
        "A dog raced past, returned a tennis ball, and earned a treat. 'That treat is an incentive,' Grandpa said. 'Rewards and costs gently steer what people choose to do.'",
        "Leo knew incentives already. Finishing his room meant fifteen minutes of cartoons. Putting a book on his pillow made bedtime reading easier to remember.",
        "A good incentive does not have to be a prize. It can be a reminder, a streak, kind praise, or making the wise choice easier to begin.",
      ],
      choice: {
        question: "Which is a helpful reading incentive?",
        options: ["A reading streak", "Hiding every book", "Skipping bedtime"],
        answer: "A reading streak",
      },
    },
    {
      id: "team-up",
      kicker: "Secret four",
      title: "The Superpower Team-Up",
      paragraphs: [
        "That afternoon Leo and Grandpa built a birdhouse. Leo painted tiny suns beautifully but kept bumping his thumb with the hammer. Grandpa hammered quickly, though his flowers looked like squashed spiders.",
        "They traded jobs. Grandpa measured and hammered while Leo painted. Economists call this comparative advantage: focus on the work where your time helps most, then team up for the rest.",
        "Soon a bright birdhouse stood in the garden. Cooperation had made something neither of them could have made as quickly alone.",
      ],
      choice: {
        question: "Why did their teamwork work?",
        options: ["Each focused on a strength", "They bought another house", "They stopped trying"],
        answer: "Each focused on a strength",
      },
    },
    {
      id: "supply-demand",
      kicker: "Secret five",
      title: "The Seesaw of the Market",
      paragraphs: [
        "Grandpa imagined one juicy apple and ten hungry kids. When many people want something scarce, they may offer more for it. When apples are everywhere and no one is hungry, the price usually falls.",
        "That push and pull is supply and demand. Supply is how much is available. Demand is how much people want it.",
        "Then Grandpa gave Leo a gentler lesson: learning useful, uncommon skills lets you offer something valuable to your community. Curiosity, kindness, coding, painting, and building can all become part of what you contribute.",
      ],
      choice: {
        question: "What can happen when an item is scarce and many people want it?",
        options: ["Its price can rise", "It becomes invisible", "Everyone stops wanting it"],
        answer: "Its price can rise",
      },
    },
    {
      id: "brave-choice",
      kicker: "Final chapter",
      title: "A Brave, Small Choice",
      paragraphs: [
        "At dinner Mom asked, 'Spaghetti or homemade pizza?' Leo felt a tiny wobble begin. Then he remembered: pizza meant giving up spaghetti tonight, not forever.",
        "He considered the trade and smiled. 'Pizza, please.' His knees stayed still. His tummy stayed calm.",
        "Leo had not discovered a magic answer for every problem. He had learned something better: name the tradeoff, take one step, notice incentives, ask for teamwork, and understand what is scarce. A thoughtful choice can still be brave even when another choice also looks good.",
      ],
      choice: {
        question: "What cured the Choice-Wobbles?",
        options: ["A simple way to think", "A magic coin", "Never choosing"],
        answer: "A simple way to think",
      },
    },
  ] satisfies StorySection[],
} satisfies Story;

const brainBackpackImages = {
  cover: "https://i.ytimg.com/vi/FICAZnAQj3U/maxresdefault.jpg",
  magic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCu2kxyrUJcos0DA3HKvajC1UZ1TNCgD3RGhzf7hPRWAwt58S9SzsCHSp6&s=10",
  rocks: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-STz_O_GCGi9prI95mQ-FkWpFiCpQaX0UXFatZsXPQ0rjsMIJlr-twJq&s=10",
  contrast: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9rGVL4_GohF-8A_tWanCOba8iJzhlaFtfmVi-f4oL9LU-es4wo4WQDEs&s=10",
  ideas: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXynYRF2dZPsbjlFD2PFk2CZhwEM6NWYD49psYlAziUmR5b7CDbUDbdxT&s=10",
  bridge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROn6ub6sMBdR0bzX0tEG56MIsRoSC2Z-vo9GzE4kUekDmUojF5oBsd3oSl&s=10",
};

export const brainBackpackEnglish = {
  slug: "brain-backpacks",
  title: "Brain Backpacks",
  subtitle: "Is yours carrying rocks or stars?",
  age: "Ages 7-11",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/app/fb37c8f53dcd7828",
  videoUrl: "https://www.youtube.com/watch?v=FICAZnAQj3U",
  cover: brainBackpackImages.cover,
  locale: "en",
  languageLabel: "English",
  alternateSlug: "brain-backpacks-zh",
  sections: [
    {
      id: "mindville",
      kicker: "Chapter one",
      title: "Two Builders in Mindville",
      paragraphs: [
        "In the bustling town of Mindville lived Leo and Mia. Leo woke before the sun, built the tallest block towers, and tried his hardest at everything. Yet his towers tumbled, his marbles never felt like enough, and every evening left him exhausted.",
        "Mia had no fancier blocks and no bigger pile of marbles. Still, when a block fell, she laughed, tried a new shape, and built an even more interesting castle.",
        "Leo wondered why equal effort seemed to lead them to different places. Mia's secret was neither luck nor greater intelligence. It was what she carried in her invisible Brain Backpack.",
      ],
      image: { src: brainBackpackImages.magic, alt: "Mia building with a bright and creative mindset", credit: "AI-generated image surfaced in the original Gemini response" },
      choice: { question: "What was different about Mia?", options: ["How she responded to setbacks", "She owned more blocks", "She never made mistakes"], answer: "How she responded to setbacks" },
    },
    {
      id: "worry-rocks",
      kicker: "Chapter two",
      title: "The Heavy Rocks of Not Enough",
      paragraphs: [
        "Every Brain Backpack has limited room for thoughts, ideas, and energy. Leo's was packed with gray worry-rocks. 'I don't have enough marbles.' Plop. 'That mountain is too tall.' Plop. 'What if I mess up?' Plop.",
        "When worry occupies all our attention, ordinary thinking can become harder. It is like trying to solve a puzzle while carrying a backpack full of bowling balls.",
        "Leo's view became narrow. With no room for curiosity or new possibilities, he could see only the rocks already weighing him down.",
      ],
      image: { src: brainBackpackImages.rocks, alt: "Leo carrying a backpack full of worry-rocks", credit: "AI-generated image surfaced in the original Gemini response" },
      choice: { question: "What do the rocks represent?", options: ["Thoughts that consume attention", "Homework books", "Things Leo collected"], answer: "Thoughts that consume attention" },
    },
    {
      id: "possibility-glasses",
      kicker: "Chapter three",
      title: "The Possibility Glasses",
      paragraphs: [
        "Mia handed Leo a pair of sparkling glasses. 'My backpack used to be heavy too,' she said. 'I learned to make room for sparkly ideas.'",
        "A Heavy Rock Mindset treats a problem as a wall: life happens to me, bad luck controls everything, and there is nowhere to go. A Sparkly Idea Mindset treats the same problem as a design question: what can I build with what I have?",
        "The glasses did not erase hard things. They helped Leo look for a bridge instead of staring only at the obstacle.",
      ],
      comparison: {
        leftTitle: "Heavy rock thought",
        rightTitle: "Sparkly idea question",
        rows: [
          ["This mountain is too big.", "How could I build a ladder?"],
          ["I do not have enough tools.", "What can I make with today's tools?"],
          ["I might fall.", "What might I learn by trying?"],
          ["Things just happen to me.", "What can I choose next?"],
        ],
      },
      choice: { question: "What do possibility glasses change?", options: ["The question Leo asks", "The size of the mountain", "The number of his blocks"], answer: "The question Leo asks" },
    },
    {
      id: "three-steps",
      kicker: "Chapter four",
      title: "Three Ways to Lighten the Load",
      paragraphs: [
        "First, become a Thought Detective. When 'I cannot do this' appears, ask whether it is completely true or simply difficult right now.",
        "Second, spend time with builders: people who learn, encourage, and exchange useful ideas. The voices around us often become the thoughts inside our backpacks.",
        "Third, build before everything feels perfect. Action creates information. Take one small step, notice what happens, then repair the wobbly tower as you go.",
      ],
      image: { src: brainBackpackImages.bridge, alt: "A child taking the first step toward a bridge", credit: "AI-generated image surfaced in the Chinese Gemini response" },
      choice: { question: "Which action creates useful new information?", options: ["Taking one small step", "Waiting for a perfect plan", "Repeating the same worry"], answer: "Taking one small step" },
    },
    {
      id: "author",
      kicker: "Final chapter",
      title: "The Author of Your Story",
      paragraphs: [
        "Leo imagined unzipping his backpack and pouring the worry-rocks into a rushing river. His shoulders felt lighter. He looked at his fallen tower and moved the red block to the bottom.",
        "A bright idea appeared: perhaps the next tower could stand twice as tall. Leo had not guaranteed success. He had made enough room to notice another move.",
        "Thoughts influence actions, actions shape results, and results can strengthen our beliefs. So pause, inspect the rocks, and choose what deserves space. What will you build today?",
      ],
      image: { src: brainBackpackImages.ideas, alt: "A backpack changing from heavy stones to bright ideas", credit: "AI-generated image surfaced in the Chinese Gemini response" },
      choice: { question: "What made room for Leo's new idea?", options: ["Questioning the worry and trying again", "Pretending failure never happened", "Getting a perfect set of blocks"], answer: "Questioning the worry and trying again" },
    },
  ],
} satisfies Story;

export const brainBackpackChinese = {
  slug: "brain-backpacks-zh",
  title: "大脑背包",
  subtitle: "你的背包里，装的是石头还是星星？",
  age: "适合 7-11 岁",
  duration: "阅读约 10 分钟",
  sourceUrl: "https://gemini.google.com/app/3761bbb80ca5d9bf",
  videoUrl: "https://www.youtube.com/watch?v=FICAZnAQj3U",
  cover: brainBackpackImages.cover,
  locale: "zh-CN",
  languageLabel: "中文",
  alternateSlug: "brain-backpacks",
  sections: [
    {
      id: "mindville",
      kicker: "第一章",
      title: "心智小镇的两个建造者",
      paragraphs: [
        "很久以前，在热闹的心智小镇上，住着两个孩子：雷欧和米娅。雷欧每天起得比太阳还早，努力搭最高的积木塔。可是塔常常倒下，玻璃珠似乎永远不够，一天下来他总是筋疲力尽。",
        "米娅没有更豪华的积木，也没有更多玻璃珠。可是一块积木掉下来时，她会笑一笑，换个形状，再造出一座更有趣的城堡。",
        "雷欧不明白，为什么同样努力，两个人的感受却完全不同。米娅的秘密不是运气，也不是比别人更聪明，而是他们隐形的“大脑背包”里装着不同的东西。",
      ],
      image: { src: brainBackpackImages.contrast, alt: "疲惫的雷欧和充满创意的米娅", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "米娅真正不同的地方是什么？", options: ["她面对挫折的方式", "她拥有更多积木", "她从不犯错"], answer: "她面对挫折的方式" },
    },
    {
      id: "worry-rocks",
      kicker: "第二章",
      title: "沉重的“不够好”石头",
      paragraphs: [
        "每个人都背着一个隐形的大脑背包，里面装着想法、点子和精力，可是空间有限。雷欧的背包塞满了灰色的焦虑石：“我的玻璃珠不够多。”扑通！“那座山太高了。”扑通！“如果我搞砸了怎么办？”扑通！",
        "当担忧占满注意力时，原本简单的思考也会变难，就像背着装满保龄球的背包参加赛跑。",
        "雷欧的视野越来越窄。背包里没有空间留给创意、梦想和新机会，他只能看见那些沉重的石头。",
      ],
      image: { src: brainBackpackImages.rocks, alt: "雷欧的大脑背包装满焦虑石", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "故事里的石头代表什么？", options: ["占据注意力的担忧", "雷欧收集的玩具", "学校的课本"], answer: "占据注意力的担忧" },
    },
    {
      id: "possibility-glasses",
      kicker: "第三章",
      title: "可能性眼镜",
      paragraphs: [
        "米娅递给雷欧一副闪闪发光的眼镜。“我的背包以前也很沉，”她说，“后来我学会清空一些石头，给好点子腾出空间。”",
        "沉重石头心态把问题看成一堵墙：坏事总发生在我身上，我什么也做不了。闪光点子心态把同一个问题变成设计题：用我现在拥有的东西，可以造出什么？",
        "眼镜没有让困难消失。它只是帮助雷欧不再一直盯着障碍，而是开始寻找一座可以跨过去的桥。",
      ],
      image: { src: brainBackpackImages.ideas, alt: "清空石头，让背包装满闪光点子", credit: "原 Gemini 回答中的 AI 生成图片" },
      comparison: {
        leftTitle: "沉重石头心态",
        rightTitle: "闪光点子心态",
        rows: [
          ["这座山太大了。", "我能不能造一把梯子？"],
          ["我没有足够的工具。", "我能用手头的工具做什么？"],
          ["我可能会摔倒。", "尝试以后我会学到什么？"],
          ["坏事总发生在我身上。", "接下来我可以选择什么？"],
        ],
      },
      choice: { question: "可能性眼镜改变了什么？", options: ["雷欧提出的问题", "山的高度", "积木的数量"], answer: "雷欧提出的问题" },
    },
    {
      id: "three-steps",
      kicker: "第四章",
      title: "清空背包的三个魔法",
      paragraphs: [
        "第一，当个思维小侦探。“我做不到”出现时，先问一问：这真的是事实，还是它现在只是有点难？",
        "第二，和建造者交朋友。去找那些热爱学习、愿意鼓励你、喜欢交流新点子的人。我们身边的声音，常常会变成背包里的想法。",
        "第三，在完全准备好之前迈出一小步。行动会带来新信息。先试一试，看看发生什么，再一边搭建，一边修补摇晃的积木塔。",
      ],
      image: { src: brainBackpackImages.bridge, alt: "勇敢迈出第一步，建造通向梦想的桥", credit: "原 Gemini 回答中的 AI 生成图片" },
      choice: { question: "什么行动能带来新的信息？", options: ["先迈出一小步", "一直等待完美计划", "重复同一个担忧"], answer: "先迈出一小步" },
    },
    {
      id: "author",
      kicker: "最后一章",
      title: "成为自己故事的作者",
      paragraphs: [
        "雷欧想象自己拉开背包，把沉重的焦虑石倒进奔腾的小河。肩膀轻松以后，他重新看着倒塌的积木塔，把红色积木移到了最下面。",
        "一个闪亮的点子跳了出来：也许下一座塔可以比原来高两倍。雷欧没有保证自己一定成功，他只是腾出了空间，看见了下一步。",
        "思考方式影响行动，行动塑造结果，结果又会加强我们相信的事情。所以，停下来看看背包里的石头，再决定什么值得留下。今天，你想建造什么奇妙的东西？",
      ],
      choice: { question: "是什么让雷欧看见了新点子？", options: ["检查担忧并再次尝试", "假装失败没有发生", "得到一套完美积木"], answer: "检查担忧并再次尝试" },
    },
  ],
} satisfies Story;

export const allStories: Story[] = [leoStory, brainBackpackEnglish, brainBackpackChinese, ...financeStoryPairs];
export const stories: Story[] = [leoStory, brainBackpackEnglish, ...featuredFinanceStories];

export function getStory(slug: string) {
  return allStories.find((story) => story.slug === slug);
}

export function getNarration(storySlug: string, sectionId?: string) {
  const story = getStory(storySlug);
  if (!story) return "";
  const sections = sectionId
    ? story.sections.filter((section) => section.id === sectionId)
    : story.sections;
  return sections.map((section) => `${section.title}. ${section.paragraphs.join(" ")}`).join(" ");
}
