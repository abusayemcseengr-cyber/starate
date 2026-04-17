import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  providers: [], // Add providers with Edge compatibility here if needed, else leave empty for Node-only providers
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id && session.user) {
         session.user.id = token.id as string;
      }
      return session;
    }
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  }
} satisfies NextAuthConfig;
