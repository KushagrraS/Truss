"use client";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { textUtils } from "utils/TextContent/textUtils";
import { ImageView } from "../Image/ImageView";
import { Dropdown } from "../Dropdown/Dropdown";
import Link from "next/link";

const link = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Archive",
    path: "/archive",
  },
  {
    title: "Guides",
    path: "/guides",
  },
  {
    title: "Brands",
    path: "/brands",
  },
  {
    title: "Editorials",
    path: "/",
  },
];

export const Header = () => {
  const router = useRouter();
  const handleOnIconClick = () => router.push("/");

  return (
    <Box
      component={"header"}
      className="w-full bg-neutral-100 border-b-[1px] border-neutral-800 sticky top-0 z-50 flex items-center h-24"
    >
      <Box
        component={"section"}
        className="w-[14%] px-10 py-9 border-r-[1px] border-r-neutral-800 h-full md:px-4 md:py-6 lg:px-4"
      >
        <Box
          component={"button"}
          className="w-[120px] h-6 !relative cursor-pointer"
          onClick={handleOnIconClick}
        >
          <ImageView
            alt={"Truss Icon"}
            src={"/images/Truss.png"}
            fill={true}
            className="!relative !object-contain"
          />
        </Box>
      </Box>
      <Box
        component={"section"}
        className="w-full px-10 border-r-[1px] border-r-neutral-800 h-full flex items-center gap-[45px] md:px-4 md:gap-5 lg:px-4 lg:w-[75%]"
      >
        <Box component={"search"} className="w-[55%] md:w-[40%] lg:w-[50%]">
          <TextField
            variant="outlined"
            className="w-full"
            placeholder={textUtils.searchBar.placeholder}
            margin="none"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" className="!h-6 !w-6 !relative">
                  <ImageView
                    src={"/icons/Search.png"}
                    alt={"Search"}
                    fill={true}
                    className="!relative !object-contain"
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-input": {
                borderRadius: 0,
                backgroundColor: "#FFFFFF",
                height: "24px",
                paddingBlock: "12px",
              },
              "& .MuiInputBase-root": {
                borderRadius: 0,
                backgroundColor: "#FFFFFF",
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#265CF6",
                },
              },
            }}
          />
        </Box>
        <Box
          component={"nav"}
          className="w-[45%] flex items-center justify-evenly md:w-full lg:w-full"
        >
          {link.map((item, index) => (
            <Link href={item.path} key={index}>
              <Typography
                fontSize={14}
                fontFamily={"var(--font-rigidSquare)"}
                fontWeight={700}
                color={"#000000"}
                className="cursor-pointer uppercase md:text-xs"
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
      <Box
        component={"section"}
        className="w-[14%] px-5 relative h-full flex items-center md:p-0 lg:px-4"
      >
        <Dropdown />
      </Box>
    </Box>
  );
};
