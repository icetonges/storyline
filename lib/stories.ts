export type StorySection = {
  id: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; credit: string };
  choice?: { question: string; options: string[]; answer: string };
};

export const leoStory = {
  slug: "leo-five-secrets",
  title: "Leo's Five Secrets",
  subtitle: "A small adventure about big choices",
  age: "Ages 7-11",
  duration: "10 min read",
  sourceUrl: "https://gemini.google.com/share/3bc84977e299",
  videoUrl: "https://www.youtube.com/watch?v=ofAgMbcoSZc",
  cover: "https://i.ytimg.com/vi/ofAgMbcoSZc/maxresdefault.jpg",
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
};

export const stories = [leoStory];

export function getNarration(sectionId?: string) {
  const sections = sectionId
    ? leoStory.sections.filter((section) => section.id === sectionId)
    : leoStory.sections;
  return sections.map((section) => `${section.title}. ${section.paragraphs.join(" ")}`).join(" ");
}
