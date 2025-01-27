import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function LazyLoadingImage(props) {
  return (
    <div>
      <LazyLoadImage
        alt={props.alt}
        height={"100%"}
        src={props.src}
        width={"100%"}
        effect="blur"
      />
      <span>{props.caption}</span>
    </div>
  );
}
