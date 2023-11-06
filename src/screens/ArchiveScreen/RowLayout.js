import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { filterData } from "utils/dummyData";
import { textUtils } from "utils/TextContent/textUtils";

export const RowLayout = (props) => {
  const { showFilterDrawer, setShowFilterDrawer } = props;
  const isMobile = useMediaQuery("(max-width:700px)");

  const [dropdownFilterValue, setDropdownFilterValue] =
    React.useState("Featured");

  const toggleDrawer = React.useCallback(
    () => setShowFilterDrawer(!showFilterDrawer),
    [setShowFilterDrawer, showFilterDrawer]
  );

  return (
    <Box
      component={"header"}
      className="w-full flex items-center justify-between gap-8 xsm:flex-col xsm:items-start"
    >
      <Box
        component={"div"}
        className="!bg-neutral-800 !text-neutral-100 !w-[28%] !rounded-none px-6 py-4 xsm:!w-full"
        onClick={() => isMobile && toggleDrawer()}
      >
        <Stack direction={"row"} spacing={1} className="w-full">
          <Image
            src={"/icons/Filter.png"}
            alt="Filter Icon"
            fill={true}
            className="!relative object-contain !w-6 !h-6"
          />
          <Typography
            fontWeight={700}
            fontSize={16}
            className="!font-rigidSquare"
          >
            {textUtils.filter.title}
          </Typography>
        </Stack>
      </Box>
      <Box
        component={"div"}
        className="w-full flex items-center justify-between"
      >
        <Typography
          fontWeight={700}
          fontSize={16}
          fontFamily={"var(--font-rigidSquare)"}
        >
          {`5,762 Items`}
        </Typography>

        <Select
          value={dropdownFilterValue}
          onChange={(e) => setDropdownFilterValue(e.target.value)}
          className="!w-fit min-w-[12%] !h-[48px] !p-3"
          IconComponent={() => <KeyboardArrowDownIcon />}
          sx={{
            "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input": {
              padding: 0,
              marginRight: 2,
              fontFamily: "var(--font-rigidSquare)",
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
            },
          }}
        >
          {filterData.map((value, index) => {
            return (
              <MenuItem
                value={value.value}
                className="px-5 py-4 text-sm !uppercase font-bold mb-1 bg-neutral-100"
                key={index}
              >
                {value.lable}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};
