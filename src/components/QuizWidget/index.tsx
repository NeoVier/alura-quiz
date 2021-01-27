import React, { useState } from "react";
import Button from "../Button";
import Question from "../models/Question";
import Widget from "../Widget";

type Props = {
  question: Question;
  totalQuestions: number;
  questionIndex: number;
  onSubmit: (answerId: number) => void;
};

const QuestionWidget = ({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}: Props) => {
  const [answerId, setAnswerId] = useState<number | undefined>(undefined);

  const questionId = `question_${questionIndex}`;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setAnswerId(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (answerId !== undefined) {
      onSubmit(answerId);
    }
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>
          Question {questionIndex + 1} of {totalQuestions}
        </h3>
      </Widget.Header>

      <img
        alt="Description"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, index) => (
            <Widget.Topic as="label" key={index}>
              <input
                type="radio"
                id={`${index}`}
                name={questionId}
                value={index}
                checked={index === answerId}
                onChange={handleRadioChange}
              />
              {alternative}
            </Widget.Topic>
          ))}

          <Button type="submit" disabled={answerId === undefined}>
            Submit
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
