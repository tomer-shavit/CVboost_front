import NextAuth, { SessionStrategy } from "next-auth";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../prisma/client";
import planetScaleAdapter from "@/adapters/planetScale";

export const authOptions = {
  adapter: planetScaleAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "MISSING_ID",
      clientSecret: process.env.GOOGLE_SECRET ?? "MISSING_SECRET",
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (session?.user) {
        session.user.id = token.sub ?? "NO_TOKEN_SUB";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
};

export default NextAuth(authOptions);
