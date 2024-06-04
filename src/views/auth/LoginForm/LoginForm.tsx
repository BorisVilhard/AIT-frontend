'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { InputField } from '@/components/Fields';
import Button from '@/components/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';


export interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const schema = zod.object({
    username: zod.string().min(1, { message: 'Required' }),
    password: zod.string().min(1, { message: 'Required' }),
  });

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });

  const handleSignIn = async (data:LoginFormValues) => {
    await signIn('credentials', {
      username:data.username,
      password:data.password,
      callbackUrl: '/'
    });
  };

  return (
    <FormProvider {...methods}>
     
        <form
          className="m-4 flex w-[350px] flex-col"
          onSubmit={methods.handleSubmit((data) => {
          handleSignIn(data)
          })}
        >
          <InputField<LoginFormValues>
            name="username"
            placeholder={'username'}
            className="mb-[10px]"
          />
          <InputField<LoginFormValues> name="password" placeholder={'password'} />

          <Button radius="squared" className="mt-[20px]" htmlType="submit">
            Login
          </Button>
        </form>

    </FormProvider>
  );
};

export default LoginForm;
