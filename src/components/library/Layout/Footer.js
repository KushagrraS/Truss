import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../Image/ImageView";

const Text = ({ children, ...rest }) => {
  return (
    <Typography
      component={"span"}
      fontFamily={"var(--font-rigidSquare)"}
      color={"#000000"}
      {...rest}
    >
      {children}
    </Typography>
  );
};

const Columns = ({ heading, data }) => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Text fontSize={16} fontWeight={700}>
        {heading}
      </Text>
      {data.map((value, index) => {
        return (
          <Text
            fontFamily="Inter"
            fontSize={14}
            fontWeight={400}
            key={index}
            className="cursor-pointer"
          >
            {value}
          </Text>
        );
      })}
    </Stack>
  );
};

export const Footer = ({ brands, guidesAndEditorial, popularPages }) => {
  return (
    <Box
      component={"section"}
      className="w-full border-t-[1px] border-b-[1px] border-neutral-800 p-10 xsm:px-4 xsm:py-6"
    >
      <Box
        component={"div"}
        className="flex items-start justify-between xsm:flex-col"
      >
        <Stack
          direction={"column"}
          spacing={2}
          className="w-[20%] xsm:w-[80%] xsm:mb-10"
        >
          <Box component={"picture"} className="w-[120px] h-6 !relative">
            <ImageView
              alt={"Truss Icon"}
              src={"/images/Truss.png"}
              fill={true}
              className="!relative !object-contain"
            />
          </Box>
          <Stack direction={"column"}>
            <Text fontSize={16} fontWeight={700}>
              {textUtils.footer.heading}
            </Text>
            <Text fontSize={16} fontWeight={700}>
              {textUtils.footer.subHeading}
            </Text>
          </Stack>
          <Text fontSize={11} fontWeight={400} fontFamily={"Inter"}>
            {textUtils.footer.body}
          </Text>
          <Box
            component={"button"}
            className="w-[117px] h-10 cursor-pointer !relative"
          >
            <ImageView
              src={"/images/AppStore.png"}
              fill={true}
              className="!relative !object-contain"
              alt={"App Store"}
            />
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          className="gap-10 w-[60%] xsm:w-full xsm:flex-col xsm:ml-0"
        >
          <Columns
            data={popularPages}
            heading={textUtils.footer.popularPages.popularPages}
          />
          <Columns data={brands} heading={textUtils.footer.brands.brands} />
          <Columns
            data={guidesAndEditorial}
            heading={textUtils.footer.guidesAndeditorials.guidesAndeditorials}
          />
        </Stack>
      </Box>
    </Box>
  );
};
