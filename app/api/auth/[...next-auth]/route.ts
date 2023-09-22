
import { mongooseConnect } from "@/database/connection";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { userModel } from "@/models/user/User.Model";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await mongooseConnect();
          const isUserExists = await userModel.findOne({ email });

          if (!isUserExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });

            if (res?.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };