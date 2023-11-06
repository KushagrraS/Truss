import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowIcon = ({
  handleOnButtonClick,
  children,
  buttonStyle,
  arrowClassname,
}) => {
  return (
    <Button
      className={`!flex !items-center !justify-center ${arrowClassname}`}
      sx={{
        border: "1px solid #000000",
        borderRadius: 0,
        padding: 0,
        width: 56,
        height: 56,
        ...buttonStyle,
      }}
      onClick={handleOnButtonClick}
    >
      {children}
    </Button>
  );
};

export const CarouselHeader = ({
  onLeftButtonClick,
  onRightButtonClick,
  onTitleClick,
  title,
  containerClassname,
  titleClassname,
}) => {
  return (
    <Box
      component={"span"}
      className={`flex items-center justify-between border-[1px] border-neutral-100 mx-10 ${containerClassname}`}
    >
      <Box
        component={"div"}
        className="px-10 border-r-[1px] border-r-neutral-100 h-full min-h-[55px] flex items-center justify-center hover:pr-14 transition-all ease-in-out duration-500"
      >
        <Typography
          fontFamily={"var(--font-rigidSquare)"}
          fontSize={24}
          fontWeight={700}
          color={"#FFFFFF"}
          className={`uppercase cursor-pointer xsm:text-lg ${titleClassname}`}
          variant="button"
          onClick={onTitleClick}
        >
          {title}
        </Typography>
      </Box>
      <Stack direction={"row"} className="!border-l-[1px] !border-neutral-100">
        <ArrowIcon
          handleOnButtonClick={onLeftButtonClick}
          arrowClassname={"!border-r-[1px] !border-r-neutral-100"}
        >
          <ArrowBackIcon
            sx={{
              color: "#FFFFFF",
              width: 24,
              height: 24,
            }}
          />
        </ArrowIcon>
        <ArrowIcon
          handleOnButtonClick={onRightButtonClick}
          buttonStyle={{
            borderLeft: 0,
          }}
        >
          <ArrowForwardIcon
            sx={{
              color: "#FFFFFF",
              width: 24,
              height: 24,
            }}
          />
        </ArrowIcon>
      </Stack>
    </Box>
  );
};
