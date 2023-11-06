import { Box, Typography } from "@mui/material";
import React from "react";
import {
  ProductTitle,
  FilterBySize,
  Availability,
  ProductDetails,
} from "./components";

export const ProductColumnLayout = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("");

  return (
    <Box className="w-[40%] mr-[96px] min-h-screen xsm:px-4 xsm:mt-10 xsm:w-full xsm:mr-0">
      <ProductTitle />
      <Box className="w-full flex flex-col !gap-6">
        <Typography
          fontSize={28}
          fontFamily={"var(--font-rigidSquare)"}
          fontWeight={700}
          color={"#333333"}
          component={"span"}
          variant="h3"
          className="flex-wrap"
        >
          Front Strap Work Jacket
        </Typography>
        <FilterBySize
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <Availability />
        <Typography
          fontFamily={"Inter"}
          fontSize={14}
          color={"#333333"}
          component={"article"}
          variant="body1"
          className="xsm:text-left xsm:text-[11px]"
        >
          Raf Simons Autumn Winter 1998 Collection ‘Radioactivity’ paid homage
          to the German electronic music group Kraftwerk, with masterful
          tailoring introduced on the runway by four models in matching
          Man-machine album cover looks. Sharp suiting, mesh knitwear and heavy
          outerwear were prominent features of the collection, with graphics
          inspired by Simons’s love of music and anarchist symbolism. 
        </Typography>
        <ProductDetails />
      </Box>
    </Box>
  );
};
