import { Box, Stack } from "@mui/material";
import React from "react";
import { ImageView } from "../Image/ImageView";

export const TrendingLinesCard = ({
  title,
  subTitle,
  cardContainerClassName,
  imageContainerClassName,
  imageClassName,
  titleClassName,
  subTitleClassName,
}) => {
  return (
    <Box
      component={"div"}
      className={`p-3 min-w-[454px] cursor-pointer ${cardContainerClassName}`}
    >
      <Box
        component={"div"}
        className={`!h-[80%] !relative ${imageContainerClassName}`}
      >
        <ImageView
          src={"/images/TrendingLines.png"}
          alt={"Trending Lines"}
          fill={true}
          className={`!relative !object-cover ${imageClassName}`}
        />
      </Box>
      <Stack direction={"column"} spacing={1} className="mt-5">
        <span
          className={`uppercase text-neutral-800 text-sm font-Inter ${titleClassName}`}
        >
          {title}
        </span>
        <span
          className={`uppercase text-neutral-800 text-lg font-rigidSquare font-bold ${subTitleClassName}`}
        >
          {subTitle}
        </span>
      </Stack>
    </Box>
  );
};
