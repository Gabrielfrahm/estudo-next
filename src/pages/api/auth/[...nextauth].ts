import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { query } from "faunadb";
import { fauna } from "../../../services/faunadb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET_ID,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
  ],
  jwt: {
    secret: process.env.SIGNIN_KEY,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { email: userEmail } = user;
      try {
        await fauna.query(
          query.Create(query.Collection("users"), { data: { userEmail } })
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
