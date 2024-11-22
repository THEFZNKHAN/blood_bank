import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export const authenticateUser = (req: NextRequest): string => {
  const { userId } = getAuth(req);
  if (!userId) throw new Error("User is Unauthenticated!!");
  return userId;
};
