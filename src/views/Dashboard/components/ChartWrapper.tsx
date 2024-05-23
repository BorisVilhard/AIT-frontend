import { ReactNode } from 'react';

interface Props {
  title?: string;
  value?: number;
  children: ReactNode;
  percentageDifference?: string;
  id?: string;
  className?: string;
  onClick?: () => void;
}

export const ChartWrapper = (props: Props) => {
  return (
    <div
      style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
      className={`m-[10px] min-h-[165px]  rounded-[10px] bg-shades-white p-[10px] ${props.className}`}
      onClick={props.onClick}
    >
      <h1 className={'mr-[10px] text-[16px] font-medium '}>{props.title}</h1>
      <div className="flex justify-center">
        <div className="mr-[60px] mt-[10px] w-fit">
          <h1 className={'font-500 mr-[10px] text-[35px] '}>{props.value}</h1>
          {props.percentageDifference && (
            <div className="flex items-center">
              <h1 className={'mx-[7px] text-[15px] font-bold'}>{props.percentageDifference}</h1>

              <h1 className={'text-[13px] text-neutral-60'}>less than a week</h1>
            </div>
          )}
        </div>

        {props.children}
      </div>
    </div>
  );
};
