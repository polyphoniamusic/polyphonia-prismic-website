"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

/**
 * Props for `Spotlight`.
 */
export type SpotlightProps = SliceComponentProps<Content.SpotlightSlice>;

/**
 * Component for "Spotlight" Slices.
 */


const Spotlight = ({ slice }: SpotlightProps): JSX.Element => {

  const scroller = useRef(null);
  const skills = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    
    // Déclarez dynamicValue1 en dehors de useEffect
    let dynamicValue1: number;
    let dynamicValue2: number;
  
    if (window.innerWidth < 1150) {
      dynamicValue1 = 2;
      dynamicValue2 = 0.5;
    } else if (window.innerWidth < 700) {
      dynamicValue1 = 1;
      dynamicValue2 = 1;
    } else {
      dynamicValue1 = 3;
      dynamicValue2 = 0.3;
    }

    const skillSet = gsap.utils.toArray('.skill-set');
    const divWidth = (window.innerWidth * dynamicValue2) + (window.innerWidth * 0.03);
    const totalWidth = skillSet.length * divWidth;
  
    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - dynamicValue1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        //snap: 1 / (skillSet.length - dynamicValue1),
        end: () => `+=${totalWidth - window.innerWidth}`,
      },
    });
  
    return () => {
      to.kill();
    };
  }, []);
  

  return (
    <section className="spotlight" id="spotlight"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="spotlight-container">
          <div className="spotlight-container-block" ref={scroller}>
            {slice.items.map(({ artistname, ep_release, single_release, album_release, title, link, label, cover }) => (
              <div key={label} className="spotlight-block-button skill-set" ref={skills}>
                <div className="spotlight-button">
                  <PrismicNextLink field={link}>
                    <div className="spotlight-block">
                      <div className="spotlight-block-image-container">
                        <PrismicNextImage field={cover} className="spotlight-cover" />
                        <div className="spotlight-block-image-recover">
                          <h2 className="button-cta button-cta-white">{label}</h2>
                        </div>
                      </div>
                      <div className="spotlight-infos">
                        <PrismicRichText field={ep_release} components={{
                          paragraph: ({ children }) => (
                            <p className="spotlight-category spotlight-category-ep">{children}</p>
                          )
                        }} />
                        <PrismicRichText field={album_release} components={{
                          paragraph: ({ children }) => (
                            <p className="spotlight-category spotlight-category-album">{children}</p>
                          )
                        }} />
                        <PrismicRichText field={single_release} components={{
                          paragraph: ({ children }) => (
                            <p className="spotlight-category spotlight-category-single">{children}</p>
                          )
                        }} />
                        <div className="spotlight-artist-infos">
                          <PrismicRichText field={artistname} components={{
                            paragraph: ({ children }) => (
                              <p className="spotlight-name">{children}</p>
                            )
                          }} />
                          <PrismicRichText field={title} components={{
                            paragraph: ({ children }) => (
                              <p className="spotlight-title">{children}</p>
                            )
                          }} />
                        </div>
                      </div>
                    </div>
                  </PrismicNextLink>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Spotlight;