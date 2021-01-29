export const quizLinkToName = (quizLink: string) => {
  const [quiz, author] = quizLink
    .replace(/(http(s)?:)?\//g, "")
    .replace(/\.vercel.*/, "")
    .split(".");
  return `${quiz}/${author}`;
};

export const toApiQuizLink = (quizLink: string) => {
  const endsWithSlash = quizLink.endsWith("/");
  return `${quizLink}${endsWithSlash ? "" : "/"}api/db`;
};

export const toLocalLink = (quizLink: string) => {
  const [quiz, author] = quizLinkToName(quizLink).split("/");

  return `/quiz/${quiz}___${author}`;
};

export const localLinkToExternalLink = (localLink: string) => {
  const [quiz, author] = localLink.replace(/.*\/quiz\//, "").split("___");

  return toApiQuizLink(`https://${quiz}.${author}.vercel.app`);
};
