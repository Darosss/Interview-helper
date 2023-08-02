import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getQuestionsListPaginated } from "./questionsList";
import { QuestionData } from "./QuestionData";
import { QuestionsURLParams } from "./question.enums";
import { QuestionsContext } from "./QuestionsContext";
import { QuestionsListPaginated } from "./questions.interface";
import ReactPaginate from "react-paginate";

export function Questions() {
  const [URLSearchParams] = useSearchParams();
  const { doneQuestions } = useContext(QuestionsContext);
  const [maxPages, setMaxPaxes] = useState(0);
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  const [questionData, setQuestionData] = useState<QuestionsListPaginated[]>(
    []
  );

  async function fetchData() {
    const dataRes = getQuestionsListPaginated(
      URLSearchParams.get(QuestionsURLParams.TOPIC_ID)?.split(",") ?? [],
      doneQuestions,
      !!URLSearchParams.get(QuestionsURLParams.RANDOM),
      !!URLSearchParams.get(QuestionsURLParams.SHUFFLE),
      { limit, page }
    );

    setMaxPaxes(dataRes.maxPages);
    setQuestionData(dataRes.data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div id="questions">
        <div className="questions-wrapper">
          {questionData.map(({ name, id, question, answer }, idx) => (
            <QuestionData
              key={`${idx}-${name}`}
              name={name}
              item={{ id, question, answer }}
            />
          ))}
        </div>
        <div className="questions-pagination-wrapper prevent-select">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(e) => setPage(e.selected)}
            pageRangeDisplayed={5}
            pageCount={maxPages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="question-pagination"
            activeLinkClassName="pagination-active"
          />
        </div>
      </div>
    </>
  );
}
