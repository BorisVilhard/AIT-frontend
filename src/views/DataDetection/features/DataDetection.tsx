'use client';

import Button from '@/app/components/Button/Button';
import React, { useEffect, useState } from 'react';
import { GoUpload } from 'react-icons/go';

const DataDetection = () => {
  const [file, setFile] = useState<File | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return alert('Please select a file!');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/detect', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        console.log(url);
        setImageUrl(url);
      } else {
        console.error('Server responded with:', response.status);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative  h-[200px] w-full items-center justify-center bg-neutral-80 px-[25px] py-[15px]">
        <form onSubmit={handleSubmit}>
          <div className="mt-[50px] flex h-full w-full items-center justify-center gap-3">
            <input
              id="file"
              style={{ display: 'none' }}
              type="file"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            <label
              className="flex cursor-pointer items-center justify-center rounded-md border-none bg-shades-white p-[11px]"
              htmlFor="file"
            >
              <a className="text-[20px]">
                <GoUpload />
              </a>
            </label>
            <Button type="secondary" htmlType="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
      {imageUrl && (
        <div className="mt-[30px] w-[60vw]">
          <img src={imageUrl} height={300} width={'auto'} />
        </div>
      )}
    </div>
  );
};

export default DataDetection;
