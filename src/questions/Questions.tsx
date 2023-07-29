import React from "react";
import { useSearchParams } from "react-router-dom";
import { questionsList } from "./questionsList";
import { QuestionData } from "./QuestionData";

export function Questions() {
  const [URLSearchParams] = useSearchParams();

  function getQuestions(random?: boolean, shuffle?: boolean) {
    const questions = questionsList
      .filter(({ id }) => {
        return URLSearchParams.get("topicId")?.split(",").includes(id);
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
      return questions.sort(() => Math.random() - 0.5);
    }

    return questions;
  }

  return (
    <>
      <div id="questions">
        <div className="questions-wrapper">
          {URLSearchParams.get("topicId")
            ? getQuestions(
                !!URLSearchParams.get("random"),
                !!URLSearchParams.get("shuffle")
              )
            : null}
        </div>
      </div>
    </>
  );
}
// const randomElement = array[Math.floor(Math.random() * array.length)];
