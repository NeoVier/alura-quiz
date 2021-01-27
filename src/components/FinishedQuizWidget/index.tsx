import Widget from "../Widget";

type Props = {
  rightQuestions: number;
};

const FinishedQuizWidget = ({ rightQuestions }: Props) => {
  return (
    <Widget>
      <Widget.Header>
        <h3>Congratulations!</h3>
      </Widget.Header>

      <Widget.Content>
        <h2>You're all done!</h2>

        <p>You got {rightQuestions} questions right!</p>
      </Widget.Content>
    </Widget>
  );
};

export default FinishedQuizWidget;
