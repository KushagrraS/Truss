import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ImageView } from "../../components/library/Image/ImageView";
import { textUtils } from "utils/TextContent/textUtils";

export const Banner = () => {
  return (
    <Box
      component={"section"}
      className="flex items-center justify-center gap-5 relative mt-10 xsm:flex-col xsm:gap-6 xsm:mb-[60px] md:mx-10 xsm:mx-4"
    >
      <Box
        component={"picture"}
        className="w-[40%] h-[469px] xsm:w-full xsm:h-full md:w-[50%]"
      >
        <Box
          component={"div"}
          className="h-[469px] absolute left-0 top-4 xsm:relative md:relative md:top-0 lg:relative lg:top-0"
        >
          <ImageView
            src={"/images/App.png"}
            alt="App"
            fill={true}
            className="!relative !object-contain xsm:!object-cover md:!object-cover lg:!object-cover"
          />
        </Box>
      </Box>
      <Box component={"div"} className="relative xsm:px-4 xsm:mt-4 md:w-[50%]">
        <Stack direction={"column"} className="gap-6 xsm:gap-4">
          <Typography
            variant="h1"
            fontFamily={"var(--font-rigidSquare)"}
            fontSize={56}
            fontWeight={700}
            color={"#000000"}
            className="xsm:text-[32px]"
          >
            {textUtils.landingScreen.banner.valueThePast}
          </Typography>
          <Typography variant="body1" className="xsm:text-sm">
            {textUtils.landingScreen.banner.subHeading}
          </Typography>
          <Box component={"button"} className="w-[164px] h-14 cursor-pointer">
            <ImageView
              src={"/images/AppStore.png"}
              fill={true}
              className="!relative !object-contain"
              alt={"App Store"}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
