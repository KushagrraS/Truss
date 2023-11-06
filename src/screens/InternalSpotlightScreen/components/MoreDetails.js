import { Box } from "@mui/material";
import React from "react";
import { ProductCard } from "../../../components/library/ProductCard/ProductCard";

export const MoreDetails = () => {
  return (
    <Box component={"section"} className="mt-10 flex justify-between gap-10">
      <Box component={"div"} className="w-[45%]">
        <p className="text-lg font-Inter text-left">
          Fans of the Milanese label Prada tend to have two things in common: an
          appreciation for intellectualism in design and a desire to wear it in
          an artful but still pretty way. The brand’s creative head, Miuccia
          Prada, is known for her ability to divine the future of fashion and
          launching seismic-force trends that ripple through the industry with
          impressive—and lasting—effects.Prada appears to have had a magic touch
          from the very start. Having earned a doctorate in political science,
          she had blithely set on a career as a mime when duty called in the
          form of the family store.
        </p>
      </Box>
      <Box component={"div"} className="w-[45%] grid grid-cols-2 !border-[0.25px] border-neutral-800">
        {[...Array(4)].map((_, index) => {
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
                "!w-full product-card xsm:!w-[174px] !border-[0.5px]"
              }
              key={index}
              imageClassName={
                "!w-auto xsm:!h-[158px] xsm:!w-[158px] !bg-[#FAFAFA]"
              }
            />
          );
        })}
      </Box>
    </Box>
  );
};
