import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../../../components/library/Button/PrimaryButton";

const AvailabilityContainer = () => {
  return (
    <Box
      component={"div"}
      className="w-full bg-neutral-300 p-3 flex flex-row items-center justify-between transition-all ease-in-out duration-300 hover:bg-neutral-800 group xsm:p-2"
    >
      <Stack direction={"row"} className="items-center gap-3 xsm:gap-2">
        <Box
          component={"picture"}
          className="border-[1px] border-neutral-800 w-11 h-11"
        >
          <Image
            src={"/images/AffiliateCard.png"}
            alt="Availability Image"
            fill={true}
            className="!relative !object-contain"
          />
        </Box>
        <Typography
          fontSize={28}
          fontFamily={"var(--font-rigidSquare)"}
          fontWeight={700}
          color={"#333333"}
          component={"span"}
          variant="body1"
          className="group-hover:text-neutral-100 xsm:text-2xl"
        >
          £ 325
        </Typography>
        <Divider
          orientation="vertical"
          color="#000000"
          className="h-11 w-[1.5px] xsm:h-16"
        />
        <Stack direction={"column"} className="xsm:gap-2">
          <Typography
            fontSize={12}
            fontFamily={"var(--font-rigidSquare)"}
            fontWeight={700}
            color={"#333333"}
            component={"span"}
            variant="body1"
            className="uppercase group-hover:text-neutral-100"
          >
            Size: XS
          </Typography>
          <Box component={"div"} className="xsm:flex xsm:flex-col xsm:gap-2">
            <span className="py-1 px-[10px] bg-neutral-500 mr-2 text-[11px] font-Inter text-[#000000] group-hover:text-neutral-100 group-hover:bg-neutral-700 xsm:mr-0">
              Used
            </span>
            <span className="text-[11px] font-Inter text-[#333333] group-hover:text-neutral-100">
              Location: Other
            </span>
          </Box>
        </Stack>
      </Stack>
      <PrimaryButton
        title={"BUY NOW"}
        showLeftIcon={false}
        showRightIcon={false}
        buttonClassName={
          "!px-5 !py-3 group-hover:bg-neutral-100 xsm:!p-3 xsm:h-fit"
        }
        textClassName={"group-hover:!text-neutral-800"}
      />
    </Box>
  );
};

export const Availability = () => {
  return (
    <Box component={"div"}>
      <Typography
        fontSize={14}
        fontFamily={"var(--font-rigidSquare)"}
        fontWeight={700}
        color={"#333333"}
        component={"span"}
        variant="body1"
      >
        Availability (2 Left)
      </Typography>
      <Stack className="gap-2 mt-2 xsm:w-full">
        {[...Array(2)].map((_, index) => {
          return <AvailabilityContainer key={index} />;
        })}
      </Stack>
    </Box>
  );
};
