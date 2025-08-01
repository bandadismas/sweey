import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/user/signin'
    },
    callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
    //   const isOnLists = nextUrl.pathname.startsWith('/');
    //   if (isOnLists) {
    //     if (isLoggedIn) return true;
    //     return false; // Redirect unauthenticated users to login page
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL('/lists', nextUrl));
    //   }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;