import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const RowLayout = ({ children, className, ...rest }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1.2}
      className={`items-center xsm:flex-col xsm:items-start xsm:!ml-0 ${className}`}
      {...rest}
    >
      {children}
    </Stack>
  );
};

const BorderBoxLayout = ({ children, className, ...rest }) => (
  <Box
    component={"div"}
    className={`w-full border-t-[1.5px] border-t-neutral-800 ${className}`}
    {...rest}
  >
    <RowLayout>{children}</RowLayout>
  </Box>
);

const ProductInfoRow = ({ label, value, className }) => (
  <RowLayout className={`w-[50%] p-3 xsm:w-full xsm:!flex-row ${className}`}>
    <Typography
      component="span"
      variant="body1"
      fontSize={14}
      fontFamily="Inter"
      fontWeight={700}
      color="#333333"
    >
      {label}
    </Typography>
    <Typography
      component="span"
      variant="body1"
      fontSize={14}
      fontFamily="Inter"
      fontWeight={700}
      color="#333333"
      className="xsm:font-normal"
    >
      {value}
    </Typography>
  </RowLayout>
);

export const ProductDetails = () => {
  const [showProductDetails, setShowProductDetails] = React.useState(false);

  const handleShowProductDetails = React.useCallback(
    () => setShowProductDetails(!showProductDetails),
    [showProductDetails]
  );

  return (
    <Box component={"section"}>
      <Box
        component={"div"}
        className="w-full p-3 border-[1.5px] border-neutral-800 flex items-center justify-between cursor-pointer"
        onClick={handleShowProductDetails}
      >
        <Typography
          fontSize={14}
          fontFamily={"var(--font-rigidSquare)"}
          fontWeight={700}
          color={"#333333"}
          component={"span"}
          variant="h3"
          className="uppercase"
        >
          Product Details
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            color: "#0D0D0D",
            width: 24,
            height: 24,
            rotate: showProductDetails && "180deg",
          }}
          className="transition-all ease-in-out duration-500"
        />
      </Box>
      {showProductDetails && (
        <Box
          component={"div"}
          className="border-[1.5px] border-t-0 border-neutral-800 transition-all ease-in-out duration-700 mb-20"
        >
          <RowLayout className={"p-3 xsm:!flex-row xsm:!items-center"}>
            <Typography
              component={"span"}
              variant="body1"
              fontSize={14}
              fontFamily={"Inter"}
              fontWeight={700}
              color={"#333333"}
            >
              Valuation
            </Typography>
            <Box component={"span"} className="px-3 py-2 bg-[#3CD75533]">
              <Stack direction={"row"} spacing={1.2} className="items-center">
                <Typography
                  component={"span"}
                  variant="body1"
                  fontSize={14}
                  fontFamily={"Inter"}
                  fontWeight={700}
                  color={"#37B94C"}
                >
                  £ 450
                </Typography>
                <ArrowDownwardIcon
                  sx={{
                    color: "#37B94C",
                    height: 16,
                    width: 16,
                  }}
                />
              </Stack>
            </Box>
          </RowLayout>
          <BorderBoxLayout>
            <ProductInfoRow
              label="RRP"
              value="£300"
              className={"border-r-[1.5px] border-r-neutral-800 xsm:border-b-[1.5px] xsm:border-b-neutral-800 xsm:border-r-0"}
            />
            <ProductInfoRow label="SKU" value="3993-SSJ-SR2SS" />
          </BorderBoxLayout>
          <BorderBoxLayout>
            <ProductInfoRow
              label="Category"
              value="Jacket"
              className={"border-r-[1.5px] border-r-neutral-800 xsm:border-b-[1.5px] xsm:border-b-neutral-800 xsm:border-r-0"}
            />
            <ProductInfoRow label="Material" value="Cotton" />
          </BorderBoxLayout>
          <BorderBoxLayout>
            <ProductInfoRow
              label="Designer"
              value="-"
              className={"border-r-[1.5px] border-r-neutral-800 xsm:border-b-[1.5px] xsm:border-b-neutral-800 xsm:border-r-0"}
            />
            <ProductInfoRow label="Country" value="Japan" />
          </BorderBoxLayout>
          <Box
            component={"div"}
            className="w-full border-t-[1.5px] border-t-neutral-800 p-3"
          >
            <RowLayout className={'xsm:!flex-row xsm:!items-center'}>
              <Typography
                component="span"
                variant="body1"
                fontSize={14}
                fontFamily="Inter"
                fontWeight={700}
                color="#333333"
              >
                Seller name
              </Typography>
              <Stack direction={"row"} spacing={1} className="items-center">
                <div className="w-8 h-8 bg-neutral-400 rounded-full" />
                <Typography
                  component="span"
                  variant="body1"
                  fontSize={12}
                  fontFamily="Inter"
                  fontWeight={500}
                  color="#333333BF"
                >
                  sellername
                </Typography>
              </Stack>
            </RowLayout>
          </Box>
        </Box>
      )}
    </Box>
  );
};
