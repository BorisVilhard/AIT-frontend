
import Image from 'next/image';

interface Props {
  reversedTransform?: boolean;
  imgSrc: string;
  label: string;
}

const InfoCard = ({ reversedTransform, imgSrc, label }: Props) => {
  return (
    <div className="relative my-[50px] flex-col md:flex-row sm:flex h-fit md:h-[45vh] md:w-[85%] m-[20px] bg-neutral-80 md:bg-shades-white rounded-[20px] items-center justify-between overflow-hidden">
       <div aria-label="Slate cover background" className={'absolute  translate-x-[-76%] rotate-[-22deg] left-0 top-0 md:rotate-[11deg] md:translate-y-[-15%] h-[200vh] w-[150vw] rounded-lg items-center lg:flex hidden md:block bg-neutral-80 text-white'}/>
        <h1 className="z-10 mx-[20px] md:ml-[40px] md:text-[23px] md:w-[35%] text-[28px] text-left lg:my-[10px] lg:text-3xl lg:leading-[45px] w-[90%] my-[20px] font-bold text-shades-white">{label}</h1>
      <Image className='z-20' src={imgSrc} width={550} height={550} alt="robot image" />
    </div>
  );
};

export default InfoCard;
