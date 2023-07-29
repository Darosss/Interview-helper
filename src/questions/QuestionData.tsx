import { useRef } from "react";
import { QuestionsList } from "./questions.interface";

interface QuestionDataProps {
  name: string;
  item: QuestionsList;
}

export function QuestionData({ name, item }: QuestionDataProps) {
  const questionRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="questions-list prevent-select">
      <button
        className="copy-button copy-question"
        onClick={() =>
          navigator.clipboard.writeText(questionRef.current?.textContent ?? "")
        }
      >
        <img src="/copy.png" />
        QUESTION
      </button>
      <button
        className="copy-button copy-answer"
        onClick={() =>
          navigator.clipboard.writeText(answerRef.current?.textContent ?? "")
        }
      >
        <img src="/copy.png" />
        ANSWER
      </button>
      <div className="topic-name-absolute">{name}</div>
      <div>
        <div
          className="question"
          onClick={(e) => e.currentTarget.classList.toggle("show-answer")}
        >
          <div ref={questionRef}>{item.question}</div>
          <div ref={answerRef} className="answer">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
