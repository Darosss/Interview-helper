import { useContext } from "react";
import { QuestionData } from "./QuestionData";
import { QuestionsContext } from "./QuestionsContext";
import ReactPaginate from "react-paginate";
export function Questions() {
  const { questionsData, fetchQuestionsData, maxPages } =
    useContext(QuestionsContext);

  return (
    <>
      <div id="questions">
        <div className="questions-wrapper">
          {questionsData.map(({ name, id, question, answer }, idx) => (
            <QuestionData
              key={`${idx}-${name}`}
              name={name}
              item={{ id, question, answer }}
            />
          ))}
        </div>
        {maxPages > 1 ? (
          <div className="questions-pagination-wrapper prevent-select">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={(e) => {
                fetchQuestionsData(e.selected);
              }}
              pageRangeDisplayed={5}
              pageCount={maxPages}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              className="question-pagination"
              activeLinkClassName="pagination-active"
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
