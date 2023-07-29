import { Link, useSearchParams } from "react-router-dom";
import { questionsList } from "../questions/questionsList";
import { useMemo } from "react";
import { toast } from "react-toastify";

export function Menu() {
  const [URLSearchParams, setURLSearchParams] = useSearchParams();
  const allTopics = useMemo(() => questionsList.map((value) => value.id), []);

  function handleRandomAll() {
    setURLSearchParams((prevParams) => {
      prevParams.set("topicId", allTopics.join(","));
      prevParams.set("random", "true");
      return prevParams;
    });
  }

  function handleRandomFromChoosen() {
    if (!URLSearchParams.get("topicId")) {
      toast.info("Choose at least one topic first", { autoClose: 5000 }); //alert
      return;
    }

    setURLSearchParams((prevParams) => {
      prevParams.set("random", "true");
      return prevParams;
    });
  }

  function handleOnShuffleQuestions() {
    if (!URLSearchParams.get("topicId")) {
      toast.info("Choose at least one topic first", { autoClose: 5000 }); //alert
      return;
    }

    setURLSearchParams((prevParams) => {
      prevParams.set("shuffle", "true");
      return prevParams;
    });
  }

  return (
    <>
      <div id="menu">
        <div className="menu-head">
          <h1> Interview helper </h1>
          <div className="menu-head-buttons">
            <button onClick={handleRandomFromChoosen}> Random question </button>
            <button
              className={`${
                URLSearchParams.get("random") === "true" ? "active" : ""
              }`}
              onClick={handleRandomAll}
            >
              Random from all
            </button>

            <button onClick={handleOnShuffleQuestions}>Shuffle</button>
            <button onClick={() => setURLSearchParams()}>Clear</button>
          </div>
        </div>
        <div className="menu-buttons">
          <Link className="menu-button " to={`/questions?topicId=${allTopics}`}>
            All
          </Link>
          {questionsList.map((topic, idx) => (
            <Link
              key={idx}
              className={`menu-button ${
                URLSearchParams.get("topicId")?.includes(topic.id)
                  ? "active"
                  : ""
              }`}
              to={`/questions?topicId=${topic.id}`}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
