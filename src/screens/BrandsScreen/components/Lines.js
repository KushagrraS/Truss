import { Box } from "@mui/material";
import React from "react";
import { ShowMoreButton } from "../../../components/library/Button/ShowMoreButton";
import { textUtils } from "utils/TextContent/textUtils";
import { TrendingLinesCard } from "../../../components/library/Cards/TrendingLinesCard";

export const Lines = () => {
  return (
    <Box component={"section"} className="p-10">
      <h3 className="font-rigidSquare text-[24px] uppercase text-neutral-800 font-bold">
        {textUtils.lines}
      </h3>
      <Box component={"div"} className="grid grid-cols-3 w-full mt-5 border-neutral-800 border-r-[1px] border-b-[1px]">
        {[...Array(12)].map((_, index) => {
          return (
            <TrendingLinesCard
              title={"Ralph Lauren"}
              subTitle={"Fall/Winter 2022"}
              key={index}
              cardContainerClassName={"border-l-[1px] border-t-[1px] border-neutral-800"}
            />
          );
        })}
      </Box>
      <ShowMoreButton title={textUtils.exploreLines} />
    </Box>
  );
};
