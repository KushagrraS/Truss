import { Box, Button, IconButton, Stack } from "@mui/material";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { sizeChartData } from "utils/dummyData";

const SizeChartHeading = ({ title, className, ...rest }) => {
  return (
    <span
      className={`font-rigidSquare font-bold text-sm uppercase ${className}`}
      {...rest}
    >
      {title}
    </span>
  );
};

const SizeChartTableHeader = ({
  sizeChartFor,
  handleSizeChartSelection,
  handleCloseSizeChartTable,
  openSizeChartTable,
}) => {
  return (
    <Box
      component={"div"}
      className="w-full flex items-center justify-between bg-neutral-300 p-3 border-[1.25px] border-neutral-800"
    >
      <Stack direction={"row"} className="items-center" spacing={1}>
        <SizeChartHeading title={`${textUtils.sizeChart}:`} />
        <Button
          variant="text"
          className="!p-0 !rounded-none !text-neutral-800"
          onClick={() =>
            handleSizeChartSelection({ filterByGender: textUtils.women })
          }
        >
          <SizeChartHeading
            title={`${textUtils.women}`}
            className={sizeChartFor === textUtils.women && "underline"}
          />
        </Button>
        <Button
          variant="text"
          className="!p-0 !rounded-none !text-neutral-800"
          onClick={() =>
            handleSizeChartSelection({ filterByGender: textUtils.men })
          }
        >
          <SizeChartHeading
            className={sizeChartFor === textUtils.men && "underline"}
            title={`${textUtils.men}:`}
          />
        </Button>
      </Stack>
      <IconButton
        onClick={handleCloseSizeChartTable}
        className="!p-0 !m-0 !rounded-none"
      >
        <KeyboardArrowUpIcon
          sx={{
            color: "#000000",
            rotate: openSizeChartTable ? "180deg" : "0deg",
          }}
          className="transition-all ease-in-out duration-500"
        />
      </IconButton>
    </Box>
  );
};

export const SizeChart = () => {
  const [sizeChartFor, setSizeChartFor] = React.useState(textUtils.women);
  const [openSizeChartTable, setOpenSizeChartTable] = React.useState(true);

  const handleSizeChartSelection = ({ filterByGender }) => {
    setSizeChartFor(filterByGender);
    setOpenSizeChartTable(true);
  };

  const handleCloseSizeChartTable = () => {
    setOpenSizeChartTable(false);
    setSizeChartFor("");
  };

  const SizeChartTable = ({ openSizeChartTable, className }) => {
    return (
      <Box
        component={"div"}
        className={`border-[1.25px] border-t-0 border-neutral-800 transition-all ease-in-out duration-500 ${
          !openSizeChartTable && "hidden"
        } ${className}`}
      >
        {sizeChartData.flatMap((value, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between py-3 bg-neutral-100 pl-3 pr-8 border-b-[1.25px] border-neutral-800 last:border-b-0 even:bg-neutral-300"
            >
              <span className="w-[3%] font-rigidSquare text-[14px] font-bold">
                {value.country}
              </span>
              {value.size.map((value, _index) => {
                return (
                  <span className="font-Inter text-[14px]" key={index}>
                    {value}
                  </span>
                );
              })}
            </div>
          );
        })}
      </Box>
    );
  };
  return (
    <Box component={"section"} className="mt-10">
      <SizeChartTableHeader
        openSizeChartTable={openSizeChartTable}
        sizeChartFor={sizeChartFor}
        handleCloseSizeChartTable={handleCloseSizeChartTable}
        handleSizeChartSelection={handleSizeChartSelection}
      />
      <SizeChartTable openSizeChartTable={openSizeChartTable} />
    </Box>
  );
};
