'use client';

import { providerMap } from '@/utils/auth';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { InputField } from '@/components/Fields';
import Button from '@/components/Button/Button';
import { FormProvider, useForm } from 'react-hook-form';
import { handleSignIn } from '@/app/api/auth/authActions';

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

  return (
    <FormProvider {...methods}>
      {Object.values(providerMap).map((provider) => (
        <form
          className="m-4 flex w-[350px] flex-col"
          key={provider.id}
          onSubmit={methods.handleSubmit((data) => {
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('password', data.password);
            handleSignIn(provider.id, formData);
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
      ))}
    </FormProvider>
  );
};

export default LoginForm;
