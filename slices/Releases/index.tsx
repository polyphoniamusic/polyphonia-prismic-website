import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Releases`.
 */
export type ReleasesProps = SliceComponentProps<Content.ReleasesSlice>;

/**
 * Component for "Releases" Slices.
 */
const Releases = ({ slice }: ReleasesProps): JSX.Element => {
  return (
    <section className="releases" id="releases"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="releases-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="releases-heading">{children}</h1>
          )
        }}/>
          <div className="releases-container-block">
          {slice.items.map(({label, cover, release_album, release_ep, release_single, release_title, link}) => (
              <div className="releases-block">
              <PrismicNextLink field={link}>
                <div className="releases-block-image-container">
                  <PrismicNextImage field={cover} className="releases-cover" />
                  <div className="releases-block-image-recover">
                    <PrismicRichText field={label} components={{
                      paragraph: ({children}) =>(
                        <h3 className="button-cta button-cta-white">{children}</h3>
                      )
                    }}/>
                  </div> 
                </div>
                </PrismicNextLink>  
                <div className="releases-card-infos">
                  <PrismicRichText field={release_title} components={{
                    paragraph: ({ children }) => (
                      <a className="releases-title">{children}</a>
                    )
                  }} />
                  <PrismicRichText field={release_album} components={{
                    paragraph: ({ children }) => (
                      <a className="releases-type releases-type-album">{children}</a>
                    )
                  }} />
                  <PrismicRichText field={release_ep} components={{
                    paragraph: ({ children }) => (
                      <a className="releases-type releases-type-ep">{children}</a>
                    )
                  }} />
                  <PrismicRichText field={release_single} components={{
                    paragraph: ({ children }) => (
                      <a className="releases-type releases-type-single">{children}</a>
                    )
                  }} />
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;
