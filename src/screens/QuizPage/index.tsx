import React, { useEffect, useState } from "react";
import FinishedQuizWidget from "../../components/FinishedQuizWidget";
import LoadingWidget from "../../components/LoadingWidget";
import Question from "../../components/models/Question";
import QuizBackground from "../../components/QuizBackground";
import QuizContainer from "../../components/QuizContainer";
import QuizLogo from "../../components/QuizLogo";
import QuestionWidget from "../../components/QuizWidget";

type Props = {
  questions: Question[];
  bg: string;
};

type State =
  | { status: "loading" }
  | { status: "loaded"; questions: Question[] }
  | { status: "done" };

const QuizPage = ({ questions, bg }: Props) => {
  const [state, setState] = useState<State>({ status: "loading" });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
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

    if (questionIndex === questions.length - 1) {
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
          totalQuestions={questions.length}
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
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />

        {widget}
      </QuizContainer>
    </QuizBackground>
  );
};

export default QuizPage;
