import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "@/helpers/api/middleware";

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      return res.status(200).json({});
    case "GET":
      return res.status(200).json([]);
    default:
      break;
  }
}
