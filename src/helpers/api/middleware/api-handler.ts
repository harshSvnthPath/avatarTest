import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "./error-handler";

export { apiHandler };

function apiHandler(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: any) {
      errorHandler(err, res);
    }
  };
}
