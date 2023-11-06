import React from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { RowLayout } from "./RowLayout";
import { Filter } from "./Filter";
import { Products } from "./Products";

export const ArchiveScreen = () => {
  const [showFilterDrawer, setShowFilterDrawer] = React.useState(false);

  return (
    <Box component={"main"} className="h-full p-10 xsm:p-4">
      <h3 className="font-rigidSquare mb-10 text-[40px] text-neutral-800 font-bold xsm:mb-4 xsm:mt-4">
        ARCHIVE
      </h3>
      <RowLayout
        showFilterDrawer={showFilterDrawer}
        setShowFilterDrawer={setShowFilterDrawer}
      />
      <Box component={"div"} className="w-full flex justify-between gap-8">
        <Box className="w-[29%] mt-4 xsm:hidden">
          <Filter />
        </Box>
        <Box className="w-full flex justify-between h-full mt-5">
          <Products />
        </Box>
      </Box>
      <Drawer
        anchor="left"
        open={showFilterDrawer}
        onClose={() => setShowFilterDrawer(false)}
      >
        <div className="w-[80vw] px-4 py-6">
          <div className="font-rigidSquare uppercase font-bold text-base pb-6 border-b-[1px] border-b-neutral-800 mb-10 w-full flex justify-between items-center">
            Filters
            <IconButton
              className="!m-0 !p-0"
              onClick={() => setShowFilterDrawer(false)}
            >
              <CloseIcon sx={{ color: "#000000", height: 24, width: 24 }} />
            </IconButton>
          </div>
          <Filter />
        </div>
      </Drawer>
    </Box>
  );
};
