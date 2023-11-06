import React from "react";
import Image from "next/image";

export const ImageView = ({ src, alt, width, height, fill, ...rest }) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      quality={100}
      width={width}
      height={height}
      sizes="100%"
      {...rest}
    />
  );
};
