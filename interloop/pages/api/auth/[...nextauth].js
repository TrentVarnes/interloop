import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { MongoClient } from 'mongodb';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const client = await MongoClient.connect(
          'mongodb+srv://TrentVarnes:interloop@cluster0.fl5nx35.mongodb.net/?retryWrites=true&w=majority'
        );
        const users = client.db().collection('users');

        const result = await users.findOne({
          email: credentials.email,
        }); // Check if user exists
        if (!result) {
          throw new Error('No user found please sign up!');
        }

        // Compare password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // incorrect password
        if (!checkPassword || result.email !== result.email) {
          throw new Error('Username or Password does not match ');
        }
        return { email: result.email };
      },
    }),
  ],
  secret: '9Ijf8hWNDtGFOcz4hFVm2HCbsZCWZ4x6hQuAezu2Qko=',
};

export default NextAuth(authOptions);
