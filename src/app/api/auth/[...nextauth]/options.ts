
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
              try {
                const res = await axios.post('http://localhost:3500/auth', {
                  user: credentials?.username,
                  pwd: credentials?.password,
                });
                 console.log(res.data)
                if (res.status === 200) {
                  return res.data;
                } else {
                  console.error(`Failed to log in with status: ${res.status}`);
                  return null;
                }
              } catch (error) {
                console.error('Login error:', error);
                return null;
              }
            }
        })
    ],
    pages: {
      signIn: '/auth/login', 
    },
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
        }
        return token;
      },
      session: async ({ session, token }) => {
        if (token) {
          session.user = {
            name: token.name,
            email: token.email,
          };
        }
        return session;
      },
    
    },
}