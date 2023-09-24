import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

console.log("process.env.GOOGLE_CLIENT_ID " + process.env.GOOGLE_CLIENT_ID);
console.log("process.env.GOOGLE_CLIENT_SECRET " + process.env.GOOGLE_CLIENT_SECRET);
console.log("process.env.secret " + process.env.secret);

export default NextAuth({
  secret: process.env.secret,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});
