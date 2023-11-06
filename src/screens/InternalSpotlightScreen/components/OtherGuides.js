import { Box } from "@mui/material";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import { CarouselHeader } from "../../../components/library/Header/CarouselHeader";
import { GuideCard } from "../../../components/library/Cards/GuideCard";

export const OtherGuides = () => {
  return (
    <Box
      component={"section"}
      className="mx-10 border-neutral-800 border-t-[1px] mb-10"
    >
      <CarouselHeader
        title={textUtils.otherGuides}
        containerClassname={"mt-10"}
      />
      <Box component={"div"} className="mt-5">
        <div className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto border-l-[1px] border-l-neutral-100 ">
          {[...Array(6)].map((_, index) => {
            return (
              <GuideCard
                pathname={"./"}
                key={index}
                className={"border-b-[1px] border-b-neutral-800"}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
};
