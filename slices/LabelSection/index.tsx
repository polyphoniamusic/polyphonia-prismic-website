import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LabelSection`.
 */
export type LabelSectionProps = SliceComponentProps<Content.LabelSectionSlice>;

/**
 * Component for "LabelSection" Slices.
 */
const LabelSection = ({ slice }: LabelSectionProps): JSX.Element => {
  return (
    <section className="label" id="label"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="label-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="label-heading">{children}</h1>
          )
        }}/>
      </div>
    </section>
  );
};

export default LabelSection;
