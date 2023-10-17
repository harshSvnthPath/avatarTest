import NextAuth, {
  DefaultUser,
  IUser,
  NextAuthOptions,
  Session,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT_SECRET_KEY } from "../../../../global-config";
import { dbConnect, User } from "@/helpers/db";

declare module "next-auth" {
  interface IUser extends DefaultUser {
    name: string;
    email: string;
  }

  interface User extends IUser {}

  interface Session {}
}

export const authOptions: NextAuthOptions = {
  secret: JWT_SECRET_KEY,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, _req) => {
        if (credentials) {
          await dbConnect();

          const { email, password } = credentials;

          const user = await User.findOne({
            email: email,
          }).select("+password");

          if (!user) throw "Username or password is incorrect";

          const pwValid = await user.comparePassword(password);

          if (!pwValid) throw "Username or password is incorrect";

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    session: async ({ session, token, user }): Promise<Session> => {
      return Promise.resolve(session);
    },
  },
  pages: {},
};

export default NextAuth(authOptions);
