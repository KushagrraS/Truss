import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { textUtils } from "utils/TextContent/textUtils";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Breadcrumb = ({title}) => {
  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon
          fontSize="small"
          sx={{
            color: "#000000",
          }}
        />
      }
      sx={{
        "& .MuiBreadcrumbs-separator": {
          marginInline: 0,
        },
      }}
    >
      <Link
        href={"./"}
        className="lowercase font-Inter text-neutral-800 text-[14px]"
      >
        {textUtils.guides}
      </Link>
      <Typography
        component={"span"}
        className="lowercase font-Inter text-[14px] text-neutral-700"
      >
        {title}
      </Typography>
    </Breadcrumbs>
  );
};
