import Question from "../components/models/Question";

type Db = {
  bg: string;
  title: string;
  description: string;
  questions: Question[];
  external: string[];
  theme: {
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
  };
};

export default Db;
