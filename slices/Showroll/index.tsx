import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Artists`.
 */
export type ArtistsProps = SliceComponentProps<Content.ArtistsSlice>;

/**
 * Component for "Artists" Slices.
 */
const Artists = ({ slice }: ArtistsProps): JSX.Element => {
  return (
    <section className="showroll" id="showroll"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="showroll-container">
        
        {/* Artists Heading */}
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="showroll-heading">{children}</h1>
          )
        }}/>
        <div className="showroll-name-block-master">
          <div className="showroll-name-block">
            <div>
              {/* Artists Names (repeatable) */}
              {slice.items.map(({name, pagelink}) => (  
                <>
                  <PrismicNextLink field={pagelink} className="showroll-name">
                    {name}
                  </PrismicNextLink>
                </>  
              ))}
            </div>

            <div>
              {/* Artists Names (repeatable) */}
              {slice.items.map(({name, pagelink}) => (  
                <>
                  <PrismicNextLink field={pagelink} className="showroll-name">
                    {name}
                  </PrismicNextLink>
                </>  
              ))}
            </div>

            <div>
              {/* Artists Names (repeatable) */}
              {slice.items.map(({name, pagelink}) => (  
                <>
                  <PrismicNextLink field={pagelink} className="showroll-name">
                    {name}
                  </PrismicNextLink>
                </>  
              ))}
            </div>

            <div>
              {/* Artists Names (repeatable) */}
              {slice.items.map(({name, pagelink}) => (  
                <>
                  <PrismicNextLink field={pagelink} className="showroll-name">
                    {name}
                  </PrismicNextLink>
                </>  
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Artists;
