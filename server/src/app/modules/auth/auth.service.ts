import { prisma } from "../../../lib/prisma";
import { IUserlogin, IUserReg } from "./auth.interface";
import bcrypt from "bcryptjs";

const userRegister = async (data: IUserReg) => {
  if (!data.name || !data.email || !data.password) {
    throw new Error("Please all field Required");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (existingUser) {
    throw new Error("Account Alreday Register. Please Login-");
  }

  const hashPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashPassword,
    },
  });

  return user;
};

const userLogin = async (data: IUserlogin) => {
  if (!data.email || !data.password) {
    throw new Error("Please all field required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!user) {
    throw new Error("Invalid email");
  }

  const isPsswordValid = await bcrypt.compare(data.password, user.password);
  if (!isPsswordValid) {
    throw new Error("Invalid password");
  }


  return user;
};

export const authServic = {
  userRegister,
  userLogin,
};
