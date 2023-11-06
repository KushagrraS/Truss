import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ImageView } from "../../../../components/library/Image/ImageView";
import { textUtils } from "utils/TextContent/textUtils";
import { CarouselHeader } from "./CarouselHeader";
import "./styles.css";

const GuideCard = ({
  className,
  imageClassname,
  headingClassname,
  subHeadingClassname,
  rowHeadingClassname,
  rowSubHeadingClassname,
  iconClassname,
}) => {
  return (
    <Link
      href={{
        pathname: "guides/internalSpotlight",
        query: {
          title:
            "A global guide to the best vintage stores and resale platforms",
        },
      }}
      className={`p-3 min-w-[454px] flex flex-col justify-between border-0 odd:!border-l-[#000000] odd:border-l-[1px] even:border-l-[#000000] even:border-l-[1px] odd:border-t-[#000000] odd:border-t-[1px] even:border-t-[#000000] even:border-t-[1px] hover:bg-neutral-300 group ${className}`}
    >
      <div>
        <Box
          component={"div"}
          className={`w-[100%] h-[50%] min-h-[430px] !overflow-hidden ${imageClassname}`}
        >
          <ImageView
            src={"/images/CardImage.png"}
            fill={true}
            className="!relative !object-cover transition-all ease-in-out duration-700  group-hover:scale-110"
          />
        </Box>
        <Stack direction={"column"} className="mt-5 gap-2">
          <span
            className={`font-rigidSquare text-[18px] font-bold text-neutral-800 ${headingClassname}`}
          >
            A global guide to the best vintage stores and resale platforms
          </span>
          <span
            className={`font-Inter text-[14px] font-normal text-neutral-700 ${subHeadingClassname}`}
          >
            The best vintage—wherever in the world you might land.
          </span>
        </Stack>
      </div>
      <div className="w-full flex items-center justify-between mt-[60px]">
        <Stack direction={"row"} spacing={0.5} className="items-center">
          <InstagramIcon
            sx={{ color: "#000000", width: "20px", height: "20px" }}
            className={iconClassname}
          />
          <span
            className={`font-rigidSquare text-base text-neutral-800 font-bold uppercase ${rowHeadingClassname}`}
          >
            complex
          </span>
        </Stack>
        <span
          className={`font-Inter text-[11px] text-neutral-800 font-normal ${rowSubHeadingClassname}`}
        >
          12 Jan 2023
        </span>
      </div>
    </Link>
  );
};
export const All = () => {
  return (
    <Box component={"section"} className="w-full">
      <Box className="grid grid-cols-3 border-b-[1px] border-b-[#000000] border-r-[1px] border-r-[#000000] transition-all ease-in-out animate-duration-700">
        {[...Array(6)].map((_, index) => {
          return <GuideCard key={index} />;
        })}
      </Box>
      <Box
        component={"div"}
        className="w-full h-[700px] min-h-[700px] bg-neutral-800 my-10 py-10"
      >
        <CarouselHeader title={textUtils.featuredGuides} />
        <Box component={"div"} className="mt-5">
          <div className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto mx-10 border-l-[1px] border-l-neutral-100 ">
            {[...Array(6)].map((_, index) => {
              return (
                <GuideCard
                  key={index}
                  imageClassname={"!min-h-[320px] !w-[430px]"}
                  className={
                    "!border-r-[1px] !border-r-neutral-100 !border-t-[1px] !border-t-neutral-100 !border-b-[1px] !border-b-neutral-100 hover:!bg-[#666666]"
                  }
                  headingClassname={"!text-neutral-100"}
                  subHeadingClassname={
                    "group-hover:!text-neutral-500"
                  }
                  rowHeadingClassname={"!text-neutral-100"}
                  rowSubHeadingClassname={"!text-neutral-100"}
                  iconClassname={"!text-neutral-100"}
                />
              );
            })}
          </div>
        </Box>
      </Box>
      <Box className="grid grid-cols-3 border-b-[1px] border-b-[#000000] border-r-[1px] border-r-[#000000] transition-all ease-in-out animate-duration-700">
        {[...Array(6)].map((_, index) => {
          return <GuideCard key={index} />;
        })}
      </Box>
      <Box component={"div"} className="w-full flex justify-center mt-5">
        <Button
          variant="text"
          className="!bg-neutral-800 !text-neutral-100 !text-sm !font-rigidSquare px-5 py-4 !rounded-none hover:!bg-neutral-700 transition-all ease-in-out"
        >
          {textUtils.showMore}
        </Button>
      </Box>
    </Box>
  );
};
