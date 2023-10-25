import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BrandAssetsSection`.
 */
export type BrandAssetsSectionProps =
  SliceComponentProps<Content.BrandAssetsSectionSlice>;

/**
 * Component for "BrandAssetsSection" Slices.
 */
const BrandAssetsSection = ({
  slice,
}: BrandAssetsSectionProps): JSX.Element => {
  return (
    <section className="brandassets" id="brandassets"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="brandassets-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="brandassets-heading">{children}</h1>
          )
        }}/>
      </div>
    </section>
  );
};

export default BrandAssetsSection;
