import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { ProductImage } from "./ProductImage";
import { ProductColumnLayout } from "./ProductColumnLayout";
import { CarouselHeader } from "../../components/library/Header/CarouselHeader";
import { ProductCard } from "../../components/library/ProductCard/ProductCard";
import '../../app/globals.css'

export const ProductScreen = ({}) => {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <Box className="h-full mt-[27px]">
      <Box component={"section"} className="flex flex-row w-full xsm:flex-col">
        <ProductImage />
        <ProductColumnLayout />
      </Box>
      <Box component={"section"} className="mx-10 mb-16 xsm:mx-4">
        <CarouselHeader title={"Similar Items"} />
        <Box component={"div"} className="mt-5">
          <div className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto flex-row-container">
            {[...Array(6)].map((_, index) => {
              return (
                <ProductCard
                  alt={"product image"}
                  numberOfProductsAvailable={2}
                  productDescription={"Front Strap Work Jacket"}
                  productTitle={"Prada"}
                  productSubTitile={`A/W 2001`}
                  productPrice={"£325"}
                  imageSrc={`/images/product-image-1.png`}
                  productCardClassName={
                    "first:border-l-[1px] border-l-0 product-card xsm:!w-[174px]"
                  }
                  key={index}
                  imageClassName={
                    "!h-[342px] !w-[317px] xsm:!h-[158px] xsm:!w-[158px]"
                  }
                />
              );
            })}
          </div>
        </Box>
      </Box>
    </Box>
  );
};
