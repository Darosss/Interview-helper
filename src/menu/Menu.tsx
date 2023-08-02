import { Link, useSearchParams } from "react-router-dom";
import { questionsList } from "../questions/questionsList";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { QuestionsURLParams } from "../questions/question.enums";
import { ThemeSetter } from "../theme";
import { DoneQuestions } from "./DoneQuestions";

export function Menu() {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();
  const [showMenu, setShowMenu] = useState(true);
  const allTopics = useMemo(() => questionsList.map((value) => value.id), []);

  function handleRandomAll() {
    setURLSearchParams((prevParams) => {
      prevParams.set(QuestionsURLParams.TOPIC_ID, allTopics.join(","));
      prevParams.set(QuestionsURLParams.RANDOM, "true");
      return prevParams;
    });
  }

  function handleRandomFromChoosen() {
    if (!URLSearchParams.get(QuestionsURLParams.TOPIC_ID)) {
      toast.info("Choose at least one topic first", { autoClose: 5000 }); //alert
      return;
    }

    setURLSearchParams((prevParams) => {
      prevParams.set(QuestionsURLParams.RANDOM, "true");
      return prevParams;
    });
  }

  function handleOnShuffleQuestions() {
    if (!URLSearchParams.get(QuestionsURLParams.TOPIC_ID)) {
      toast.info("Choose at least one topic first", { autoClose: 5000 }); //alert
      return;
    }

    setURLSearchParams((prevParams) => {
      prevParams.set(QuestionsURLParams.SHUFFLE, "true");
      return prevParams;
    });
  }

  function handleParamsOnClick(newTopic: string) {
    const topicsIdsParams = URLSearchParams.get(
      QuestionsURLParams.TOPIC_ID
    )?.split(",");

    if (!topicsIdsParams) return newTopic;

    if (topicsIdsParams.includes(newTopic)) {
      return topicsIdsParams.filter((id) => id !== newTopic);
    }

    return [...topicsIdsParams, newTopic];
  }

  if (!showMenu)
    return (
      <div className="menu-wrapper-hidden">
        <button onClick={() => setShowMenu(true)}> ^ </button>
      </div>
    );

  return (
    <>
      <div id="menu" className="menu-wrapper">
        <div className="menu-button-hide">
          <button onClick={() => setShowMenu(false)}> ^ </button>
        </div>
        <div className="menu-head">
          <h1>
            <Link to="/">Interview helper</Link>
          </h1>
          <div className="change-theme">
            <ThemeSetter />
          </div>
          <div className="menu-head-buttons">
            <button onClick={handleRandomFromChoosen}> Random question </button>
            <button
              className={`${
                URLSearchParams.get(QuestionsURLParams.RANDOM) === "true"
                  ? "active"
                  : ""
              }`}
              onClick={handleRandomAll}
            >
              Random from all
            </button>

            <button onClick={handleOnShuffleQuestions}>Shuffle</button>
            <button onClick={() => setURLSearchParams()}>Clear</button>
            <DoneQuestions />
          </div>
        </div>
        <div className="menu-buttons">
          <Link
            className="menu-button "
            to={`/questions?${QuestionsURLParams.TOPIC_ID}=${allTopics}`}
          >
            All
          </Link>
          {questionsList.map((topic, idx) => (
            <Link
              key={idx}
              className={`menu-button ${
                URLSearchParams.get(QuestionsURLParams.TOPIC_ID)?.includes(
                  topic.id
                )
                  ? "active"
                  : ""
              }`}
              to={`/questions?${
                QuestionsURLParams.TOPIC_ID
              }=${handleParamsOnClick(topic.id)}`}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
