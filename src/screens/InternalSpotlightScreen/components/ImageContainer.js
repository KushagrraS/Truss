import { Box } from "@mui/material";
import React from "react";
import { ImageView } from "../../../components/library/Image/ImageView";

export const ImageContainer = () => {
  return (
    <Box component={"section"} className="w-full flex justify-center">
      {[...Array(3)].map((_, index) => {
        return (
          <Box component={'picture'} key={index} className="relative h-[480px]">
            <ImageView
              src={"/images/Guides.png"}
              alt={"Image"}
              fill={true}
              className="!object-cover !relative"
            />
          </Box>
        );
      })}
    </Box>
  );
};
