import { useRouter } from "next/router";

const QuizPage = () => {
  const router = useRouter();
  return <div>Hello {router.query.name}</div>;
};

export default QuizPage;
