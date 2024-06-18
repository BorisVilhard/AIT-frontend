import { ChangeEvent, useState } from 'react';
import Button from '@/app/components/Button/Button';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { FileInputField } from '@/app/components/Fields/FileInputField/FileInputField';
import { FormProvider, useForm } from 'react-hook-form';
import DateInputField from '@/app/components/Fields/DateInputField/DateInputField';

interface Props {
  onSubmit: (values: any) => void;
}

const DataBar = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const schema = zod.object({
    mediaType: zod.string().min(1, { message: 'Required' }),
    headline: zod.string().min(1, { message: 'Required' }),
    caption: zod.string().min(1, { message: 'Required' }),
    picUrl: zod.string().min(1, { message: 'Required' }),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div className="relative mb-5 flex h-[200px] w-full items-start justify-center bg-neutral-80 px-[25px] py-[15px]">
      <FormProvider {...methods}>
        <form
          className="flex w-[95%]  items-start justify-center"
          onSubmit={methods.handleSubmit(props.onSubmit)}
        >
          <DateInputField name="" />
          <div className="absolute left-0 right-0 z-50 mx-auto" style={{ width: 'fit-content' }}>
            <Dropdown name="hello" items={[{ label: 'hello', value: '' }]} onChange={() => {}} />
          </div>

          <div className="z-40 flex w-full justify-end">
            <FileInputField
              className="border-none"
              content={<Button type="secondary">Upload Data</Button>}
              name="document-upload"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default DataBar;
