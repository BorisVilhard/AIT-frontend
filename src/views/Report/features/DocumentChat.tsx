'use client';
import React, { useEffect, useState } from 'react';
import Chat from '../components/Chat/Chat';
import Button from '@/app/components/Button/Button';
import { GoUpload } from 'react-icons/go';

function DocumentChat() {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : null;
  });

  // Update localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) return alert('Please select a file!');

    const formData = new FormData();
    formData.append('text', text);
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative flex  h-[200px] w-full items-center justify-center bg-neutral-80 px-[25px] py-[15px]">
        <form onSubmit={handleSubmit}>
          <div className="flex w-[50vw] items-center gap-3">
            <input
              id={'file'}
              style={{ display: 'none' }}
              type="file"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            />
            <label
              className="flex cursor-pointer items-center justify-center rounded-md border-none bg-shades-white p-[11px]"
              htmlFor={'file'}
            >
              <a className="text-[20px]">
                <GoUpload />
              </a>
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter some text"
              className="h-[4vh] min-h-[45px] w-full border-none px-[15px] opacity-100 focus:outline-none"
            />
            <Button type="secondary" htmlType="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
      {messages && <Chat data={messages} />}
    </div>
  );
}

export default DocumentChat;
