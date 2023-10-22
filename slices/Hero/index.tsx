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
      <div className="master-fx"></div>
      <div className="master-fx-overlay"></div>
      <div className="hero-container">
        <PrismicNextImage field={slice.primary.logo} className="hero-logo"/>
        <Link href="#showroll" className="hero-icon">
          <PrismicNextImage field={slice.primary.icon}/>
        </Link>
        <video ref={videoRef} className="hero-video" autoPlay muted loop src="/assets/videos/polyphonia-website-hero-video.mp4"></video>
      </div>
    </section>
  );
};

export default Hero;
