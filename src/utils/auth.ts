import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { Provider } from 'next-auth/providers';

const providers: Provider[] = [
  Credentials({
    credentials: { password: { label: 'Password', type: 'password' } },
    async authorize(c) {
      if (c.password !== 'password') {
        return null;
      }

      return {
        id: '1',
        name: 'Fill Murray',
        email: 'fill@murray.com',
        image: 'https://source.boringavatars.com/marble/120',
      };
    },
  }),
];

export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: 'SvybG+az032O2gkSkhnTMGP0dN0OjBt/xaTUxru4d4sD',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'your-cool-username' },
        password: { label: 'Password', type: 'password', placeholder: 'your-awesome-password' },
      },
      async authorize(credentials) {
        const user = { id: '42', name: 'Dave', password: 'nextauth' };

        if (credentials?.password === user.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
});
