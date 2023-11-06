import { Button } from "@mui/material";
import React from "react";

export const SizeButton = ({ buttonTitle, isActive, isDisabled,classname, ...rest }) => {
  return (
    <Button
      variant="outlined"
      disabled={isDisabled}
      className={`!min-w-0 !font-rigidSquare !rounded-none !border-neutral-800 !text-base !font-bold !w-fit !p-2 !uppercase ${
        isActive ? "!bg-neutral-800 !text-neutral-100" : "!text-neutral-800"
      } ${
        isDisabled && "!border-neutral-300 !text-neutral-500"
      } hover:!bg-neutral-300 hover:!text-neutral-800 ${classname}`}
      {...rest}
    >
      {buttonTitle}
    </Button>
  );
};
