import { getXataClient } from "~/src/xata";

const xata = getXataClient();

export default defineEventHandler(async (event) => {
  const answers = await xata.db.answers.select(["*"]).getMany();
  return answers;
});
