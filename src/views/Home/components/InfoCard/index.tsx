import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  reversedTransform?: boolean;
  imgSrc: string;
  label: string;
}

const InfoCard = ({ reversedTransform, imgSrc, label }: Props) => {
  const baseStyles =
    'absolute left-0 top-0 flex h-[275%] w-[150%] translate-x-[-70%] translate-y-[28%] items-center bg-neutral-80 text-white';
  const dynamicStyles = classNames({
    'w-[178.25%] rotate-[-22deg] md:rotate-[-11deg] md:translate-y-[-15%]': reversedTransform,
    'rotate-[22deg] md:rotate-[11deg] md:translate-y-[-15%]': !reversedTransform,
  });

  return (
    <div className="relative flex h-[90vh] w-full items-center justify-end overflow-hidden">
      <div className="relative w-[500px]">
        <h1 className="absolute top-[10%] z-10 text-6xl font-bold text-shades-white">{label}</h1>
      </div>

      <div aria-label="Slate cover background" className={`${baseStyles} ${dynamicStyles}`}></div>

      <div className="relative z-20 mr-[10px]">
        <Image src={imgSrc} width={650} height={650} alt="robot image" />
      </div>
    </div>
  );
};

export default InfoCard;
