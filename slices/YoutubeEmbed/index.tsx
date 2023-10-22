"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import YouTubeLazyLoad from "@/app/components/YouTubeLazyLoad";

/**
 * Props for `YoutubeEmbed`.
 */
export type YoutubeEmbedProps = SliceComponentProps<Content.YoutubeEmbedSlice>;

/**
 * Component for "YoutubeEmbed" Slices.
 */
const YoutubeEmbed = ({ slice }: YoutubeEmbedProps): JSX.Element => {
  return (
    <section
      className="videos"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <div className="videos-container">
        {/* Banner Heading */}
        <PrismicRichText field={slice.primary.heading} components={{
          paragraph: ({children}) =>(
            <h1 className="videos-heading">{children}</h1>
          )
        }}/>
        <div className="videos-container-block">
          {slice.items.map((item, index) => (
            <YouTubeLazyLoad
              key={index} // Assurez-vous d'utiliser une clé unique pour chaque élément lors de la mise en boucle
              youtubeID={item.youtubeID}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeEmbed;