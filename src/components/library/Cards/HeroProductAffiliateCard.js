import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { ImageView } from "../Image/ImageView";

const TextHeading = ({ title, className, ...rest }) => {
  return (
    <Typography
      variant="h6"
      fontSize={16}
      fontWeight={700}
      fontFamily={"var(--font-rigidSquare)"}
      className={`text-neutral-800 ${className}`}
      {...rest}
    >
      {title}
    </Typography>
  );
};

const TextSubHeading = ({ title, className, ...rest }) => {
  return (
    <Typography
      fontFamily={"Inter"}
      fontSize={11}
      fontWeight={400}
      className={`text-neutral-800 ${className}`}
      {...rest}
    >
      {title}
    </Typography>
  );
};

const VerticalDivider = ({ ...rest }) => {
  return (
    <Divider
      orientation="vertical"
      variant="middle"
      color="#000000"
      className="h-3"
      {...rest}
    />
  );
};
export const HeroProductAffiliateCard = () => {
  return (
    <Box className="p-3 cursor-default transition-all ease-linear delay-0 outline outline-1 outline-offset-1 outline-neutral-500 bg-neutral-100 group-hover:outline group-hover:outline-[2px] group-hover:outline-offset-[2px] group-hover:outline-neutral-800">
      <Stack direction={"row"} className="items-center gap-2">
        <Box component={"div"} className="w-10 h-10 !relative">
          <ImageView
            src={"/images/AffiliateCard.png"}
            fill={true}
            className="!relative !object-contain"
            alt={"Affiliate Card"}
          />
        </Box>
        <Stack direction={"column"}>
          <Stack direction={"row"} className="gap-2 items-center h-5">
            <TextHeading title={"£325"} />
            <VerticalDivider />
            <TextSubHeading title={"Used"} />
          </Stack>
          <Stack direction={"row"} className="gap-2 items-center h-5">
            <TextSubHeading title={"Size: 38, 41, and more"} />
            <VerticalDivider />
            <TextSubHeading title={"Location: US"} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
