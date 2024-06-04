import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InfoCard from './components/InfoCard';

const Home = () => {
  return (
    <>
      <HeroSection />
       <InfoCard
        label="Analyze website user behavior to enhance your strategic advantage"
        imgSrc="/img/mac.png"
        reversedTransform
      />
      <InfoCard
        label="Utilize AGI to aggregate information from all sources and provide succinct chart summaries"
        imgSrc="/img/mac.png"
      />
      <Footer />
    </>
  );
};

export default Home;
