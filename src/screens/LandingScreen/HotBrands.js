import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import { textUtils } from "utils/TextContent/textUtils";
import { CarouselHeader } from "../../components/library/Header/CarouselHeader";
import { ImageView } from "../../components/library/Image/ImageView";
import "./styles.css";
import { SkeletonHotBrands } from "../../components/library/Skeleton/SkeletonHotBrands";
import { useVisibleCardCount } from "../../hooks/useVisibleCardCount";

const HotBrandsCard = ({ index, item, cardClassName }) => {
  return (
    <Box
      component={"div"}
      className={`${
        index % 2 ? "flex-col-reverse" : "flex-col"
      } flex border-[1px] border-neutral-800 bg-neutral-100 border-l-0 first:border-l-[1px] ${cardClassName}`}
    >
      <Typography
        fontFamily={"var(--font-rigidSquare)"}
        fontSize={24}
        fontWeight={700}
        className="px-4 py-5 text-neutral-800 uppercase w-[90%] truncate xsm:text-sm xsm:p-2"
      >
        {item.Brand}
      </Typography>
      <Box
        component={"picture"}
        className="relative !h-[342px] !w-[317px] xsm:!h-[197px] xsm:!w-[174px]"
      >
        <ImageView
          src={"/images/HotBrands.png"}
          alt={"Hot Brand"}
          fill={true}
          className="!relative !object-cover"
        />
      </Box>
    </Box>
  );
};

export const HotBrands = ({ data }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [hotBrandsProductData, setHotBrandsProductData] = React.useState([]);

  const visibleCardCount = useVisibleCardCount({
    containerSelector: ".product-container",
    cardSelector: ".product-card",
    cardCount: 5,
  });

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCardCount);
    }
  };

  const handleRightButtonClick = () => {
    if (startIndex + visibleCardCount < hotBrandsProductData.length) {
      setStartIndex(startIndex + visibleCardCount);
    }
  };

  const displayedCards = hotBrandsProductData.slice(
    startIndex,
    startIndex + visibleCardCount
  );

  React.useEffect(() => {
    if (data?.length > 0) {
      setHotBrandsProductData(data[3]?.garments);
    }
  }, [data]);

  return (
    <Box component={"section"} className="mx-10 my-10 xsm:mx-4">
      <CarouselHeader
        title={textUtils.landingScreen.hotBrands.heading}
        onLeftButtonClick={handleLeftButtonClick}
        onRightButtonClick={handleRightButtonClick}
      />
      <Box
        component={"div"}
        className="product-container w-full flex overflow-x-auto flex-row-container mt-5"
      >
        {data?.length > 0
          ? displayedCards.map((item, index) => {
              return (
                <HotBrandsCard
                  item={item}
                  index={index}
                  key={index}
                  cardClassName={"product-card"}
                />
              );
            })
          : [...Array(6)].map((_, index) => {
              return <SkeletonHotBrands key={index} />;
            })}
      </Box>
    </Box>
  );
};
