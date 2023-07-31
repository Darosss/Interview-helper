import { QuestionsList } from "./questions.interface";

export function generate_QA_LIST(
  idPrefix: string,
  data: Pick<QuestionsList, "question" | "answer">[]
): QuestionsList[] {
  return data.map(({ question, answer }, idx) => ({
    id: `${idPrefix}-${idx}`,
    question: question,
    answer: answer,
  }));
}
