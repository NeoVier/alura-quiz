import { useRouter } from "next/router";
import Widget from "../Widget";

type Props = {
  results: boolean[];
};

const FinishedQuizWidget = ({ results }: Props) => {
  const router = useRouter();
  const name = router.query.name;
  return (
    <Widget>
      <Widget.Header>
        <h3>Congratulations, {name}!</h3>
      </Widget.Header>

      <Widget.Content>
        <h2>You're all done!</h2>

        <p>
          You got {results.reduce((acc, result) => (result ? acc + 1 : acc), 0)}{" "}
          questions right!
        </p>

        <ul>
          {results.map((result, index) => (
            <li key={index}>
              Question #{index + 1}: {result ? "Right" : "Wrong"}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

export default FinishedQuizWidget;
