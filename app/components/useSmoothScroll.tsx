import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // normalizeScroll(true) is not needed, as it's automatically done
    // by ScrollSmoother

    // Create the smooth scroller FIRST
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, []);

  return (
    <div>
      {/* Votre contenu ici */}
    </div>
  );
};

export default SmoothScroll;