import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Breadcrumb } from "./components/Breadcrumb";
import { Spotlight } from "./components/Spotlight";
import { Products } from "./components/Products";
import { SizeChart } from "./components/SizeChart";
import { MoreDetails } from "./components/MoreDetails";
import { ShareThisGuide } from "./components/ShareThisGuide";
import { OtherGuides } from "./components/OtherGuides";

export const InternalSpotlightScreen = () => {
  const routes = useRouter();
  const { title } = routes.query;

  return (
    <React.Fragment>
      <Box component={"main"} className="p-10">
        <Breadcrumb title={title} />
        <Spotlight title={title} />
        <Products />
        <SizeChart />
        <MoreDetails />
        <ShareThisGuide />
      </Box>
      <OtherGuides />
    </React.Fragment>
  );
};
