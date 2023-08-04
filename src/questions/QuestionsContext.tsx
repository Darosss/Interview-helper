import React, { useEffect, useState } from "react";
import { LocalStorageNames } from "../localstorage.enum";
import { QuestionsListPaginated } from "./questions.interface";
import { QuestionsURLParams } from "./question.enums";
import { useSearchParams } from "react-router-dom";
import { getQuestionsListPaginated } from "./questionsList";

interface QuestionsContextData {
  doneQuestions: string[];
  updateDoneQuestions: (value: string[]) => void;
  questionsData: QuestionsListPaginated[];
  fetchQuestionsData: (page?: number) => Promise<void>;
  maxPages: number;
}

const initialQuestionsState = {
  doneQuestions:
    localStorage.getItem(LocalStorageNames.doneQuestions)?.split(",") || [],
  updateDoneQuestions: () => {},
  questionsData: [],
  fetchQuestionsData: async () => {},
  maxPages: 0,
};

export const QuestionsContext = React.createContext<QuestionsContextData>(
  initialQuestionsState
);

export function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [urlSearchParams] = useSearchParams();
  const [doneQuestions, setQuestions] = useState<string[]>(
    initialQuestionsState.doneQuestions
  );
  const [limit] = useState(10);
  const [maxPages, setMaxPaxes] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [questionsData, setQuestionsData] = useState<QuestionsListPaginated[]>(
    []
  );

  useEffect(() => {
    localStorage.setItem(
      LocalStorageNames.doneQuestions,
      doneQuestions.join(",")
    );

    fetchQuestionsData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doneQuestions]);

  async function fetchQuestionsData(page?: number) {
    const dataRes = getQuestionsListPaginated(
      urlSearchParams.get(QuestionsURLParams.TOPIC_ID)?.split(",") ?? [],
      doneQuestions,
      !!urlSearchParams.get(QuestionsURLParams.RANDOM),
      !!urlSearchParams.get(QuestionsURLParams.SHUFFLE),
      { limit, page: page ?? currentPage }
    );

    if (page) setCurrentPage(page);
    setMaxPaxes(dataRes.maxPages);
    setQuestionsData(dataRes.data);
  }

  useEffect(() => {
    fetchQuestionsData(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearchParams]);

  function updateDoneQuestions(newDoneQuestions: string[]) {
    setQuestions([...newDoneQuestions]); // Create a new array with the updated values
  }

  return (
    <QuestionsContext.Provider
      value={{
        doneQuestions,
        updateDoneQuestions,
        questionsData,
        fetchQuestionsData,
        maxPages,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
