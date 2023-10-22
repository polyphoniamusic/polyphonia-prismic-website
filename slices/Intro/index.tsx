"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Link from 'next/link';
import Image from 'next/image';

import EasterIcon from '../../public/assets/images/icons/eyes-icon.svg';

/**
 * Props for `LabelIntroduction`.
 */
export type LabelIntroductionProps = SliceComponentProps<Content.LabelIntroductionSlice>;

/**
 * Component for "LabelIntroduction" Slices.
 */
const LabelIntroduction = ({ slice }: LabelIntroductionProps): JSX.Element => {

  return (
    <section className="intro" id="intro"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="intro-container">
        {/* Intro Heading */}
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="intro-heading">{children}</h1>
          )
        }}/>
        {/* Intro Quote */}
        <PrismicRichText field={slice.primary.quote} components={{
          paragraph: ({children}) =>(
            <p className="intro-quote">{children}</p>
          )
        }}/>
        {/* Intro Text */}
        <PrismicRichText field={slice.primary.text} components={{
          paragraph: ({children}) =>(
            <p className="intro-text">{children}</p>
          )
        }}/>
        <PrismicNextLink field={slice.primary.easteregglink} className="intro-easter">
          <Image src={EasterIcon} className="" alt="Eyes Icon"/>
        </PrismicNextLink>
        {/*<div className="easter-bar"></div>*/}
      </div>
    </section>
  );
};

export default LabelIntroduction;
