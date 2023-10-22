import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PublishingSection`.
 */
export type PublishingSectionProps =
  SliceComponentProps<Content.PublishingSectionSlice>;

/**
 * Component for "PublishingSection" Slices.
 */
const PublishingSection = ({ slice }: PublishingSectionProps): JSX.Element => {
  return (
    <section className="publishing" id="publishing"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="publishing-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="publishing-heading">{children}</h1>
          )
        }}/>
      </div>
    </section>
  );
};

export default PublishingSection;
