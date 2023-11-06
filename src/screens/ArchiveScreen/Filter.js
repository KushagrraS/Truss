import { Box } from "@mui/material";
import React from "react";
import Brand from "./components/Brand";
import Size from "./components/Size";
import Year from "./components/Year";
import Type from "./components/Type";
import Location from "./components/Location";
import Price from "./components/Price";
import Season from "./components/Season";

export const Filter = () => {
  return (
    <Box component={"ol"} className="w-full h-full">
      <Brand />
      <Size />
      <Year />
      <Type />
      <Location />
      <Price />
      <Season />
    </Box>
  );
};
