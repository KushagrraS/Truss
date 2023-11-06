import React from "react";
import { Box, Typography } from "@mui/material";
import { FilterLayout } from "./FilterLayout";
import { textUtils } from "utils/TextContent/textUtils";
import { SizeButton } from "../../../components/library/Button/SizeButton";
import { sizeData } from "utils/dummyData";

const Size = () => {
  const [showFilter, setShowFilter] = React.useState(false);

  const handleOnTabPress = React.useCallback(
    () => setShowFilter(!showFilter),
    [showFilter]
  );
  return (
    <FilterLayout
      title={textUtils.filter.size}
      showFilter={showFilter}
      handleOnTabPress={handleOnTabPress}
      layoutClassname="my-4"
    >
      <Box component={"section"} className="h-full overflow-scroll">
        {sizeData.map((item, index) => {
          return (
            <Box component={"div"} key={index} className="flex flex-col mb-3">
              <Typography
                fontFamily={"Inter"}
                fontSize={12}
                fontWeight={700}
                className="text-neutral-800 uppercase"
              >
                {item.title}
              </Typography>
              <Box
                component={"div"}
                className="w-full flex items-center flex-wrap gap-2 mt-2"
              >
                {item.size.map((value, index) => {
                  return <SizeButton buttonTitle={value} key={index} />;
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </FilterLayout>
  );
};

export default Size;
