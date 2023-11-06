import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import React from "react";

export const SkeletonHotBrands = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  return (
    <Box
      component={"div"}
      className="flex-col flex border-[1px] border-neutral-800 bg-neutral-100 border-l-0 first:border-l-[1px]"
    >
      <Typography
        fontFamily="var(--font-rigidSquare)"
        fontSize={24}
        fontWeight={700}
        className="px-4 py-5 text-neutral-800 uppercase w-[90%] truncate xsm:text-sm xsm:p-2"
      >
        <Skeleton width={isMobile ? 100 : 200} />
      </Typography>
      <Box
        component="picture"
        className={`relative ${isMobile ? "!h-[197px]" : "!h-[342px]"} ${
          isMobile ? "!w-[174px]" : "!w-[317px]"
        } xsm:!h-[197px] xsm:!w-[174px]`}
      >
        <Skeleton
          variant="rect"
          width={isMobile ? 174 : 317}
          height={isMobile ? 197 : 342}
        />
      </Box>
    </Box>
  );
};
