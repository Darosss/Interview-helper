import React from "react";
import { useSearchParams } from "react-router-dom";
import { questionsList } from "./questionsList";
import { QuestionData } from "./QuestionData";
import { TopicsList } from "./questions.interface";
import { QuestionsURLParams } from "./question.enums";

export function Questions() {
  const [URLSearchParams] = useSearchParams();

  function getQuestions(
    topics: TopicsList[],
    topicId?: string,
    random?: boolean,
    shuffle?: boolean
  ): JSX.Element | JSX.Element[] {
    const questions = topics
      .filter(({ id }) => {
        return topicId?.split(",").includes(id);
      })
      ?.map(({ questions, name }) =>
        questions.map((item, idx) => (
          <QuestionData key={idx} name={name} item={item} />
        ))
      )
      .flat();

    if (random) {
      const flatQuestions = questions;
      return flatQuestions[Math.floor(Math.random() * flatQuestions.length)];
    }
    if (shuffle) {
      return questions.sort(() => Math.random() - 0.5);
    }

    if (questions.length > 0) return questions;
    return <>Choose topics to get questions </>;
  }

  return (
    <>
      <div id="questions">
        <div className="questions-wrapper">
          {getQuestions(
            questionsList,
            URLSearchParams.get(QuestionsURLParams.TOPIC_ID) ?? "",
            !!URLSearchParams.get(QuestionsURLParams.RANDOM),
            !!URLSearchParams.get(QuestionsURLParams.SHUFFLE)
          )}
        </div>
      </div>
    </>
  );
}
