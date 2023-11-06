import { Box, Button } from "@mui/material";
import React from "react";

export const ShowMoreButton = ({ title, containerClassname, ...rest }) => {
  return (
    <Box
      component={"div"}
      className={`w-full flex justify-center mt-5 ${containerClassname}`}
    >
      <Button
        variant="text"
        className="!bg-neutral-800 !text-neutral-100 !text-sm !font-rigidSquare px-5 py-4 !rounded-none hover:!bg-neutral-700 transition-all ease-in-out"
        {...rest}
      >
        {title}
      </Button>
    </Box>
  );
};
