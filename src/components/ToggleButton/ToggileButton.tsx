import classNames from 'classnames';
import React, { useState } from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

interface Props {
  onLabel: string;
  offLabel: string;
  onToggleClick: (data: boolean) => void;
}

const ToggleButton: React.FC<Props> = ({ onLabel, offLabel, onToggleClick }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onToggleClick(!isEnabled);
  };

  const ActiveState = ({ label }: { label: string }) => {
    return <span className={`mx-2 text-neutral-60`}>{label}</span>;
  };

  return (
    <div className="flex items-center justify-center p-4">
      <ActiveState label={onLabel} />
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="relative">
          <input type="checkbox" id="toggle" className="sr-only" onChange={toggleSwitch} />
          <div
            className={`border-black block h-8 w-14 rounded-full border-2 bg-shades-white`}
          ></div>
          <div
            className={`dot bg-white absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full transition ${
              isEnabled ? 'bg-black translate-x-full transform' : ''
            }`}
          >
            <RiCheckboxBlankCircleFill className="text-white text-lg" />
          </div>
        </div>
      </label>
      <ActiveState label={offLabel} />
    </div>
  );
};

export default ToggleButton;
