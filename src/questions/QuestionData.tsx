import { useContext, useRef } from "react";
import { QuestionsList } from "./questions.interface";
import { QuestionsContext } from "./QuestionsContext";
import { LocalStorageNames } from "../localstorage.enum";
import { QuestionsLegendHTMLElements } from "./question.enums";

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
    const questionsLocalStorage = localStorage.getItem(
      LocalStorageNames.doneQuestions
    );

    if (questionsLocalStorage) {
      updateDoneQuestions([...questionsLocalStorage.split(","), item.id]);
    } else {
      updateDoneQuestions([item.id]);
    }

    localStorage.setItem(
      LocalStorageNames.doneQuestions,
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
        <div className="question">
          <div
            ref={questionRef}
            onClick={() => answerRef.current?.classList.toggle("show-answer")}
          >
            {item.question.map((question, idx) => (
              <div key={idx}>{question}</div>
            ))}
          </div>
          <div ref={answerRef} className="answer">
            {item.answer.map((answer, idx) => (
              <div key={idx}>
                {answer.startsWith(QuestionsLegendHTMLElements.img) ? (
                  <img
                    src={answer
                      .slice(QuestionsLegendHTMLElements.img.length)
                      .trim()}
                    alt={answer}
                  />
                ) : (
                  answer
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//TODO: add notification about add to clipboard question / answer
