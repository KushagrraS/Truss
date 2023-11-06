"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

export const OutlinedButton = ({
  title,
  showLeftIcon = true,
  showRightIcon,
  iconWidth = 24,
  iconHeight = 24,
  lightIconSrc = "/icons/Close.png",
  darkIconSrc = "/icons/Close-Dark.png",
  handleOnLeftIconClick,
  handleOnRightIconClick,
  buttonClassName,
  ...rest
}) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);

  const onMouseOverCaptureHandler = () => {
    return setIsMouseOver(true);
  };

  const onMouseOutCaptureHandler = () => {
    if (isFocus) {
      return setIsMouseOver(true);
    }
    return setIsMouseOver(false);
  };

  const onFocus = () => {
    return setIsFocus(true);
  };

  const onBlur = () => {
    setIsMouseOver(false);
    setIsFocus(false);
  };

  return (
    <button
      className={`flex items-center justify-center bg-neutral-100 border-[1px] border-neutral-800 text-neutral-800 py-4 px-5 hover:bg-neutral-800 hover:text-neutral-100 disabled:bg-neutral-500 focus:bg-neutral-800 focus:ring-4 focus:ring-neutral-600 focus:text-neutral-100 transition-all delay-75 ease-in ${buttonClassName}`}
      onMouseOverCapture={onMouseOverCaptureHandler}
      onMouseOutCapture={onMouseOutCaptureHandler}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    >
      <div className="flex items-center gap-2">
        <Image
          src={isMouseOver || isFocus ? lightIconSrc : darkIconSrc}
          alt="Left Icon"
          loading="lazy"
          width={iconWidth}
          height={iconHeight}
          className={`${showLeftIcon ? "visible" : "hidden"}`}
          onClick={handleOnLeftIconClick}
          fill={false}
        />
        <Typography
          variant="button"
          className="!uppercase !font-rigidSquare !text-sm !font-bold"
        >
          {title}
        </Typography>
        <Image
          src={isMouseOver || isFocus ? lightIconSrc : darkIconSrc}
          alt="Right Icon"
          loading="lazy"
          width={iconWidth}
          height={iconHeight}
          className={`${showRightIcon ? "visible" : "hidden"}`}
          onClick={handleOnRightIconClick}
          fill={false}
        />
      </div>
    </button>
  );
};
