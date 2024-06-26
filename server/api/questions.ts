import { getXataClient } from "~/src/xata";
const xata = getXataClient();

export default defineEventHandler(async (event) => {
  const questions = await xata.db.questions.getMany();

  return questions;
});
