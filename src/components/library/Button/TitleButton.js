import { Typography } from "@mui/material";
import React from "react";

export const TitleButton = ({
  buttonTitle,
  buttonClassName,
  fontFamily,
  fontSize,
  fontWeight,
  color,
  handleOnClick,
  ...rest
}) => {
  return (
    <div role="button" className={`${buttonClassName}`} onClick={handleOnClick}>
      <Typography
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        variant="button"
        {...rest}
        className="uppercase underline flex"
      >
        {buttonTitle}
      </Typography>
    </div>
  );
};
