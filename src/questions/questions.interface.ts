export interface QuestionsList {
  id: string;
  question: string[];
  answer: string[];
}

export interface TopicsList {
  id: string;
  name: string;
  questions: QuestionsList[];
}

export interface QuestionsListPaginated extends QuestionsList {
  name: string;
}

export interface GetQuestionsListPaginated {
  data: QuestionsListPaginated[];
  maxPages: number;
}
