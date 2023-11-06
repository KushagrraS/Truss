import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const LinkComponent = ({
  linkText,
  href,
  target,
  disabled = false,
  linkClassname,
  ...rest
}) => {
  return (
    <button
      role="link"
      className={`flex items-center w-fit text-neutral-800 font-rigidSquare text-sm font-bold uppercase hover:text-neutral-600 focus:ring-2 focus:ring-[#265CF6] disabled:text-neutral-500 ${linkClassname}`}
      disabled={disabled}
      {...rest}
    >
      <Link
        href={href}
        target={target}
        className={`${disabled && "pointer-events-none"}`}
      >
        <Typography variant="body1">{linkText}</Typography>
      </Link>
    </button>
  );
};
