// // authActions.ts
// 'use server';


// import axios from 'axios';
// import { redirect } from 'next/navigation';

// export async function handleSignIn(providerId: string, formData: FormData) {
//   if (providerId === 'credentials') {
//     await signIn(providerId, {
//       redirectTo: '/',
//       username: formData.get('username'),
//       password: formData.get('password'),
//     });
//   } else {
//     await signIn(providerId, { redirectTo: '/' });
//   }
// }
// export const handleRegister = async (providerId:string,data: RegisterFormValues) => {
//   try {
//     const response = await axios.post('http://localhost:3500/register', data, {
//       headers: { 'Content-Type': 'application/json' },
//     });
    
//     if (response.status === 200) {
//       await signIn(providerId, {
//         redirect: true,
//         redirectTo:'/',
//         username: data.username,
//         password: data.password,
//       });
//       redirect('/')
//     }
//   } catch (error: any) {
//     if (axios.isAxiosError(error) && error.response?.status === 409) {
//       console.log('Username already taken. Please try another one.');
//     } else {
//       console.error('Registration error:', error);
//       console.log('An error occurred during registration. Please try again.');
//     }
//   }
// };


// export async function handleSignOut() {
//   await signOut();
//   return redirect('/');
// }
