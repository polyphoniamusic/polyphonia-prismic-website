import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogSection`.
 */
export type BlogSectionProps = SliceComponentProps<Content.BlogSectionSlice>;

/**
 * Component for "BlogSection" Slices.
 */
const BlogSection = ({ slice }: BlogSectionProps): JSX.Element => {
  return (
    <section className="blog" id="blog"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="blog-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="blog-heading">{children}</h1>
          )
        }}/>
      </div>
    </section>
  );
};

export default BlogSection;
