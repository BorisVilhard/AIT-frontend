import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InfoCard from './components/InfoCard';

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoCard
        label="Utilize AGI to aggregate information from all sources and provide succinct chart summaries"
        imgSrc="/img/mac.png"
      />
      <InfoCard
        label="Analyze website user behavior to enhance your strategic advantage"
        imgSrc="/img/mac.png"
        reversedTransform
      />
      <Footer />
    </>
  );
};

export default Home;
