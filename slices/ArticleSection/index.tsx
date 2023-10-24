import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { format } from 'date-fns';

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
            <span>Written by {slice.primary.author}</span>
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
            </div>
            <div className="article-introduction-block">
              <h2 className="article-subheading">{slice.primary.sub_heading}</h2>
              <PrismicRichText field={slice.primary.text_content} components={{
                paragraph: ({children}) => (
                  <p className="article-paragraph">{children}</p>
                )
              }}/>
              <PrismicNextLink className="button-cta button-cta-white article-button" field={slice.primary.link}>{slice.primary.label}</PrismicNextLink>
            </div>
            
          </div>
      </div>
    </section>
  );
};

export default ArticleSection;