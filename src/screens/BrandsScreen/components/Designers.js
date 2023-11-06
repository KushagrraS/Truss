import { Box } from "@mui/material";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import { ShowMoreButton } from "../../../components/library/Button/ShowMoreButton";

const designerData = [
  {
    image: "images/RafSimons.png",
    name: "Raf simons",
  },
  {
    image: "images/Anderssen&Voll.png",
    name: "Anderssen & Voll",
  },
  {
    image: "images/TommyHilfiger.png",
    name: "Tommy Hilfiger",
  },
  {
    image: "images/MiucciaPrada.png",
    name: "Miuccia Prada",
  },
  {
    image: "images/MiucciaPrada.png",
    name: "Miuccia Prada",
  },
  {
    image: "images/AlessandroMichele.png",
    name: "Alessandro Michele",
  },
  {
    image: "images/RafSimons.png",
    name: "Raf simons",
  },
];

export const Designers = () => {
  return (
    <Box component={"section"} className="p-10 bg-neutral-800">
      <h3 className="font-rigidSquare text-[24px] uppercase text-neutral-100 font-bold">
        {textUtils.designers}
      </h3>
      <Box
        component={"div"}
        className="grid grid-cols-3 place-items-center mt-5 border-[0.5px]"
      >
        {designerData.map((value, index) => {
          return (
            <div
              key={index}
              className={`w-full text-neutral-100 ${
                index === 0 || index === 6 ? "col-span-2" : ""
              } flex justify-center items-center border-[0.5px] h-[424px] bg-neutral-800 relative cursor-pointer group`}
            >
              <div className="h-[400px] w-full bg-black z-20 group-hover:opacity-20 opacity-0 absolute transition-all ease-in-out duration-300" />
              <div
                className={`${
                  index === 0 || index === 6 ? "w-[98%]" : "w-[95%]"
                } h-[400px]`}
                style={{
                  background: `url(${value.image}) center/cover no-repeat`,
                  position: "absolute",
                }}
              />
              <span
                className={`z-20 hidden group-hover:grid place-items-center font-Inter text-neutral-100 text-[14px] text-center ${
                  index === 0 || index === 6 ? "w-full" : "w-[95%]"
                }`}
              >
                {value.name} is the creative director of Carven, and former
                creative director of British label Lacoste and Joseph.
              </span>
              <ShowMoreButton
                title={value.name}
                containerClassname={"absolute bottom-[20px] z-30"}
              />
            </div>
          );
        })}
      </Box>
    </Box>
  );
};
