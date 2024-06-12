import { ChangeEvent, useState } from 'react';
import Button from '@/components/Button/Button';
import Dropdown from '@/components/Dropdown/Dropdown';
import axios from 'axios';

interface Props {
  getData: (section: []) => void;
}

const DataBar = (props: Props) => {
  const [openCalendar, setOpenCalenda] = useState(false);
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
      props.getData(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="relative mb-5 flex h-[200px] w-full items-start justify-center bg-neutral-80 px-[25px] py-[15px]">
      <div className="flex w-[95%]  items-start justify-center">
        <div className="relative">
          <Button
            className="bg-shades-white text-shades-black"
            onClick={() => setOpenCalenda(!openCalendar)}
          >
            <div className="text-shades-black">Date</div>
          </Button>
          {/*        
        {openCalendar && (
          <div className="absolute top-20 z-30 rounded-2xl border-2 border-primary-90 bg-shades-white p-4">
            <DateRangePicker ranges={[selectionRange]} onChange={() => {}} />
          </div>
        )} */}
        </div>

        <div className="absolute left-0 right-0 z-50 mx-auto" style={{ width: 'fit-content' }}>
          <Dropdown name="hello" items={[{ label: 'hello', value: '' }]} onChange={() => {}} />
        </div>

        <div className="z-50 flex w-full justify-end">
          <div className="absolute z-50">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload File</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBar;
