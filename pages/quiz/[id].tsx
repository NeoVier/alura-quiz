import { GetServerSideProps } from "next";
import { ThemeProvider } from "styled-components";
import QuizPage from "../../src/screens/QuizPage";
import Db from "../../src/types/db";
import { localLinkToExternalLink } from "../../src/utils/dbLinks";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const externalDb = await fetch(
    localLinkToExternalLink(context.query.id as string)
  ).then(async (response) => await response.json());

  return {
    props: {
      db: externalDb,
    },
  };
};

type Props = {
  db: Db;
};

const ExternalQuiz = ({ db }: Props) => {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage questions={db.questions} bg={db.bg} />
    </ThemeProvider>
  );
};

export default ExternalQuiz;
