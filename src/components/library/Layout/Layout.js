"use client";

import "tailwindcss/tailwind.css";
import "../../../app/globals.css";

import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import localFont from "next/font/local";
import { Footer } from "./Footer";
import {
  brands,
  guidesAndEditorial,
  popularPages,
  miscellaneous,
} from "./data";
import { Header } from "./Header";
import { MobileHeader } from "./MobileHeader";

const rigidSquare = localFont({
  src: [
    {
      path: "../../../../public/fonts/RigidSquare-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../../public/fonts/RigidSquare-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../../public/fonts/RigidSquare-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/RigidSquare-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../../public/fonts/RigidSquare-Thin.ttf",
      weight: "200",
    },
  ],
  variable: "--font-rigidSquare",
});

export const Layout = ({ children }) => {
  const mobileView = useMediaQuery("(max-width:700px)");
  return (
    <Box
      component={"main"}
      className={`h-full 2xl:w-[80%] 2xl:mx-auto xsm:w-full ${rigidSquare.variable}`}
    >
      {mobileView ? <MobileHeader /> : <Header />}
      <Box component={"section"}> {children}</Box>
      <Box component={"footer"}>
        <Footer
          brands={brands}
          guidesAndEditorial={guidesAndEditorial}
          popularPages={popularPages}
        />
        <Box
          component={"section"}
          className="flex items-center gap-4 px-10 my-5 xsm:w-full xsm:justify-evenly"
        >
          {miscellaneous.map((value, index) => {
            return (
              <Typography
                fontFamily="Inter"
                fontSize={11}
                fontWeight={400}
                key={index}
                className="cursor-pointer text-neutral-800"
              >
                {value}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
