import React from "react";
import { useSearchParams } from "react-router-dom";
import { questionsList } from "./questionsList";
import { QuestionData } from "./QuestionData";
import { TopicsList } from "./questions.interface";

export function Questions() {
  const [URLSearchParams] = useSearchParams();

  function getQuestions(
    topics: TopicsList[],
    topicId?: string,
    random?: boolean,
    shuffle?: boolean
  ) {
    const questions = topics
      .filter(({ id }) => {
        return topicId?.split(",").includes(id);
      })
      ?.map(({ questions, name }) =>
        questions.map((item, idx) => (
          <QuestionData key={idx} name={name} item={item} />
        ))
      );

    if (random) {
      const flatQuestions = questions.flat();
      return flatQuestions[Math.floor(Math.random() * flatQuestions.length)];
    }
    if (shuffle) {
      return questions.flat().sort(() => Math.random() - 0.5);
    }

    return questions;
  }

  return (
    <>
      <div id="questions">
        <div className="questions-wrapper">
          {URLSearchParams.get("topicId")
            ? getQuestions(
                questionsList,
                URLSearchParams.get("topicId") ?? "",
                !!URLSearchParams.get("random"),
                !!URLSearchParams.get("shuffle")
              )
            : "Choose topics to get questions"}
        </div>
      </div>
    </>
  );
}
