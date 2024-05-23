// authActions.ts
'use server';

import { auth, signIn, signOut } from '@/utils/auth';

export async function handleSignIn(providerId: string, formData: FormData) {
  if (providerId === 'credentials') {
    await signIn(providerId, {
      redirectTo: '/',
      username: formData.get('username'),
      password: formData.get('password'),
    });
  } else {
    await signIn(providerId, { redirectTo: '/' });
  }
}

export async function handleSignOut() {
  await signOut();
}
