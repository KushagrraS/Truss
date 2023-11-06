import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Stack, Typography, Box, IconButton } from "@mui/material";
import { HeroProductAffiliateCard } from "./HeroProductAffiliateCard";
import { ImageView } from "../Image/ImageView";

export const CarouselContainer = ({
  productCardData,
  carouselClassname,
  ...rest
}) => {
  return (
    <Carousel
      autoplay
      loop
      className={`!bg-neutral-200 hover:outline hover:outline-offset-2 hover:outline-2 py-5 overflow-hidden group ${carouselClassname}`}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2 z-10">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 cursor-pointer transition-all content-[''] ${
                activeIndex === i
                  ? "bg-black"
                  : " border-[1px] border-neutral-800"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={() => <IconButton className="!hidden" />}
      nextArrow={() => <IconButton className="!hidden" />}
      {...rest}
    >
      {productCardData?.length > 0 &&
        productCardData[0]?.garments.map((value, index) => {
          return (
            <Box component={"section"} key={index} className="w-full h-full">
              <section className="w-full flex items-center justify-end pr-5">
                <HeroProductAffiliateCard />
              </section>
              <Box
                component={"section"}
                className="w-full h-[70%] px-[60px] !relative"
              >
                <ImageView
                  src={`${process.env.REACT_APP_HIGH_RES_IMAGES_BASE_URL}${value.images[0]}`}
                  alt={"carousel"}
                  fill={true}
                  className={`!relative !object-contain !bg-[#FAFAFA]`}
                />
              </Box>
              <section className="w-full text-center">
                <Stack direction={"column"} spacing={0.5}>
                  <Typography
                    fontFamily={"var(--font-rigidSquare)"}
                    fontSize={18}
                    fontWeight={700}
                    className={`text-neutral-800`}
                  >
                    {value?.Brand}
                  </Typography>
                  <Typography
                    fontFamily={"Inter"}
                    fontSize={14}
                    fontWeight={400}
                    className={`text-neutral-800`}
                  >{`${value?.name}`}</Typography>
                </Stack>
              </section>
            </Box>
          );
        })}
    </Carousel>
  );
};
