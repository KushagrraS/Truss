import { Box, Button, Stack } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { socialIcon } from "utils/dummyData";

export const Share = ({className}) => {
  return (
    <Box component={"section"} className={`w-[30%] ${className}`}>
      <Stack direction={"column"} spacing={1.5}>
        <Stack direction={"row"} spacing={0.5} className="items-center">
          <InstagramIcon />
          <span className="font-rigidSquare font-bold text-neutral-800">
            GQ
          </span>
        </Stack>
        <span className="text-neutral-700 font-Inter text-[14px]">
          23 Dec 2022
        </span>
        <Box component={"div"} className="flex items-center">
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
      </Stack>
    </Box>
  );
};
