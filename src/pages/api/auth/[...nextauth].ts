import NextAuth from "next-auth";
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
};

export default NextAuth(authOptions);
