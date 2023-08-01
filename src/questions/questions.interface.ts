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
