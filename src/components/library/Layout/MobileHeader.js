import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ImageView } from "../Image/ImageView";
import { Dropdown } from "../Dropdown/Dropdown";

export const MobileHeader = () => {
  return (
    <Box
      component={"header"}
      className="w-full bg-neutral-100 border-b-[1px] border-neutral-800 !sticky !top-0 !z-[99] flex items-center justify-between h-[72px] px-4"
    >
      <Stack direction={"row"} className="items-center">
        <IconButton className="!p-0 !m-0 !w-6 !h-6 !relative !mr-[14px]">
          <ImageView
            alt={"Menu Icon"}
            src={"/icons/Menu.png"}
            fill={true}
            className="!relative !object-contain"
          />
        </IconButton>
        <Box component={"picture"} className="w-[100px] h-5 !relative">
          <ImageView
            alt={"Truss Icon"}
            src={"/images/Truss.png"}
            fill={true}
            className="!relative !object-contain"
          />
        </Box>
      </Stack>
      <Stack direction={"row"} className="items-center">
        <IconButton className="!p-0 !m-0 h-6 w-6 !relative !mr-5">
          <ImageView
            src={"/icons/Search.png"}
            alt={"Search"}
            fill={true}
            className="!relative !object-contain"
          />
        </IconButton>
        <Box component={"section"} className="w-[78px] relative h-full flex">
          <Dropdown />
        </Box>
      </Stack>
    </Box>
  );
};
