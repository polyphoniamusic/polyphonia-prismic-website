import { useState } from "react";
import NextImage from "next/image";
import { PrismicRichText } from "@prismicio/react";

export default function YouTubeLazyLoad({
  youtubeID,
}) {

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${youtubeID}`}
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="videos-player"
    />
  );
}
