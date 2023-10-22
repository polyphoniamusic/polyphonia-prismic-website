import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="hero"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero-container">

        <div className="hero-container-box">
          {/* Hero Banner Logo */}
          <PrismicNextImage field={slice.primary.logo} className="hero-logo"/>

          {/* Hero Banner Heading */}
          <PrismicRichText field={slice.primary.heading} components={{
            paragraph: ({children}) =>(
              <h1 className="hero-heading">{children}</h1>
            )
          }}/>

          {/* Hero Banner Text */}
          {/*<PrismicRichText field={slice.primary.subtitle} components={{
            paragraph: ({children}) =>(
              <p className="hero-sub-heading">{children}</p>
            )
          }}/>*/}
          
          {/* Hero Banner Button */}
          <PrismicNextLink className="button-cta" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
        
        <div className="hero-container-box">
        {slice.items.map(({image, title, subtitle, link, label}) => (
            <div className="hero-pic-container">
              <div className="hero-pic-shadow"></div>
              <div className="hero-pic-information">

                {/* TITLE */}
                <PrismicRichText field={title} components={{
                  paragraph: ({children}) =>(
                    <p className="hero-pic-title">{children}</p>
                  )
                }}/>

                {/* TEXT */}
                <PrismicRichText field={subtitle} components={{
                  paragraph: ({children}) =>(
                    <p className="hero-pic-subtitle">{children}</p>
                  )
                }}/>

                {/* BUTTON */}
                <PrismicNextLink field={link} className="button-cta hero-pic-button">{label}</PrismicNextLink>
              </div>
              
              {/* IMAGE */}
              <PrismicNextImage field={image} className="hero-image"/>
            </div>
        ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
