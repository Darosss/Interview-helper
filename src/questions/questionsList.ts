import { nodeQuestions } from ".";
import { TopicsList } from "./questions.interface";
import { reactQuestions } from "./reactQuestions";

export const questionsList = generateJSONQuestions([
  { name: "Node.js", questions: nodeQuestions },
  { name: "React", questions: reactQuestions },
]);

function generateJSONQuestions(
  data: Pick<TopicsList, "name" | "questions">[]
): TopicsList[] {
  return data.map(({ name, questions }, idx) => ({
    id: `${name}-${idx}`,
    name: name,
    questions: questions,
  }));
}
