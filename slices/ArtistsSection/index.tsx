import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArtistsSection`.
 */
export type ArtistsSectionProps = SliceComponentProps<Content.ArtistsSectionSlice>;

/**
 * Component for "ArtistsSection" Slices.
 */
const ArtistsSection = ({ slice }: ArtistsSectionProps): JSX.Element => {
  return (
    <section className="artists" id="artists"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="artists-container">
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="artists-heading">{children}</h1>
          )
        }}/>
          <div className="artists-container-block">
          {slice.items.map(({artist_image, artist_type, artist_name, page_link, label}) => (
            <div className="artists-block">
                <PrismicNextLink field={page_link} className="artists-block-image-container">
                  <PrismicNextImage field={artist_image} className="artists-cover" />
                  <div className="artists-block-image-recover">
                    <PrismicRichText field={label} components={{
                      paragraph: ({children}) =>(
                        <h3 className="button-cta button-cta-white">{children}</h3>
                      )
                    }}/>
                  </div> 
                </PrismicNextLink>  
              <div className="artists-card-infos">
                <PrismicRichText field={artist_name} components={{
                  paragraph: ({ children }) => (
                    <a className="artists-title">{children}</a>
                  )
                }} />
                <PrismicRichText field={artist_type} components={{
                  paragraph: ({ children }) => (
                    <a className="artists-type">{children}</a>
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

export default ArtistsSection;
