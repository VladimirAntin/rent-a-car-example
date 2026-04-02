import {HeroSection} from '@components/home/HeroSection';
import CarsSection from '@components/home/CarsSection';
import WhyMeSection from '@components/home/WhyMeSection';
import {memo} from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CarsSection />
      <WhyMeSection />
    </div>
  );
};

export default memo(HomePage);
