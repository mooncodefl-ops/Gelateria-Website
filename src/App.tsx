import { useState, useCallback } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import MakingOf from '@/components/sections/MakingOf';
import FlavourShowcase from '@/components/sections/FlavourShowcase';
import Ingredients from '@/components/sections/Ingredients';
import SeasonalCollection from '@/components/sections/SeasonalCollection';
import Gallery from '@/components/sections/Gallery';
import Location from '@/components/sections/Location';
import Footer from '@/components/sections/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll();

  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Preloader onComplete={handleComplete} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <MakingOf />
        <FlavourShowcase />
        <Ingredients />
        <SeasonalCollection />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
