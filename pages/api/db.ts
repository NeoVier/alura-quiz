import { NextApiRequest, NextApiResponse } from "next";
import db from "../../db.json";

export default (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "OPTIONS") {
    response.status(200).end();
    return;
  }

  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

  response.json(db);
};
