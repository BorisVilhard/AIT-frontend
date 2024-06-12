
import Button from '@/components/Button/Button';
import DataFlowAnimation from '../../features/DataFlowAnimation/DataFlowAnimation';

const HeroSection = () => {
  return (
    <div className="relative w-full flex h-[92vh] flex-row items-center  justify-center bg-neutral-80  text-shades-white">
      <div className="relative mx-[100px] mb-[70px] flex  h-fit w-full max-w-[800px] flex-col justify-center text-center">
        <p className="p-2 font-bold text-[#5bc0eb]">Run your company smoothly</p>
        <h1 className="text-5xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          Enhance Performance with Smart Data Solutions
        </h1>
        <Button
          type="secondary"
          className="text-black mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-medium"
        >
          Get Started
        </Button>
      </div>
      <div className="relative mx-[100px] mb-[50px] hidden h-[100%] w-[80%] sm:hidden md:hidden lg:block">
        <DataFlowAnimation />
      </div>
    </div>
  );
};

export default HeroSection;
