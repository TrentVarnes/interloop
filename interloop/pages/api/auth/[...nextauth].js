import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import AzureADB2CProvider from 'next-auth/providers/azure-ad-b2c';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //This will be used for microsoft login
    AzureADB2CProvider({
      tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET,
      primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
      authorization: { params: { scope: 'offline_access openid' } },
    }),
  ],
};

export default NextAuth(authOptions);
