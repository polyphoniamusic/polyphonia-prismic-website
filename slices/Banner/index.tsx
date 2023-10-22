import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice }: BannerProps): JSX.Element => {
  return (
    <section className="banner" id="banner"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="banner-container">
        {/* Banner Heading */}
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="banner-heading">{children}</h1>
          )
        }}/>

        {/* Banner Text */}
        <PrismicRichText field={slice.primary.subtitle} components={{
          paragraph: ({children}) =>(
            <p className="banner-sub-heading">{children}</p>
          )
        }}/>
      </div>
    </section>
  );
};

export default Banner;
