import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `ContactSection`.
 */
export type ContactSectionProps =
  SliceComponentProps<Content.ContactSectionSlice>;

/**
 * Component for "ContactSection" Slices.
 */
const ContactSection = ({ slice }: ContactSectionProps): JSX.Element => {
  return (
    <section className="contact" id="contact"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="contact-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="contact-heading">{children}</h1>
          )
        }}/>
        {slice.items.map(({type, label, email}) => (
          <>
            <div className="contact-block">
              <PrismicRichText field={type} components={{
                paragraph: ({children}) =>(
                  <h1 className="contact-block-type">{children}</h1>
                )
              }}/>
              <PrismicNextLink field={email} className="contact-block-email">{label}</PrismicNextLink>
            </div>  
          </>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
