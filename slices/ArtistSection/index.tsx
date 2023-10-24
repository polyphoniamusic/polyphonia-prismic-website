"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
//import Waveform from '@/app/components/waveform';

/**
 * Props for `ArtistSection`.
 */
export type ArtistSectionProps =
  SliceComponentProps<Content.ArtistSectionSlice>;

/**
 * Component for "ArtistSection" Slices.
 */
const ArtistSection = ({ slice }: ArtistSectionProps): JSX.Element => {

  //const audioFile = "/assets/audios/blurblur-august27-preview.mp3";

  return (
    <section className="artist" id="artist"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="artist-container">
        <div className="artist-container-image-block">
          <PrismicNextImage field={slice.primary.image} className="artist-image"/>
        </div>
        <div className="artist-information-block">
          <div className="artist-information">
            <div className="artist-information-main">
              <PrismicRichText field={slice.primary.heading} components={{
                paragraph: ({children}) =>(
                  <h1 className="artist-heading">{children}</h1>
                )
              }}/>
              <PrismicRichText field={slice.primary.category} components={{
                paragraph: ({children}) =>(
                  <h2 className="artist-category">{children}</h2>
                )
              }}/>
            </div>
            <PrismicRichText field={slice.primary.biography} components={{
              paragraph: ({children}) =>(
                <p className="artist-biography">{children}</p>
              )
            }}/>
            <div className="artist-block-inline">
              {slice.items.map(({platform_link, platform_icon}) => (
                <>
                  <PrismicNextLink field={platform_link} className="artist-platform">
                    <PrismicNextImage field={platform_icon}/>
                  </PrismicNextLink>
                </>
              ))}
            </div>
            <PrismicNextLink field={slice.primary.email} className="button-cta button-cta-white">
              {slice.primary.booking_button}
            </PrismicNextLink>
          </div>
        </div>
      </div>
      {/*<div className="artist-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="artist-heading">{children}</h1>
          )
        }}/>
        <div className="artist-block">
          <div className="artist-block-column">
            <PrismicNextImage field={slice.primary.image} className="artist-image"/>
          </div>
          <div className="artist-block-column">
            <PrismicRichText field={slice.primary.category} components={{
              paragraph: ({children}) =>(
                <h2 className="artist-category">{children}</h2>
              )
            }}/>
            <PrismicRichText field={slice.primary.biography} components={{
              paragraph: ({children}) =>(
                <p className="artist-biography">{children}</p>
              )
            }}/>
            <PrismicNextLink field={slice.primary.email} className="button-cta button-cta-white">
              {slice.primary.booking_button}
            </PrismicNextLink>
          </div>
        </div>
        <div className="artist-block">
            <PrismicRichText field={slice.primary.label} components={{
              paragraph: ({children}) =>(
                <p className="artist-button">{children}</p>
              )
            }}/>
          <div className="artist-block-inline">
            {slice.items.map(({platform_link, platform_icon}) => (
              <>
                <PrismicNextLink field={platform_link} className="artist-platform">
                  <PrismicNextImage field={platform_icon}/>
                </PrismicNextLink>
              </>
            ))}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: slice.primary.audioplayer.html }} />
        <Waveform audio={audioFile} />
      </div>*/}
    </section>
  );
};

export default ArtistSection;
