export const audiobookVoices = [
  { id: "marin", label: "Marin", description: "Warm and natural", recommended: true },
  { id: "cedar", label: "Cedar", description: "Clear and balanced", recommended: true },
  { id: "coral", label: "Coral", description: "Bright and friendly" },
  { id: "alloy", label: "Alloy", description: "Neutral and versatile" },
  { id: "ash", label: "Ash", description: "Steady and conversational" },
  { id: "ballad", label: "Ballad", description: "Expressive and story-led" },
  { id: "echo", label: "Echo", description: "Smooth and measured" },
  { id: "fable", label: "Fable", description: "Animated and narrative" },
  { id: "nova", label: "Nova", description: "Energetic and lively" },
  { id: "onyx", label: "Onyx", description: "Grounded and resonant" },
  { id: "sage", label: "Sage", description: "Calm and thoughtful" },
  { id: "shimmer", label: "Shimmer", description: "Light and upbeat" },
  { id: "verse", label: "Verse", description: "Dynamic and articulate" },
] as const;

export type AudiobookVoice = (typeof audiobookVoices)[number]["id"];

export function isAudiobookVoice(value: unknown): value is AudiobookVoice {
  return typeof value === "string" && audiobookVoices.some((voice) => voice.id === value);
}
