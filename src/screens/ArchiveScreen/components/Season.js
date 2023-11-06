import React from "react";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import { FilterLayout } from "./FilterLayout";
import { textUtils } from "utils/TextContent/textUtils";
import { TitleButton } from "../../../components/library/Button/TitleButton";
import { seasonData } from "utils/dummyData";
import { AppContext } from "utils/AppContextProvider";

const Season = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const { selectedBrand, setSelectedBrand } = React.useContext(AppContext);

  const handleOnTabPress = React.useCallback(
    () => setShowFilter(!showFilter),
    [showFilter]
  );

  function handleOnCheckboxChange({ event, item }) {
    if (event.target.checked && !selectedBrand.includes(item)) {
      return setSelectedBrand([...selectedBrand, item]);
    }
    const filteredBrand = selectedBrand.filter((value) => value !== item);
    setSelectedBrand(filteredBrand);
  }

  return (
    <FilterLayout
      title={textUtils.filter.season}
      showFilter={showFilter}
      handleOnTabPress={handleOnTabPress}
      layoutClassname="my-4"
    >
      <Box component={"section"}>
        {seasonData.map((item, index) => {
          return (
            <Box
              className="flex items-center justify-between mb-3 last:mb-0"
              key={index}
            >
              <Stack direction={"row"} className="items-center gap-2">
                <Checkbox
                  checked={selectedBrand.includes(item) || false}
                  onChange={(event) =>
                    handleOnCheckboxChange({ event: event, item: item })
                  }
                  sx={{
                    color: "black",
                    padding: 0,
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <Typography
                  fontFamily={"var(--font-rigidSquare)"}
                  fontSize={14}
                  fontWeight={700}
                  color={"#000000"}
                  className="uppercase"
                >
                  {item}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Box>
      <TitleButton
        fontFamily={"var(--font-rigidSquare)"}
        fontSize={12}
        fontWeight={700}
        buttonTitle={"Show more"}
      />
    </FilterLayout>
  );
};

export default Season;
