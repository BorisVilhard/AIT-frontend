import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import ToggleButton from '@/components/ToggleButton/ToggileButton';

interface Props {
  activeSection: (section: boolean) => void;
}

const DataBar = (props: Props) => {
  const [openCalendar, setOpenCalenda] = useState(false);
  const [hasSocialMedia, setHasSocialMedia] = useState(false);

  const handleDataFromChild = (data: boolean) => {
    props.activeSection(data);
    setHasSocialMedia(data);
  };

  const date: Date = new Date();
  date.getDate();
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };

  return (
    <div className="relative mb-5 flex h-[200px] w-full items-start justify-between bg-neutral-80 px-[25px] py-[15px]">
      <div className="relative">
        <Button
          className="bg-shades-white text-shades-black"
          onClick={() => setOpenCalenda(!openCalendar)}
        >
          <div className="text-shades-black">Select date data</div>
        </Button>

        {openCalendar && (
          <div className="absolute top-20 z-30 rounded-2xl border-2 border-primary-90 bg-shades-white p-4">
            <DateRangePicker ranges={[selectionRange]} onChange={() => {}} />
          </div>
        )}
      </div>

      <div className="absolute left-0 right-0 mx-auto" style={{ width: 'fit-content' }}>
        <ToggleButton
          onToggleClick={handleDataFromChild}
          onLabel="Website"
          offLabel="Social Media"
        />
      </div>

      <div className="flex w-full justify-end">
        <input id={'file'} type="file" style={{ display: 'none' }} />
        <label htmlFor={'file'}>
          <Button type="secondary">Upload Data</Button>
        </label>
      </div>
    </div>
  );
};

export default DataBar;
