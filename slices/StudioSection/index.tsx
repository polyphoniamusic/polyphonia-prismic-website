import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `StudioSection`.
 */
export type StudioSectionProps =
  SliceComponentProps<Content.StudioSectionSlice>;

/**
 * Component for "StudioSection" Slices.
 */
const StudioSection = ({ slice }: StudioSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for studio_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default StudioSection;
