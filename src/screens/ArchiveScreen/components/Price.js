import React from "react";
import { Box, Slider, Typography } from "@mui/material";
import { FilterLayout } from "./FilterLayout";
import { textUtils } from "utils/TextContent/textUtils";

const PriceText = ({ price, ...rest }) => {
  return (
    <Typography
      fontFamily={"var(--font-rigidSquare)"}
      fontSize={14}
      fontWeight={700}
      color={"#000000"}
      className="uppercase"
      {...rest}
    >
      {price}
    </Typography>
  );
};

const Price = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 200]);

  const handleOnTabPress = React.useCallback(
    () => setShowFilter(!showFilter),
    [showFilter]
  );

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <FilterLayout
      title={textUtils.filter.price}
      showFilter={showFilter}
      handleOnTabPress={handleOnTabPress}
      layoutClassname="my-4"
    >
      <Box component={"section"} className="flex flex-col items-start">
        <Slider
          getAriaLabel={() => "Price Range"}
          value={priceRange}
          onChange={handlePriceRangeChange}
          min={0}
          max={1500}
          disableSwap
          sx={{
            width: "95%",
            color: "#000000",
            alignSelf: "center",
            "& .MuiSlider-thumb": {
              width: 16,
              height: 16,
              ":after": {
                padding: 0,
                width: 0,
              },
            },

            "& .MuiSlider-rail": {
              backgroundColor: "#F2F2F2",
            },
          }}
        />
        <Box
          component={"span"}
          className="flex items-start justify-between w-[95%]"
        >
          <PriceText price={"£0"} />
          <PriceText price={"£1500"} />
        </Box>
      </Box>
    </FilterLayout>
  );
};

export default Price;
