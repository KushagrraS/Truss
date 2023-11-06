import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { ImageView } from "../Image/ImageView";

const TextHeading = ({ title, className, ...rest }) => {
  return (
    <Typography
      variant="h6"
      fontSize={11}
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
      {"Size: " + title}
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
export const AffiliateCard = () => {
  return (
    <Box className="p-[6px] cursor-pointer transition-all ease-linear delay-0 hover:bg-neutral-400">
      <Stack direction={"row"} className="items-center gap-2">
        <div className="w-5 h-5 !relative">
          <ImageView
            src={"/images/AffiliateCard.png"}
            fill={true}
            className="!relative bg-cover"
            alt={"Affiliate Card"}
          />
        </div>
        <Stack direction={"row"} className="gap-2 items-center h-5">
          <TextHeading title={"£325"} />
          <VerticalDivider />
          <TextSubHeading title={"XS"} />
        </Stack>
      </Stack>
    </Box>
  );
};
