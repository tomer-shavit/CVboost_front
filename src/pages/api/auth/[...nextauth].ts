import NextAuth, { SessionStrategy } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../prisma/client";
import planetScaleAdapter from "@/adapters/planetScale";

const test = () => {
  console.log(
    "GOOGLE_ID: ",
    process.env.GOOGLE_ID,
    "GOOGLE_SECRET: ",
    process.env.GOOGLE_SECRET
  );
  return process.env.NEXTAUTH_SECRET;
};
export const authOptions = {
  adapter: planetScaleAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // callbacks: {
  //   session: async ({ session, token }: { session: Session; token: JWT }) => {
  //     if (session?.user) {
  //       session.user.id = token.sub ?? "NO_TOKEN_SUB";
  //     }
  //     return session;
  //   },
  // },
  // session: {
  //   strategy: "jwt" as SessionStrategy,
  // },
  secret: test(),
};

export default NextAuth(authOptions);
