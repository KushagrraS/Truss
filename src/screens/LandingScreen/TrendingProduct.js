import { Box } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "../../components/library/ProductCard/ProductCard";
import { CarouselHeader } from "../../components/library/Header/CarouselHeader";
import { textUtils } from "utils/TextContent/textUtils";
import "./styles.css";
import { SkeletonProductCard } from "../../components/library/Skeleton/SkeletonProductCard";
import { useVisibleCardCount } from "../../hooks/useVisibleCardCount";

export const TrendingProducts = ({ data }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [trendingProductData, setTrendingProductData] = React.useState([]);

  const router = useRouter();

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
    if (startIndex + visibleCardCount < trendingProductData.length) {
      setStartIndex(startIndex + visibleCardCount);
    }
  };

  const displayedGarments = trendingProductData.slice(
    startIndex,
    startIndex + visibleCardCount
  );

  const handleRouteNavigation = () => router.push("/archive");

  React.useEffect(() => {
    if (data?.length > 0) {
      setTrendingProductData(data[3]?.garments);
    }
  }, [data]);

  return (
    <Box component={"section"} className="mx-10 mt-10 xsm:mx-4">
      <CarouselHeader
        title={textUtils.landingScreen.trendingProducts.heading}
        onLeftButtonClick={handleLeftButtonClick}
        onRightButtonClick={handleRightButtonClick}
        onTitleClick={handleRouteNavigation}
      />
      <Box component={"div"} className="mt-5">
        <Box className="product-container flex flex-row overflow-x-auto flex-row-container scroll-auto transition-all duration-300 ease-in">
          {data?.length > 0
            ? displayedGarments.map((item, index) => {
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
        </Box>
      </Box>
    </Box>
  );
};
