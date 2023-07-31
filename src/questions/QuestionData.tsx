import { useContext, useRef } from "react";
import { QuestionsList } from "./questions.interface";
import { QuestionsContext } from "./QuestionsContext";

interface QuestionDataProps {
  name: string;
  item: QuestionsList;
}

export function QuestionData({ item }: QuestionDataProps) {
  const questionRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const questionWrapperRef = useRef<HTMLDivElement>(null);

  const { updateDoneQuestions } = useContext(QuestionsContext);

  function handleDoneQuestion() {
    const questionsLocalStorage = localStorage.getItem("doneQuestions");

    if (questionsLocalStorage) {
      updateDoneQuestions([...questionsLocalStorage.split(","), item.id]);
    } else {
      updateDoneQuestions([item.id]);
    }

    localStorage.setItem(
      "doneQuestions",
      `${item.id}${questionsLocalStorage ? `,${questionsLocalStorage}` : ""}`
    );
  }

  return (
    <div className="questions-list prevent-select" ref={questionWrapperRef}>
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
      <div className="topic-name-absolute">
        <button onClick={handleDoneQuestion}>Done {item.id}</button>
      </div>
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

//TODO: add notification about add to clipboard question / answer
