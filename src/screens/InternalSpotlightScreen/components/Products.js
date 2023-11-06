import { Box } from "@mui/material";
import React from "react";
import { ProductCard } from "../../../components/library/ProductCard/ProductCard";

export const Products = () => {
  return (
    <Box component={"div"}>
      <Box className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto transition-all duration-300 ease-in">
        {[...Array(6)].map((_, index) => {
          return (
            <ProductCard
              alt={"MAISON MARGIELA"}
              numberOfProductsAvailable={2}
              productDescription={"Tabi Lows"}
              productTitle={"MAISON MARGIELA"}
              productSubTitile={`A/W 2008`}
              productPrice={"£250"}
              imageSrc={`/images/product-image-1.png`}
              productCardClassName={
                "first:border-l-[1px] border-l-0 product-card xsm:!w-[174px]"
              }
              key={index}
              imageClassName={
                "!h-[342px] !w-[317px] xsm:!h-[158px] xsm:!w-[158px] !bg-[#FAFAFA]"
              }
            />
          );
        })}
      </Box>
    </Box>
  );
};
