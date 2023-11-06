import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { textUtils } from "utils/TextContent/textUtils";
import { CarouselContainer } from "../../components/library/Cards/Carousel";

export const Hero = ({ data }) => {
  return (
    <Box
      component={"section"}
      className="mx-10 mt-10 h-[60vh] gap-5 flex items-center justify-between xsm:flex-col xsm:h-full xsm:mx-4 md:flex-col md:h-full lg:h-[70vh]"
    >
      <Stack
        spacing={2.5}
        direction={"column"}
        className="ml-10 w-full h-full justify-center xsm:ml-0 lg:ml-0 lg:w-2/4"
      >
        <Typography
          fontSize={56}
          fontFamily={"var(--font-rigidSquare)"}
          fontWeight={700}
          color={"#000000"}
          component={"span"}
          className="!leading-[64px] !w-[70%] xsm:!text-[28px] xsm:!leading-8 xsm:!w-full md:!w-full lg:!w-full"
        >
          {textUtils.landingScreen.hero.heading}
        </Typography>
        <Typography
          fontSize={18}
          fontFamily={"Inter"}
          fontWeight={400}
          color={"#000000"}
          component={"span"}
          className="xsm:!text-sm"
        >
          {textUtils.landingScreen.hero.subHeading}
        </Typography>
        <Button
          variant="outlined"
          className="!text-start !border-0 !rounded-none !font-rigidSquare !bg-neutral-800 !px-5 !py-4 !w-[38%] !text-neutral-100 !text-sm !font-bold hover:!w-[39%] hover:!transition-all hover:!ease-in-out hover:!duration-500 xsm:!w-[65%] xsm:hover:!w-[70%] lg:!w-[55%] lg:hover:!w-[58%]"
          endIcon={<ArrowForwardIcon className="text-neutral-100" />}
        >
          {textUtils.landingScreen.hero.buttonText}
        </Button>
      </Stack>
      <Box
        component={"div"}
        className="w-[42%] h-full xsm:w-full xsm:h-[450px] md:w-full md:h-[500px] lg:w-2/4 lg:h-full"
      >
        <CarouselContainer productCardData={data} />
      </Box>
    </Box>
  );
};
