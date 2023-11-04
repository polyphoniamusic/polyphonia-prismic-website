'use client';

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

import PolyphoniaLogoWhiteSVG from '@/public/assets/images/brand-assets/polyphonia-logo-white.svg';
import PolyphoniaLogoWhitePNG from '@/public/assets/images/brand-assets/polyphonia-logo-white.png';
import PolyphoniaLogoRedSVG from '@/public/assets/images/brand-assets/polyphonia-logo-red.svg';
import PolyphoniaLogoRedPNG from '@/public/assets/images/brand-assets/polyphonia-logo-red.png';
import PolyphoniaIconWhiteSVG from '@/public/assets/images/brand-assets/polyphonia-icon-white.svg';
import PolyphoniaIconWhitePNG from '@/public/assets/images/brand-assets/polyphonia-icon-white.png';
import ArrowIcon from '@/public/assets/images/icons/arrow-icon-white.svg';

const logos = [
  { 
    imageSVG: PolyphoniaLogoWhiteSVG, 
    imagePNG: PolyphoniaLogoWhitePNG, 
    downloadNameSVG: 'polyphonia-logo-white.svg',
    downloadNamePNG: 'polyphonia-logo-white.png',
    name: 'Monogram White',
    typeSVG: 'SVG',
    typePNG: 'PNG',
  },
  { 
    imageSVG: PolyphoniaLogoRedSVG, 
    imagePNG: PolyphoniaLogoRedPNG, 
    downloadNameSVG: 'polyphonia-logo-red.svg',
    downloadNamePNG: 'polyphonia-logo-red.png',
    name: 'Monogram Red',
    typeSVG: 'SVG',
    typePNG: 'PNG',
  },
  { 
    imageSVG: PolyphoniaIconWhiteSVG, 
    imagePNG: PolyphoniaIconWhitePNG, 
    downloadNameSVG: 'polyphonia-icon-white.svg',
    downloadNamePNG: 'polyphonia-icon-white.png',
    name: 'Icon White',
    typeSVG: 'SVG',
    typePNG: 'PNG',
  },
];

/**
 * Props for `BrandAssetsSection`.
 */
export type BrandAssetsSectionProps =
  SliceComponentProps<Content.BrandAssetsSectionSlice>;

const BrandAssetsSection = ({
  slice,
}: BrandAssetsSectionProps): JSX.Element => {

  const handleDownload = (imageSrc: string, fileName: string) => {
    const a = document.createElement('a');
    a.href = imageSrc;
    a.download = fileName;

    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    a.dispatchEvent(clickEvent);
  };

  return (
    <section className="brandassets" id="brandassets"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="brandassets-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) => (
            <h1 className="brandassets-heading">{children}</h1>
          )
        }}/>
        
        <div className="brandassets-container-block">
          {logos.map((logo, index) => (
            <div className="brandassets-container-block-item" key={index}>
              {/* Affichez l'image */}
              <p>{logo.name}</p>
              <div className="brandassets-container-block-item-image-block">
                <Image src={logo.imageSVG} alt={'Polyphonia ' + logo.name} width={100} height={100} />
              </div>
              {/* Créez un bouton de téléchargement pour le logo actuel */}
              <div className="brandassets-container-block-item-buttons-block">
                <button className="button-cta button-cta-white brandassets-download-button" onClick={() => handleDownload(logo.imageSVG.src, logo.downloadNameSVG)}>
                  {logo.typeSVG}
                  <Image src={ArrowIcon} alt="Arrow Icon White"/>
                </button>
                <button className="button-cta button-cta-white brandassets-download-button" onClick={() => handleDownload(logo.imagePNG.src, logo.downloadNamePNG)}>
                  {logo.typePNG}
                  <Image src={ArrowIcon} alt="Arrow Icon White"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssetsSection;