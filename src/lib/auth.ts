import { currentUser } from "@clerk/nextjs/server";

export const getUserSession = async () => {
  const user = await currentUser();
  return user;
};
