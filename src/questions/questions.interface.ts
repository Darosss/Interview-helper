export interface QuestionsList {
  question: string;
  answer: string;
}

export interface TopicsList {
  id: string;
  name: string;
  questions: QuestionsList[];
}
