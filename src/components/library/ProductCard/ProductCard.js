import React from "react";
import { ImageView } from "../Image/ImageView";
import { Box, Stack, Typography } from "@mui/material";
import { AffiliateCard } from "../Cards/AffiliateCard";
import { TitleButton } from "../Button/TitleButton";

const ShowAffiliateCard = () => {
  return (
    <Stack
      direction={"column"}
      className="w-[50%] transition-all duration-500 ease-in-out absolute top-4 p-2 opacity-0 bg-[#FFFFFFCC] items-center gap-2 group-hover:opacity-100 xsm:w-[70%]"
    >
      {[...Array(4)].map((_, index) => {
        return <AffiliateCard key={index} />;
      })}
    </Stack>
  );
};

const ProductAvailability = ({
  handleOnProductAvailableClick,
  numberOfProductsAvailable,
}) => {
  return (
    <section className="w-full flex items-center justify-end relative left-3 top-1 z-10">
      <div
        className="bg-neutral-800 text-neutral-100 p-2 w-8 h-8 flex absolute transition-all duration-500 ease-in-out group-hover:w-[50%] cursor-default xsm:group-hover:w-[70%]"
        onClick={handleOnProductAvailableClick}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <Typography
            fontSize={12}
            fontFamily={"var(--font-rigidSquare)"}
            className="w-full flex items-center justify-center"
          >
            {numberOfProductsAvailable}
            <Typography
              fontSize={12}
              fontFamily={"var(--font-rigidSquare)"}
              className="w-full ml-1 hidden group-hover:opacity-100 group-hover:flex"
            >
              available
            </Typography>
          </Typography>
          <TitleButton
            buttonTitle={"More"}
            fontSize={12}
            fontFamily={"var(--font-rigidSquare)"}
            fontWeight={700}
            buttonClassName={
              "opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
            }
          />
        </div>
      </div>
      <ShowAffiliateCard />
    </section>
  );
};
export const ProductCard = ({
  imageSrc,
  alt,
  productTitle,
  productSubTitile,
  productDescription,
  productPrice,
  numberOfProductsAvailable,
  handleOnProductAvailableClick,
  productCardClassName,
  imageClassName,
  handleOnImageClick,
}) => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return;
  }

  return (
    <Box
      className={`p-3 border-[1px] border-neutral-800 group cursor-pointer ${productCardClassName}`}
    >
      <ProductAvailability
        handleOnProductAvailableClick={handleOnProductAvailableClick}
        numberOfProductsAvailable={numberOfProductsAvailable}
      />
      <section
        className={`bg-neutral-200 relative flex items-center justify-center w-full h-[78%] py-8 px-8 z-0 ${imageClassName}`}
        onClick={handleOnImageClick}
      >
        <ImageView
          src={imageSrc}
          alt={alt}
          fill={true}
          className="!relative !object-contain"
        />
      </section>
      <section className="mt-5 gap-2 w-full">
        <Stack direction={"row"} className="!items-center w-full" spacing={1}>
          <Typography
            variant="body1"
            fontFamily={"var(--font-rigidSquare)"}
            fontSize={18}
            fontWeight={700}
            className="text-neutral-800 uppercase xsm:truncate xsm:w-[40%]"
          >
            {productTitle}
          </Typography>
          <Typography
            variant="subtitle1"
            fontFamily={"var(--font-rigidSquare)"}
            fontSize={11}
            fontWeight={400}
            className="text-neutral-700 uppercase xsm:truncate"
          >
            {productSubTitile}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontFamily={"Inter"}
          fontSize={14}
          fontWeight={400}
          className="text-neutral-800 capitalize w-[30ch] truncate xsm:truncate xsm:w-[18ch]"
        >
          {productDescription}
        </Typography>
        <Typography
          variant="body1"
          fontFamily={"var(--font-rigidSquare)"}
          fontSize={16}
          fontWeight={700}
          className="text-neutral-800 uppercase"
        >
          {productPrice}
        </Typography>
      </section>
    </Box>
  );
};
