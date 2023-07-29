import { QuestionsList } from "./questions.interface";

interface QuestionDataProps {
  name: string;
  item: QuestionsList;
}

export function QuestionData({ name, item }: QuestionDataProps) {
  return (
    <div className="questions-list prevent-select">
      <button className="copy-button copy-question">
        <img src="/copy.png" />
        QUESTION
      </button>
      <button className="copy-button copy-answer">
        <img src="/copy.png" />
        ANSWER
      </button>
      <div className="topic-name-absolute">{name}</div>
      <div>
        <div
          className="question"
          onClick={(e) => e.currentTarget.classList.toggle("show-answer")}
        >
          <div>{item.question}</div>

          <div className="answer">{item.answer}</div>
        </div>
      </div>
    </div>
  );
}
