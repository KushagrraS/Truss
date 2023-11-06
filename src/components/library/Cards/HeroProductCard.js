"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Carousel } from "@material-tailwind/react";
import { HeroProductAffiliateCard } from "./HeroProductAffiliateCard";
import { ImageView } from "../Image/ImageView";

export const HeroProductCard = ({
  alt,
  productCardData,
  heroProductClassname,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const autoplayInterval = 5000;

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productCardData.length);
    }, autoplayInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [productCardData.length]);

  return (
    <Box
      className={`bg-neutral-200 border-[1px] border-neutral-800 py-5 ${heroProductClassname}`}
    >
      <section className="w-full flex items-center justify-end pr-5">
        <HeroProductAffiliateCard />
      </section>
      <Box component={"section"} className="w-full h-[70%] px-[60px] !relative">
        <ImageView
          src={productCardData[currentIndex].imageSrc}
          alt={alt}
          fill={true}
          className={`!relative !object-contain`}
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
            {productCardData?.title}
          </Typography>
          <Typography
            fontFamily={"Inter"}
            fontSize={14}
            fontWeight={400}
            className={`text-neutral-800`}
          >{`${productCardData?.description}`}</Typography>
        </Stack>
      </section>
      <section className="w-full my-5 flex items-center justify-center gap-1">
        {productCardData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 ${
              currentIndex === index && "bg-neutral-800"
            } border-[1px] border-neutral-800 transition-colors ease-in`}
          />
        ))}
      </section>
    </Box>
  );
};
