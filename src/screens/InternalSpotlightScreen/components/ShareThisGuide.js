import { Box, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { socialIcon } from "utils/dummyData";
import { textUtils } from "utils/TextContent/textUtils";

export const ShareThisGuide = () => {
  return (
    <Box
      component={"section"}
      className="w-full items-center justify-center mt-10"
    >
      <Box component={"div"} className="flex items-center justify-center">
        <span className="mr-10 font-rigidSquare text-[24px] font-bold uppercase">
          {textUtils.shareThisGuide}
        </span>
        {socialIcon.map((value, index) => (
          <Button
            key={index}
            className="!p-4 !rounded-none !border-neutral-800"
            sx={{
              borderLeft: 1.5,
              borderRadius: 1.5,
              borderTop: 1.5,
              borderBottom: 1.5,
              ":last-child": {
                borderRight: 1.5,
              },
            }}
          >
            <Image
              src={value}
              alt="Social Icon"
              fill={false}
              width={24}
              height={24}
            />
          </Button>
        ))}
      </Box>
    </Box>
  );
};
