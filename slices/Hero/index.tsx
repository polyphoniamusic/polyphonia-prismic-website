"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import React, { useEffect, useRef } from 'react';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /*useEffect(() => {
    let isTabActive = true;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isTabActive = false;
        if (videoRef.current) {
          videoRef.current.pause();
        }
      } else {
        isTabActive = true;
      }
    };

    // Vérification du navigateur pour Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari) {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    // Gestion de la lecture sur le focus de la fenêtre
    const handleWindowFocus = () => {
      if (!isSafari && isTabActive && videoRef.current) {
        videoRef.current.play();
      }
    };

    window.addEventListener('focus', handleWindowFocus);

    return () => {
      if (!isSafari) {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);*/

  return (
    <section className="hero" id="home"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Master FX Layer */}
      <div className="hero-container">
        <PrismicNextImage field={slice.primary.logo} className="hero-logo"/>
        <Link href="#showroll" className="hero-icon">
          <PrismicNextImage field={slice.primary.icon}/>
        </Link>
        {/*<video ref={videoRef} className="hero-video" autoPlay muted loop src="/assets/videos/polyphonia-website-hero-video.mp4"></video>*/}
      <div className="hero-video-container">
        <div className="master-fx"></div>
        <div className="master-fx-overlay"></div>
        <video
          ref={videoRef}
          className="hero-video-container"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="/assets/images/polyphonia-website-hero-poster.jpg"
          src="/assets/videos/polyphonia-website-hero-video.mp4"
        ></video>
        </div>
        {/*<iframe width="1920" height="1080" className="hero-video" src="https://www.youtube.com/embed/IN7Y-hX-uV4?autoplay=1&loop=1&controls=0&rel=0&showinfo=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="hero-video-container">
          <iframe className="hero-video" src="https://player.vimeo.com/video/879473105?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="POLYPHONIA MUSIC - WEBISTE HOME VIDEO"></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>*/}
      </div>
    </section>
  );
};

export default Hero;
