import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowIcon = ({ handleOnButtonClick, children, buttonStyle }) => {
  return (
    <Button
      className="!flex !items-center !justify-center"
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
      className={`flex items-center justify-between ${containerClassname}`}
    >
      <Typography
        fontFamily={"var(--font-rigidSquare)"}
        fontSize={24}
        fontWeight={700}
        color={"#000000"}
        className={`uppercase underline cursor-pointer xsm:text-lg ${titleClassname}`}
        variant="button"
        onClick={onTitleClick}
      >
        {title}
      </Typography>
      <Stack direction={"row"}>
        <ArrowIcon handleOnButtonClick={onLeftButtonClick}>
          <ArrowBackIcon
            sx={{
              color: "#000000",
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
              color: "#000000",
              width: 24,
              height: 24,
            }}
          />
        </ArrowIcon>
      </Stack>
    </Box>
  );
};
