import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

export const SkeletonProductCard = () => {
  return (
    <Box className={`!h-[466px] !w-[341px] p-3 border-[1px] border-neutral-800 first:border-l-[1px] border-l-0 xsm:!w-full xsm:!h-[270px]`}>
      <Skeleton
        variant="rectangular"
        className={`!h-[342px] !w-[317px] py-8 px-8 z-0 xsm:!w-[158px] xsm:!h-[158px]`}
      />
      <section className="mt-5 w-full">
        <Stack
          direction={"row"}
          className="!items-center w-full mb-2"
          spacing={1}
        >
          <Skeleton variant="rectangular" className="w-[50%]" />
        </Stack>
        <Skeleton variant="rectangular" className="mb-2" />
        <Skeleton variant="rectangular" />
      </section>
    </Box>
  );
};
