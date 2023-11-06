import { Box, Button, Stack } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../../../components/library/Image/ImageView";
import { ShowMoreButton } from "../../../components/library/Button/ShowMoreButton";
import { useRouter } from "next/router";

const brandsData = [
  "Polo by ralph lauren",
  "Raf simons",
  "Guess",
  "Prada",
  "Dr. Martens",
  "the north face",
];

const BrandPoster = () => {
  return (
    <Box component={"div"} className="w-full h-[452px] mt-10 flex">
      <Box className="w-[45%] h-full">
        <ImageView
          src={"/images/BrandsPoster.png"}
          alt={"Guide Image"}
          fill={true}
          className="!object-cover !relative"
        />
      </Box>
      <Box className="w-[55%] h-full bg-neutral-800 p-20 flex flex-col justify-center">
        <Box component={"span"} className="flex items-center justify-between">
          <span className="font-rigidSquare text-base text-neutral-100 font-bold">
            Hot BRAND
          </span>
        </Box>
        <article className="font-rigidSquare text-neutral-100 text-[56px] font-bold uppercase leading-[64px] mt-5">
          RAF SIMONS
        </article>
        <Box className="my-5 text-neutral-100 font-Inter text-[18px]">
          A highly influential fashion brand known for its avant-garde designs
          and innovative approach to menswear and womenswear.
        </Box>
        <Button
          variant="outlined"
          className="!border-0 !rounded-none !font-rigidSquare !bg-neutral-100 !px-5 !py-4 !w-[35%] !text-neutral-800 !text-sm !font-bold hover:!bg-neutral-800 hover:!text-neutral-100 hover:!w-[36%] !transition-all !ease-in-out hover:!delay-200 group xsm:!w-[55%] xsm:hover:!w-[60%] lg:!w-[40%] lg:hover:!w-[41%]"
          endIcon={
            <ArrowForwardIcon className="!text-neutral-800 group-hover:!text-neutral-100" />
          }
        >
          {textUtils.viewBrand}
        </Button>
      </Box>
    </Box>
  );
};

export const Brands = () => {
  const routes = useRouter();
  return (
    <Box component={"section"} className="p-10">
      <span className="text-[40px] font-rigidSquare uppercase font-bold text-neutral-800">
        {textUtils.footer.brands.brands}
      </span>
      <BrandPoster />
      <Box
        component={"div"}
        className="grid grid-cols-3 mt-10 border-[0.85px] border-neutral-800"
      >
        {brandsData.map((value, index) => {
          return (
            <div
              key={index}
              className="p-10 border-[0.85px] border-neutral-800 flex items-center justify-center cursor-pointer transition-all ease-in-out duration-500 hover:bg-neutral-300 !h-[160px]"
            >
              <span className="w-full flex justify-center font-rigidSquare text-[20px] font-bold uppercase">
                {value}
              </span>
            </div>
          );
        })}
      </Box>
      <ShowMoreButton
        title={textUtils.seeAllBrands}
        onClick={() => routes.push("/brands/allBrands")}
      />
    </Box>
  );
};
