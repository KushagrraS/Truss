import { Box, Stack } from "@mui/material";
import React from "react";
import { CarouselHeader } from "../../GuidesScreen/Guides/RecentGuides.js/CarouselHeader";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../../../components/library/Image/ImageView";
import { TrendingLinesCard } from "../../../components/library/Cards/TrendingLinesCard";
import { IndeterminateCheckBoxOutlined } from "@mui/icons-material";

export const TrendingLines = () => {
  return (
    <Box
      component={"div"}
      className="w-full h-full min-h-[516px] bg-neutral-800 py-10"
    >
      <CarouselHeader title={textUtils.trendingLines} />
      <Box component={"div"} className="mt-5">
        <div className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto mx-10 border-l-[1px] border-l-neutral-100 ">
          {[...Array(6)].map((_, index) => {
            return (
              <TrendingLinesCard
                title={"NUMBER (N)INE"}
                subTitle={"Fall 2023 Menswear"}
                key={index}
                cardContainerClassName={
                  "!border-r-[1px] !border-r-neutral-100 !border-t-[1px] !border-t-neutral-100 !border-b-[1px] !border-b-neutral-100 hover:!bg-[#666666]"
                }
                titleClassName={'!text-neutral-100'}
                subTitleClassName={'!text-neutral-100'}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
};
