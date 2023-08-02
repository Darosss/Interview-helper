import { GetQuestionsListPaginated, TopicsList } from "./questions.interface";
import { nodeQuestions, reactQuestions } from "./interviewQuestionsData";

export function getQuestionsListPaginated(
  topicsIds: string[],
  doneQuestionsIds: string[],
  random: boolean,
  shuffle: boolean,
  { limit, page }: { limit: number; page: number }
): GetQuestionsListPaginated {
  const choosenTopics = questionsList.filter(({ id }) => {
    return topicsIds.includes(id);
  });

  let filteredQuestionsList = choosenTopics
    .map(({ questions, name }) =>
      questions
        .filter((item) => !doneQuestionsIds.includes(item.id))
        .map((item) => ({ name, ...item }))
    )
    .flat();

  if (shuffle) {
    filteredQuestionsList = filteredQuestionsList.sort(
      () => Math.random() - 0.5
    );
  }

  if (random) {
    filteredQuestionsList = [
      filteredQuestionsList[
        Math.floor(Math.random() * filteredQuestionsList.length)
      ],
    ];
  }

  return {
    data: filteredQuestionsList.splice(page * limit, limit),
    maxPages: Math.ceil(filteredQuestionsList.length / limit) + 1,
  };
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
