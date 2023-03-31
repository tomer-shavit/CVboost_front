export type GptApiResponse = {
  score: number;
  edited_lines: Array<[string, number, number]>;
  feedback: string;
}