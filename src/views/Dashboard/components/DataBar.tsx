import React from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Button from '@/app/components/Button/Button';
import Dropdown from '@/app/components/Dropdown/Dropdown';
import DateInputField from '@/app/components/Fields/DateInputField/DateInputField';
import { FileInputField } from '@/app/components/Fields/FileInputField/FileInputField';

interface FormData {
  mediaType: string;
  headline: string;
  caption: string;
  picUrl: string;
  document?: File;
}

const DataBar: React.FC = () => {
  const schema = zod.object({
    mediaType: zod.string().min(1, { message: 'Required' }),
    headline: zod.string().min(1, { message: 'Required' }),
    caption: zod.string().min(1, { message: 'Required' }),
    picUrl: zod.string().min(1, { message: 'Required' }),
    document: zod.instanceof(File).optional(),
  });

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.document) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', data.document);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative mb-5 flex h-[200px] w-full items-start justify-center bg-neutral-80 px-[25px] py-[15px]">
      <FormProvider {...methods}>
        <form
          className="flex w-[95%] items-start justify-center"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <DateInputField name="date" />
          <Dropdown
            name="mediaType"
            items={[
              { label: 'Video', value: 'video' },
              { label: 'Image', value: 'image' },
            ]}
            onChange={() => {}}
          />
          <FileInputField name="document" content={<Button type="secondary">Upload Data</Button>} />
        </form>
      </FormProvider>
    </div>
  );
};

export default DataBar;
