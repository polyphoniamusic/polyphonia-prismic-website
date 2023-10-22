import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PrivacySection`.
 */
export type PrivacySectionProps =
  SliceComponentProps<Content.PrivacySectionSlice>;

/**
 * Component for "PrivacySection" Slices.
 */
const PrivacySection = ({ slice }: PrivacySectionProps): JSX.Element => {
  return (
    <section className="privacy" id="privacy"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="privacy-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="privacy-heading">{children}</h1>
          )
        }}/>
      </div>
    </section>
  );
};

export default PrivacySection;
