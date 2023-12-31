import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../questions/QuestionsContext";
import { toast } from "react-toastify";
import { LocalStorageNames } from "../localstorage.enum";

export function DoneQuestions() {
  const { doneQuestions, updateDoneQuestions } = useContext(QuestionsContext);
  const [show, setShow] = useState(false);

  function handleShowHide() {
    if (doneQuestions.filter((item) => item).length > 0) return setShow(!show);

    toast.info("You have not done any questions");
  }

  function handleUnDoneQuestion(id: string) {
    const questionsLocalStorage = localStorage.getItem(
      LocalStorageNames.doneQuestions
    );
    if (!questionsLocalStorage) return;

    const newDoneQuestions = questionsLocalStorage
      .split(",")
      .filter((localItem) => localItem !== id);

    updateDoneQuestions(newDoneQuestions);

    localStorage.setItem(
      LocalStorageNames.doneQuestions,
      newDoneQuestions.join(",")
    );
  }

  function handleCloseOnNoDoneQuestions() {
    if (doneQuestions.length <= 0) {
      toast.info("No questions to undone");
      setShow(false);
    }
  }

  function handleUndoneAll() {
    if (
      window.confirm("Warning! \n Do your really want to undone all questions?")
    ) {
      updateDoneQuestions([]);
    }
  }

  useEffect(() => {
    if (show) handleCloseOnNoDoneQuestions();
  }, [doneQuestions]);

  return (
    <>
      <div className="show-done-questions-button">
        <button onClick={handleShowHide}>Show done</button>
        <div className={`done-questions-menu ${show ? "" : "hidden"}`}>
          <div className="close-button" onClick={() => setShow(false)}>
            <button> X </button>
          </div>
          <button className="undone-all-button" onClick={handleUndoneAll}>
            Undone all
          </button>
          {doneQuestions.map((question, idx) => (
            <button key={idx} onClick={() => handleUnDoneQuestion(question)}>
              {question}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
