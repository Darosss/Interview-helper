import React, { useEffect, useState } from "react";
import { LocalStorageNames } from "../localstorage.enum";

interface QuestionsContextData {
  doneQuestions: string[];
  updateDoneQuestions: (value: string[]) => void;
}

const initialQuestionsState = {
  doneQuestions:
    localStorage.getItem(LocalStorageNames.doneQuestions)?.split(",") || [],
  updateDoneQuestions: () => {},
};

export const QuestionsContext = React.createContext<QuestionsContextData>(
  initialQuestionsState
);

export function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [doneQuestions, setQuestions] = useState<string[]>(
    initialQuestionsState.doneQuestions
  );

  useEffect(() => {
    localStorage.setItem(
      LocalStorageNames.doneQuestions,
      doneQuestions.join(",")
    );
  }, [doneQuestions]);

  function updateDoneQuestions(newDoneQuestions: string[]) {
    setQuestions([...newDoneQuestions]); // Create a new array with the updated values
  }

  return (
    <QuestionsContext.Provider value={{ doneQuestions, updateDoneQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
}