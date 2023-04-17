export type GptApiResponse = {
  edited_lines: Array<[string, number, number]>;
  score: {[key: string]: number};
  clarity: string;
  relevance: string;
  achievements: string;
  keywords: string;
  feedback: string;
}