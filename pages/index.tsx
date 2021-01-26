import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import db from "../db.json";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";

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

const NameInput = styled.input`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  font-weight: bold;
  border: none;
  line-height: 16px;
  cursor: pointer;

  &:disabled {
    background: #979797;
    cursor: default;
  }
`;

const OtherQuizBox = styled.li`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 5px 0;

  a {
    padding: 10px;
    text-decoration: none;
    color: inherit;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const otherQuizzes = [
    "NeoVier/alura-quiz",
    "NeoVier/alura-quiz",
    "NeoVier/alura-quiz",
  ];

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
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <h4 style={{ fontWeight: "normal" }}>
              Enter your name so you can play with other people:
            </h4>
            <form onSubmit={handleSubmit}>
              <NameInput
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
              <SubmitButton type="submit" disabled={!name}>
                Play
              </SubmitButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Other quizzes</h1>

            <p>Check out some other quizzes made during the event:</p>

            <ul>
              {otherQuizzes.map((name, index) => (
                <OtherQuizBox key={index}>
                  <a href={`https://github.com/${name}`}>{name}</a>
                </OtherQuizBox>
              ))}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/NeoVier/alura-quiz" />
    </QuizBackground>
  );
}
