import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const FilterLayout = ({
  children,
  showFilter,
  handleOnTabPress,
  title,
  layoutClassname,
}) => {
  return (
    <Box className={layoutClassname}>
      <Box
        component={"button"}
        className="flex w-full h-full items-center justify-between cursor-pointer py-3 mb-3"
        onClick={handleOnTabPress}
      >
        <Typography
          fontFamily={"var(--font-rigidSquare)"}
          fontSize={16}
          fontWeight={700}
          color={"#000000"}
          className="uppercase"
        >
          {title}
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            height: 24,
            width: 24,
          }}
          className={`transition-all ease-in-out duration-500 ${
            showFilter && "rotate-180"
          }`}
        />
      </Box>
      <Box
        component={"section"}
        className={`${
          showFilter ? "flex" : "hidden"
        } flex-col transition-all duration-500 ease-out gap-3 !mb-3`}
      >
        {children}
      </Box>
      <Divider
        sx={{
          bgcolor: "#000000",
        }}
      />
    </Box>
  );
};
