import { Stack, Typography } from "@mui/material";
import React from "react";

export const ProductTitle = () => {
  return (
    <Stack direction={"row"} spacing={1} className="items-center mb-3 xsm:mb-2">
      <Typography
        fontSize={18}
        fontFamily={"var(--font-rigidSquare)"}
        fontWeight={700}
        color={"#333333"}
        component={"span"}
        variant="h6"
        className="uppercase"
      >
        Prada
      </Typography>
      <Typography
        fontSize={12}
        fontFamily={"Inter"}
        fontWeight={500}
        color={"#666666"}
        component={"span"}
        variant="body2"
      >
        A/W 2001
      </Typography>
    </Stack>
  );
};
