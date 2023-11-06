import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../../components/library/Image/ImageView";

const Text = ({
  text,
  fontFamily = "var(--font-rigidSquare)",
  fontWeight,
  fontSize,
  ...rest
}) => {
  return (
    <Typography
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={"#FFFFFF"}
      {...rest}
    >
      {text}
    </Typography>
  );
};
export const SellerSpotlight = () => {
  return (
    <Box
      component={"section"}
      className="mx-10 bg-neutral-800 flex justify-between items-center border-[1px] border-neutral-800 h-[436px] xsm:flex-col-reverse xsm:h-full xsm:mx-4 md:flex-col-reverse md:h-full"
    >
      <Box
        component={"div"}
        className="w-[55%] flex flex-col p-20 xsm:w-full xsm:px-4 xsm:gap-4 xsm:p-0 xsm:pb-5 xsm:pt-6 md:w-full md:p-10 md:h-[50%] lg:p-10"
      >
        <Text
          text={textUtils.landingScreen.sellerSpotlight.heading}
          fontSize={16}
          fontWeight={700}
          className="xsm:text-base xsm:uppercase"
        />
        <Stack spacing={3}>
          <Text
            text={textUtils.landingScreen.sellerSpotlight.title}
            fontSize={56}
            fontWeight={700}
            className="xsm:text-[28px] xsm:uppercase lg:text-[46px] truncate"
          />
          <Text
            text={textUtils.landingScreen.sellerSpotlight.description}
            fontSize={18}
            fontWeight={400}
            className="text-justify xsm:text-sm xsm:text-start"
          />
          <Button
            variant="outlined"
            className="!border-0 !rounded-none !font-rigidSquare !bg-neutral-100 !px-5 py-4 w-[35%] !text-neutral-800 !text-sm !font-bold hover:!bg-neutral-800 hover:!text-neutral-100 hover:!w-[36%] !transition-all !ease-in-out !delay-200 group xsm:!w-[55%] xsm:!hover:w-[60%] lg:!w-[40%] lg:hover:!w-[41%]"
            endIcon={
              <ArrowForwardIcon className="text-neutral-800 group-hover:!text-neutral-100" />
            }
          >
            {textUtils.landingScreen.sellerSpotlight.buttonText}
          </Button>
        </Stack>
      </Box>
      <Box
        component={"picture"}
        className="w-[40%] h-[100%] relative xsm:w-full xsm:h-[50%] md:w-full md:h-[400px]"
      >
        <ImageView
          src={"/images/SellerSpotlight.png"}
          alt={"Seller Spotlight"}
          fill={true}
          className="!relative !object-cover"
        />
      </Box>
    </Box>
  );
};
