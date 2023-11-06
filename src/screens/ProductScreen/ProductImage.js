import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const imageData = [
  "/images/product-image-1.png",
  "/images/product-image-2.png",
];
export const ProductImage = () => {
  const [selectedImage, setSelectedImage] = React.useState(
    "/images/product-image-1.png"
  );

  const handleOnSelectImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Box className="w-[50%] h-full ml-[110px] flex mr-[39px] gap-2 xsm:px-4 xsm:w-full xsm:flex-col-reverse xsm:items-center xsm:justify-center xsm:m-0">
      <Stack direction={"column"} className="xsm:flex-row xsm:gap-[6px]">
        {imageData.map((imageValue, index) => {
          return (
            <Box
              key={index}
              className="w-[100px] h-[100px] mb-[7px] cursor-pointer transition-all ease-in hover:scale-105 bg-[#F7F7F7] flex justify-center items-center"
              onClick={() => handleOnSelectImage(imageValue)}
              style={{
                border:
                  imageData[index] === selectedImage ? "1px solid" : "0px",
              }}
            >
              <Image
                alt="Product Image"
                src={imageValue}
                fill={true}
                className="!relative !object-cover !w-[85px] !h-[85px]"
              />
            </Box>
          );
        })}
      </Stack>
      <Box
        component={"div"}
        className="relative bg-[#F7F7F7] h-[622px] w-full flex items-center justify-center xsm:h-[372px] xsm:w-full"
      >
        <Image
          src={selectedImage}
          alt="Select Product"
          fill={true}
          className="!relative !object-contain !w-[438px] !h-[438px] xsm:!w-4/5 xsm:h-[50%]"
        />
      </Box>
    </Box>
  );
};
