import React from "react";
import db from "../db.json";
import QuizPage from "../src/screens/QuizPage";

const OwnQuiz = () => <QuizPage questions={db.questions} bg={db.bg} />;

export default OwnQuiz;
