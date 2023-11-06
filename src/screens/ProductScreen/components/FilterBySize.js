import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Text = ({
  title,
  variant,
  fontWeight = 700,
  color = "#333333",
  fontSize,
  ...rest
}) => {
  return (
    <Typography
      fontSize={fontSize}
      fontFamily={"var(--font-rigidSquare)"}
      fontWeight={fontWeight}
      color={color}
      component={"span"}
      variant={variant}
      {...rest}
    >
      {title}
    </Typography>
  );
};
export const FilterBySize = ({ selectedFilter, setSelectedFilter }) => {
  const handleSelectFilter = React.useCallback(
    ({ filter }) => setSelectedFilter(filter),
    [setSelectedFilter]
  );

  const handleClearFilter = () => setSelectedFilter("");

  return (
    <Stack spacing={1}>
      <Stack direction={"row"} spacing={1} className="items-center">
        <Text
          title={"Filter By Available sizes"}
          fontSize={14}
          variant={"body1"}
          className="uppercase"
        />
        <Box
          variant="text"
          className="!p-1 bg-neutral-300 capitalize text-neutral-800 rounded-none flex items-center justify-center gap-[10px] transition-transform ease-in-out animate-fade"
        >
          <Text
            title={"Clear"}
            fontSize={12}
            variant="body1"
            className="uppercase"
          />

          <IconButton
            onClick={handleClearFilter}
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
      </Stack>
      <Stack direction={"row"} className="flex-wrap mx-2 xsm:!ml-0">
        {["XXs", "Xs", "S", "M", "L"].map((value, index) => {
          return (
            <Button
              variant="outlined"
              className={`p-4 !text-center !border-[1px] !border-neutral-800 !rounded-none ${
                selectedFilter === value
                  ? "!text-neutral-100"
                  : "!text-neutral-800"
              } !font-rigidSquare !font-bold !text-base !uppercase min-w-[80px] ${
                selectedFilter === value ? "!bg-neutral-800" : "bg-neutral-100"
              } xsm:w-fit xsm:!mb-2 xsm:mr-2 xsm:ml-0`}
              onClick={() => handleSelectFilter({ filter: value })}
              key={index}
            >
              {value}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};
