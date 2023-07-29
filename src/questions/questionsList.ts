import { nodeQuestions } from ".";
import { QuestionsList } from "./questions.interface";
import { reactQuestions } from "./reactQuestions";

interface TopicsList {
  id: string;
  name: string;
  questions: QuestionsList[];
}

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
