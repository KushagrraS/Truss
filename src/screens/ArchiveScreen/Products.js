import { Box, Stack, IconButton, Typography } from "@mui/material";
import React from "react";
import { ProductCard } from "../../components/library/ProductCard/ProductCard";
import { AppContext } from "utils/AppContextProvider";
import ClearIcon from "@mui/icons-material/Clear";
import { TitleButton } from "../../components/library/Button/TitleButton";
import { textUtils } from "utils/TextContent/textUtils";
import { PrimaryButton } from "../../components/library/Button/PrimaryButton";
import { useRouter } from "next/navigation";

const SelectedBrandChip = ({ value, index, handleOnRemoveBrandChip }) => {
  return (
    <Box
      variant="text"
      key={index}
      className="!p-2 bg-neutral-300 capitalize text-neutral-800 rounded-none flex items-center justify-center gap-2 transition-transform ease-in-out animate-fade"
    >
      <Typography
        component={"span"}
        variant="body1"
        fontFamily={"Inter"}
        fontSize={14}
        fontWeight={400}
      >
        {value}
      </Typography>
      <IconButton
        onClick={handleOnRemoveBrandChip}
        sx={{
          padding: 0,
        }}
      >
        <ClearIcon
          sx={{
            width: "16px",
            height: "16px",
            color: "#000000",
          }}
        />
      </IconButton>
    </Box>
  );
};

export const Products = () => {
  const { selectedBrand, setSelectedBrand } = React.useContext(AppContext);

  const router = useRouter();

  function handleOnRemoveBrandChip() {
    const { value } = arguments[0];

    const filteredBrand = selectedBrand.filter((item) => item !== value);
    setSelectedBrand(filteredBrand);
  }

  function handleOnClearAll() {
    setSelectedBrand([]);
  }

  return (
    <Box component={"section"}>
      <Box
        component={"span"}
        className={`w-full flex items-center justify-between transition-all ease-in-out duration-500 ${
          selectedBrand.length > 0 && "mb-5"
        }`}
      >
        <Box className="w-[90%] flex gap-2 flex-wrap transition-all animate-ease-in duration-200">
          {selectedBrand.map((value, index) => (
            <SelectedBrandChip
              key={index}
              value={value}
              index={index}
              handleOnRemoveBrandChip={() =>
                handleOnRemoveBrandChip({ value, index })
              }
            />
          ))}
        </Box>
        <TitleButton
          buttonTitle={textUtils.filter.clearAll}
          fontSize={12}
          fontFamily={"var(--font-rigidSquare)"}
          fontWeight={700}
          buttonClassName={`transition-all animate-ease-in duration-500 animate-fade ${
            selectedBrand.length > 0 ? "flex" : "hidden"
          }`}
          handleOnClick={handleOnClearAll}
        />
      </Box>
      <Box className="grid grid-cols-3 w-full border-b-[1px] border-b-[#000000] border-r-[1px] border-r-[#000000] transition-all ease-in-out animate-duration-700 animate-fade-down xsm:grid-cols-2">
        {[...Array(30)].map((_, index) => {
          return (
            <ProductCard
              handleOnImageClick={() => router.push("product/111")}
              imageSrc={"/images/Product-Card.png"}
              alt={"Product image"}
              numberOfProductsAvailable={2}
              productTitle={"Prada "}
              productSubTitile={"A/W 2001"}
              productDescription={"Front Strap Work Jacket"}
              productPrice={"£325"}
              key={index}
              imageClassName={"!h-[342px] xsm:!h-[60%]"}
              productCardClassName={
                "!h-[466px] !border-0 odd:!border-l-[#000000] odd:!border-l-[1px] even:!border-l-[#000000] even:!border-l-[1px] odd:!border-t-[#000000] odd:!border-t-[1px] even:!border-t-[#000000] even:!border-t-[1px] xsm:!h-[274px] xsm:!w-[172px]"
              }
            />
          );
        })}
      </Box>
      <Box component={"div"} className="w-full flex justify-center mt-5">
        <Stack direction={"column"} spacing={2.5} className="items-center">
          <Typography
            fontFamily={"var(--font-rigidSquare)"}
            fontSize={16}
            fontWeight={700}
            color={"#000000"}
            component={"span"}
            variant="caption"
            className="uppercase"
          >
            Showing 15 of 5,762
          </Typography>
          <PrimaryButton
            showRightIcon={false}
            showLeftIcon={false}
            title={"Show more"}
            buttonClassName={"px-5 py-4 w-fit"}
          />
        </Stack>
      </Box>
    </Box>
  );
};
