import { Box } from "@mui/material";
import React from "react";
import { Brands } from "./components/Brands";
import { NewsLetter } from "../GuidesScreen/Guides/NewsLetter";
import { TrendingLines } from "./components/TrendingLines";
import { Lines } from "./components/Lines";
import { Designers } from "./components/Designers";


export const BrandsScreen = () => {
  return (
    <Box component={"main"}>
      <Brands />
      <TrendingLines />
      <Lines />
      <Designers/>
      <NewsLetter className={'mt-0 !border-t-0'}/>
    </Box>
  );
};
