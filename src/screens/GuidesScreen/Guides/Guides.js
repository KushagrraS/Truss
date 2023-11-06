import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../../../components/library/Image/ImageView";

export const Guides = () => {
  return (
    <Box component={"section"} className="px-10">
      <Typography
        fontFamily={"var(--font-rigidSquare)"}
        fontSize={40}
        fontWeight={700}
        color={"#000000"}
        component={"span"}
        variant="h2"
        className="uppercase"
      >
        {textUtils.guides}
      </Typography>
      <Box component={"div"} className="w-full h-[452px] mt-10 flex">
        <Box className="w-2/5 h-full">
          <ImageView
            src={"/images/Guides.png"}
            alt={"Guide Image"}
            fill={true}
            className="!object-cover !relative"
          />
        </Box>
        <Box className="w-[60%] h-full bg-neutral-800 p-20">
          <Box component={"span"} className="flex items-center justify-between">
            <Stack direction={"row"} spacing={0.5} className="items-center">
              <InstagramIcon
                sx={{ color: "#FFFFFF", width: "20px", height: "20px" }}
              />
              <span className="font-rigidSquare text-base text-neutral-100 font-bold">
                GQ
              </span>
            </Stack>
            <span className="font-Inter text-[11px] font-normal text-neutral-100">
              23 Dec 2022
            </span>
          </Box>
          <article className="font-rigidSquare text-neutral-100 text-[56px] font-bold uppercase leading-[64px] mt-4">
            Shop the GQ Guide to Tunnel Style
          </article>
          <Box className="my-6 text-neutral-100 font-Inter text-[18px]">
            Everything you need to equip yourself like a champion, all in one
            place.
          </Box>
          <Button
            variant="outlined"
            className="!border-0 !rounded-none font-rigidSquare bg-neutral-100 px-5 py-4 w-[35%] text-neutral-800 text-sm font-bold hover:bg-neutral-800 hover:text-neutral-100 hover:w-[36%] hover:transition-all hover:ease-in-out hover:delay-200 group xsm:w-[55%] xsm:hover:w-[60%] lg:w-[40%] lg:hover:w-[41%]"
            endIcon={
              <ArrowForwardIcon className="text-neutral-800 group-hover:!text-neutral-100" />
            }
          >
            {textUtils.viewGuide}
          </Button>
        </Box>
      </Box>
      <Box
        component={"section"}
        className="flex items-center justify-between mt-10"
      >
        <Box className="w-full flex justify-start items-center gap-6">
          {[...Array(3)].map((_, index) => (
            <Divider
              orientation="horizontal"
              className={`w-[31%] h-[2px] ${
                index === 0 ? "bg-neutral-800" : "bg-neutral-500"
              }`}
              key={index}
            />
          ))}
        </Box>
        <Stack direction={"row"} className="items-center">
          <IconButton className="!p-2 !rounded-none hover:bg-neutral-800 group transition-all ease-in-out duration-500">
            <ArrowBackIcon
              sx={{ color: "#000000" }}
              className="group-hover:!text-neutral-100"
            />
          </IconButton>
          <IconButton className="!p-2 !rounded-none hover:bg-neutral-800 group transition-all ease-in-out duration-500">
            <ArrowForwardIcon
              sx={{ color: "#000000" }}
              className="group-hover:!text-neutral-100"
            />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
