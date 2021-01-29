import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import db from "../db.json";
import Button from "../src/components/Button";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import Input from "../src/components/Input";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import { quizLinkToName, toLocalLink } from "../src/utils/dbLinks";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const otherQuizzes = db.external;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Elm</title>
      </Head>

      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ duration: 0.3, delay: 0 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <h4 style={{ fontWeight: "normal" }}>
              Enter your name so you can play with other people:
            </h4>
            <form onSubmit={handleSubmit}>
              <Input
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                value={name}
                name="username"
              />
              <Button type="submit" disabled={!name}>
                Play
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ duration: 0.3, delay: 0.1 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Other quizzes</h1>

            <p>Check out some other quizzes made during the event:</p>

            <ul>
              {otherQuizzes.map((quizLink, index) => (
                <li key={`quiz__${index}`}>
                  <Link href={toLocalLink(quizLink)}>
                    <Widget.Topic>{quizLinkToName(quizLink)}</Widget.Topic>
                  </Link>
                </li>
              ))}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer
          as={motion.footer}
          transition={{ duration: 0.3, delay: 0.2 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/NeoVier/alura-quiz" />
    </QuizBackground>
  );
}
