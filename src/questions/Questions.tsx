import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { questionsList } from "./questionsList";
import { QuestionData } from "./QuestionData";
import { TopicsList } from "./questions.interface";
import { QuestionsURLParams } from "./question.enums";
import { QuestionsContext } from "./QuestionsContext";

export function Questions() {
  const [URLSearchParams] = useSearchParams();
  const { doneQuestions } = useContext(QuestionsContext);

  function getQuestions(
    topics: TopicsList[],
    topicId?: string,
    random?: boolean,
    shuffle?: boolean
  ): JSX.Element | JSX.Element[] {
    const topicsList = topics.filter(({ id }) => {
      return topicId?.split(",").includes(id);
    });

    const filteredQuestionsList = topicsList
      .map(({ questions, name }) =>
        questions
          .filter((item) => !doneQuestions.includes(item.id))
          .map((item, idx) => (
            <QuestionData key={`${idx}-${name}`} name={name} item={item} />
          ))
      )
      .filter((item) => item !== undefined)
      .flat();

    if (random) {
      return filteredQuestionsList[
        Math.floor(Math.random() * filteredQuestionsList.length)
      ];
    }
    if (shuffle) {
      return filteredQuestionsList.sort(() => Math.random() - 0.5);
    }

    if (filteredQuestionsList.length > 0) return filteredQuestionsList;
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
