type EditedLine = {
  text: string;
  start: number[];
  end: number[];
}
export type Score = {
  clarity: number;
  relevance: number;
  achievements: number;
  keywords: number;
};

export type GptApiResponse = {
  edited_lines: EditedLine[];
  score: Score;
  clarity: string;
  relevance: string;
  achievements: string;
  keywords: string;
  feedback: string;
};