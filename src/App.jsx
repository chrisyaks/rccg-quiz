import { useState } from "react";
import SelectionPage from "./components/SelectionPage";
import QuizPage from "./components/QuizPage";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  // activeQuestion: null = show selection page, number = show that question
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Persist the set of attempted question indices across refreshes
  const [takenQuestions, setTakenQuestions] = useLocalStorage("quiz_taken", []);

  function handleSelectQuestion(index) {
    // Mark as taken if not already
    if (!takenQuestions.includes(index)) {
      setTakenQuestions((prev) => [...prev, index]);
    }
    setActiveQuestion(index);
  }

  function handleBack() {
    setActiveQuestion(null);
  }

  function handleResetProgress() {
    setTakenQuestions([]);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d" }}>
      {activeQuestion === null ? (
        <SelectionPage
          onSelect={handleSelectQuestion}
          takenQuestions={takenQuestions}
          onResetProgress={handleResetProgress}
        />
      ) : (
        <QuizPage
          questionIndex={activeQuestion}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
