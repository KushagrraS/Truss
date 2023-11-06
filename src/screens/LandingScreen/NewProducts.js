import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import { ProductCard } from "../../components/library/ProductCard/ProductCard";
import "./styles.css";
import { CarouselHeader } from "../../components/library/Header/CarouselHeader";
import { textUtils } from "utils/TextContent/textUtils";
import { SkeletonProductCard } from "../../components/library/Skeleton/SkeletonProductCard";
import { useVisibleCardCount } from "../../hooks/useVisibleCardCount";

export const NewProducts = ({ data }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [newProductData, setNewProductData] = React.useState([]);

  const visibleCardCount = useVisibleCardCount({
    containerSelector: ".product-container",
    cardSelector: ".product-card",
  });

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - visibleCardCount);
    }
  };

  const handleRightButtonClick = () => {
    if (startIndex + visibleCardCount < newProductData.length) {
      setStartIndex(startIndex + visibleCardCount);
    }
  };

  const displayedCard = newProductData.slice(
    startIndex,
    startIndex + visibleCardCount
  );

  React.useEffect(() => {
    if (data?.length > 0) {
      setNewProductData(data[3]?.garments);
    }
  }, [data]);

  return (
    <Box component={"section"} className="mx-10 mt-10 xsm:mx-4">
      <CarouselHeader
        title={textUtils.landingScreen.newProducts.newProducts}
        onLeftButtonClick={handleLeftButtonClick}
        onRightButtonClick={handleRightButtonClick}
      />
      <Box component={"div"} className="mt-5">
        <div className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto">
          {data?.length > 0
            ? displayedCard.map((item, index) => {
                return (
                  <ProductCard
                    alt={item.name}
                    numberOfProductsAvailable={2}
                    productDescription={item.name}
                    productTitle={item.Brand}
                    productSubTitile={`${item.Season} ${item.Year}`}
                    productPrice={"£325"}
                    imageSrc={`${process.env.REACT_APP_HIGH_RES_IMAGES_BASE_URL}${item.images[0]}`}
                    productCardClassName={
                      "first:border-l-[1px] border-l-0 product-card xsm:!w-[174px]"
                    }
                    key={index}
                    imageClassName={
                      "!h-[342px] !w-[317px] xsm:!h-[158px] xsm:!w-[158px]"
                    }
                  />
                );
              })
            : [...Array(6)].map((_, index) => (
                <SkeletonProductCard key={index} />
              ))}
        </div>
      </Box>
    </Box>
  );
};
