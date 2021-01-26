import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import db from "../db.json";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Widget, { WidgetContent, WidgetHeader } from "../src/components/Widget";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

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
        <Widget>
          <WidgetHeader>
            <h1>{db.title}</h1>
          </WidgetHeader>
          <WidgetContent>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <button type="submit" disabled={!name}>
                Play
              </button>
            </form>
          </WidgetContent>
        </Widget>

        <Widget>
          <WidgetContent>
            <h1>Other quizzes</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </WidgetContent>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/NeoVier/alura-quiz" />
    </QuizBackground>
  );
}
