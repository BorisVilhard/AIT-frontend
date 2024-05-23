import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { InputField } from '@/components/Fields';
import Button from '@/components/Button/Button';


export interface LoginFormValues {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: LoginFormValues) => void;
}

const RegisterForm = (props: Props) => {
  const schema = zod.object({
    email: zod.string().email('Wrong Email Format').min(1, { message: 'Required' }),
    password: zod.string().min(1, { message: 'Required' }),
  });

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form className="m-4 flex w-[350px] flex-col" onSubmit={methods.handleSubmit(props.onSubmit)}>
        <InputField<LoginFormValues>
          name="email"
          placeholder={'company name'}
          className="mb-[10px]"
        />
        <InputField<LoginFormValues> name="email" placeholder={'email'} className="mb-[10px]" />
        <InputField<LoginFormValues>
          name="password"
          placeholder={'password'}
          className="mb-[10px]"
        />
        <InputField<LoginFormValues> name="email" placeholder={'verify password'} />
        <Button radius="squared" className="mt-[20px]" htmlType="submit">
          Register
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
