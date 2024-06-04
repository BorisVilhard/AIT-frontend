import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  reversedTransform?: boolean;
  imgSrc: string;
  label: string;
}

const InfoCard = ({ reversedTransform, imgSrc, label }: Props) => {
  
  return (
    <div className="relative flex-col md:flex-row sm:flex h-fit md:h-[55vh] m-[20px] bg-neutral-80 md:bg-shades-white lg:bg-shades-white rounded-[20px] items-center justify-between overflow-hidden">
       <div className="relative z-20 mr-[10px]">
      {!reversedTransform &&  <Image src={imgSrc} width={650} height={650} alt="robot image" />} 
      </div>
       <div aria-label="Slate cover background" className={classNames( 'absolute left-0 top-0 rotate-[22deg] md:rotate-[11deg] md:translate-y-[-15%] h-[200vh] w-[150vw] translate-y-[28%] rounded-lg items-center lg:flex hidden md:block bg-neutral-80 text-white',{
          'left-0 translate-x-[28%]': !reversedTransform,
          'right-0 translate-x-[-70%]':  reversedTransform
       })}></div>
        <h1 className="z-10 mx-[20px] md:ml-[40px] text-[28px] lg:my-[10px] lg:text-5xl w-[90%] md:w-[40%] my-[20px] font-bold text-shades-white">{label}</h1>
      <div className="relative z-20 mr-[10px]">
      {reversedTransform &&  <Image src={imgSrc} width={650} height={650} alt="robot image" />} 
      </div>
    </div>
  );
};

export default InfoCard;
