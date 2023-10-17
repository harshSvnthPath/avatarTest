import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, User } from "@/helpers/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const customer = await User.create({ ...req.body });
      res.status(201).json({ success: true, data: customer });
      break;
    default:
      break;
  }
}
