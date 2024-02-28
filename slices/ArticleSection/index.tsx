"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { format } from 'date-fns';
import YouTubeLazyLoad from "@/app/components/YouTubeLazyLoad";

/**
 * Props for `ArticleSection`.
 */

export type ArticleSectionProps =
  SliceComponentProps<Content.ArticleSectionSlice>;

/**
 * Component for "ArticleSection" Slices.
 */

const ArticleSection = ({ slice }: ArticleSectionProps): JSX.Element => {
  // Check if slice.primary.date is not null before formatting
  const formattedDate = slice.primary.date
    ? format(new Date(slice.primary.date), "MMM. dd, yyyy")
    : '';
  
  return (
    <section className="article" id="article" 
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="article-container">
        <div className="article-information-block">
          <p className="article-category">
            <span>{slice.primary.category}</span>
            <span>{slice.primary.sub_category}</span>
          </p>
          <h1 className="article-heading">{slice.primary.heading}</h1>
          <p className="article-data">
            <span>{slice.primary.written_by} {slice.primary.author}</span>
            <span>{formattedDate}</span>
            <span>{slice.primary.duration}</span>
          </p>
          {/*<PrismicNextLink field={slice.primary.email} className="button-cta button-cta-white">
            {slice.primary.booking_button}
          </PrismicNextLink>*/}
        </div>
        <div className="article-introduction">
            <div className="article-introduction-block">
              <PrismicNextImage field={slice.primary.image} className="article-image"/>
              <span className="article-credits">{slice.primary.credits}</span>
            </div>
            <div className="article-introduction-block">
              <h2 className="article-subheading">{slice.primary.sub_heading}</h2>
              <PrismicRichText field={slice.primary.text_content} components={{
                paragraph: ({children}) => (
                  <p className="article-paragraph">{children}</p>
                )
              }}/>
              {slice.primary.label ? (
                <PrismicNextLink className="button-cta button-cta-white article-button" field={slice.primary.link}>
                  {slice.primary.label}
                </PrismicNextLink>) : (
                  <></>
                )}
              
            </div>
          </div>
          {slice.items.map((item, index) => (
            <div className="article-content">
              {item.text_content_paragraph ? (
                <PrismicRichText field={item.text_content_paragraph} components={{
                  paragraph: ({children}) => (
                    <div className="article-paragraph-block">
                      <p className="article-paragraph">{children}</p>
                    </div>
                  )
                }}/>
                ) : (
                <></>
              )}
              {item.youtube_id ? (
                <div className="article-content-video-player">
                  <YouTubeLazyLoad
                    key={index} // Assurez-vous d'utiliser une clé unique pour chaque élément lors de la mise en boucle
                    youtubeID={item.youtube_id}
                  />
                </div>
                ) : (
                <></>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default ArticleSection;