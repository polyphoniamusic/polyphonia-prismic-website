import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Newsletter`.
 */
export type NewsletterProps = SliceComponentProps<Content.NewsletterSlice>;

/**
 * Component for "Newsletter" Slices.
 */
const Newsletter = ({ slice }: NewsletterProps): JSX.Element => {
  return (
    <section className="newsletter"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="newsletter-container">
        <h1 className="newsletter-heading">{slice.primary.heading}</h1>
        <div className="newsletter-block">
          <input type="email" className="newsletter-input" placeholder="Your email"></input>
          <button className="button-cta button-cta-black">{slice.primary.label}</button>
        </div>

      </div>
      
    </section>
  );
};

export default Newsletter;
