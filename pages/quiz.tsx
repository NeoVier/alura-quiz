import React, { useEffect, useState } from "react";
import db from "../db.json";
import FinishedQuizWidget from "../src/components/FinishedQuizWidget";
import LoadingWidget from "../src/components/LoadingWidget";
import Question from "../src/components/models/Question";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import QuestionWidget from "../src/components/QuizWidget";

type State =
  | { status: "loading" }
  | { status: "loaded"; questions: Question[] }
  | { status: "done" };

const QuizPage = () => {
  const [state, setState] = useState<State>({ status: "loading" });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const questions = db.questions;

      setState({ status: "loaded", questions: questions });
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const handleSubmit = (answerId: number) => {
    if (state.status !== "loaded") return;

    const question = state.questions[questionIndex];
    setResults([...results, answerId === question.answer]);

    if (questionIndex === db.questions.length - 1) {
      setState({ status: "done" });
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  let widget = <LoadingWidget />;
  switch (state.status) {
    case "loading": {
      widget = <LoadingWidget />;
      break;
    }
    case "loaded": {
      widget = (
        <QuestionWidget
          question={state.questions[questionIndex]}
          totalQuestions={db.questions.length}
          questionIndex={questionIndex}
          onSubmit={handleSubmit}
        />
      );
      break;
    }
    case "done": {
      widget = <FinishedQuizWidget results={results} />;
      break;
    }

    default: {
      <LoadingWidget />;
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {widget}
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
