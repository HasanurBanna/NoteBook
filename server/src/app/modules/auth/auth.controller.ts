import { Request, Response } from "express";
import { authServic } from "./auth.service";

const userRegister = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authServic.userRegister(data);

  res.status(201).json(result);
};

const userLogin = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await authServic.userLogin(data);

  res.status(200).json(result);
};

export const authController = {
  userRegister,
  userLogin,
};
