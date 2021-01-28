import React, { useState } from "react";
import AlternativesForm from "../AlternativesForm";
import Button from "../Button";
import Question from "../models/Question";
import Widget from "../Widget";

type Props = {
  question: Question;
  totalQuestions: number;
  questionIndex: number;
  onSubmit: (answerId: number) => void;
};

type SubmittedStatus =
  | { submitted: false }
  | { submitted: true; guessId: number };

const QuestionWidget = ({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}: Props) => {
  const [answerId, setAnswerId] = useState<number | undefined>(undefined);
  const [submittedStatus, setSubmittedStatus] = useState<SubmittedStatus>({
    submitted: false,
  });

  const questionId = `question_${questionIndex}`;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerId(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (answerId !== undefined) {
      setSubmittedStatus({ submitted: true, guessId: answerId });
      setTimeout(() => {
        setSubmittedStatus({ submitted: false });
        setAnswerId(undefined);
        onSubmit(answerId);
      }, 1 * 1000);
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

        <AlternativesForm onSubmit={handleSubmit}>
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const selected = index === answerId;
            let alternativeStatus = undefined;
            if (submittedStatus.submitted) {
              alternativeStatus =
                submittedStatus.guessId === question.answer
                  ? "SUCCESS"
                  : "ERROR";
            }

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={selected}
                data-status={alternativeStatus}
              >
                <input
                  type="radio"
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  value={index}
                  checked={selected}
                  onChange={handleRadioChange}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={answerId === undefined}>
            Submit
          </Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
