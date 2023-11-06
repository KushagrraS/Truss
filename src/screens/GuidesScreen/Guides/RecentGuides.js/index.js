import { Box, Typography } from "@mui/material";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import TabsComponent from "../../../../components/library/Tabs/Tabs";
import { All } from "./All";

const tabs = [
  {
    label: "All",
    component: <All />,
  },
  {
    label: "Shoes",
    component: <All />,
  },
  {
    label: "Clothes",
    component: <All />,
  },
  {
    label: "Designers",
    component: <All />,
  },
  {
    label: "Brands",
    component: <All />,
  },
];

export const RecentGuides = () => {
  return (
    <Box component={"section"} className="mt-14 p-10">
      <Typography
        fontFamily={"var(--font-rigidSquare)"}
        fontSize={24}
        fontWeight={700}
        color={"#000000"}
        component={"span"}
        variant="h4"
        className="uppercase"
      >
        {textUtils.recentGuides}
      </Typography>
      <TabsComponent tabs={tabs} className={"mt-5"} />
    </Box>
  );
};
