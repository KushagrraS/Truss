import React from "react";
import { Box } from "@mui/material";
import { Guides } from "./Guides/Guides";
import { RecentGuides } from "./Guides/RecentGuides.js";
import { NewsLetter } from "./Guides/NewsLetter";

export const GuidesScreen = () => {
  return (
    <Box component={"main"} className="mt-10">
      <Guides />
      <RecentGuides />
      <NewsLetter />
    </Box>
  );
};
