'use client'

import React from "react";
import axios from "axios";
import { Banner } from "./Banner";
import { Box } from "@mui/material";
import { NewProducts } from "./NewProducts";
import { SellerSpotlight } from "./SellerSpotlight";
import { HotBrands } from "./HotBrands";
import { TrendingProducts } from "./TrendingProduct";
import { Hero } from "./Hero";

export const LandingScreen = () => {
  const [featuredCollection, setFeaturedCollection] = React.useState({});

  React.useEffect(() => {
    const abortController = new AbortController();

    const getFeaturedCollections = async () => {
      try {
        const featuredCollectionData = await axios.get("/api/collections", {
          signal: abortController.signal,
        });
        setFeaturedCollection(featuredCollectionData);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error(error);
        }
      }
    };

    getFeaturedCollections();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Box component={"main"} className="h-full">
      <Hero data={featuredCollection?.data && featuredCollection?.data?.data} />
      <TrendingProducts
        data={featuredCollection?.data && featuredCollection?.data?.data}
      />
      <HotBrands
        data={featuredCollection?.data && featuredCollection?.data?.data}
      />
      <SellerSpotlight />
      <NewProducts
        data={featuredCollection?.data && featuredCollection?.data?.data}
      />
      <Banner />
    </Box>
  );
};
