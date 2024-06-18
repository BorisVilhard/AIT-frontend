import Button from '@/app/components/Button/Button';
import DataFlowAnimation from '../../features/DataFlowAnimation/DataFlowAnimation';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${'/img/heroBg.svg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex h-[92vh] w-full items-center justify-between px-[5vw] pb-[10vh] text-shades-white"
    >
      <div className="relative flex max-w-[40vw] flex-col">
        <p className="p-2 font-bold text-primary-90">Run your company smoothly</p>
        <h1 className="text-5x font-bold text-shades-black sm:text-6xl md:py-6 md:text-[4.5vw]">
          Enhance Performance with Smart Data Solutions
        </h1>
        <Button
          type="secondary"
          className="my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black"
        >
          Get Started
        </Button>
      </div>
      <div className="relative ml-[10vw]  hidden w-full sm:hidden md:hidden lg:block">
        <DataFlowAnimation />
      </div>
    </div>
  );
};

export default HeroSection;
