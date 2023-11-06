import React from "react";
import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { textUtils } from "utils/TextContent/textUtils";
import { brandData } from "utils/dummyData";
import { FilterLayout } from "./FilterLayout";
import { AppContext } from "../../../utils/AppContextProvider";
import { ImageView } from "../../../components/library/Image/ImageView";
import { TitleButton } from "../../../components/library/Button/TitleButton";

const SearchBar = ({
  searchFieldText,
  handleOnChangeText,
  handleOnClearSerachText,
}) => {
  return (
    <TextField
      value={searchFieldText}
      variant="outlined"
      className="w-full"
      placeholder={textUtils.filter.brand.searchPlaceholder}
      margin="none"
      onChange={(e) => handleOnChangeText(e)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className="h-6 w-6 !relative">
            <ImageView
              src={"/icons/Search.png"}
              alt={"Search"}
              fill={true}
              className="!relative !object-contain"
            />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="start"
            className={`${
              searchFieldText.length > 0 ? "visible" : "invisible"
            }`}
          >
            <IconButton
              className="!p-0 !m-0 !h-5 !w-5 !relative"
              onClick={handleOnClearSerachText}
            >
              <ImageView
                src={"/icons/Close-Circle-Fill.png"}
                alt={"Close Circle Fill"}
                fill={true}
                className="!relative !object-contain"
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputBase-input": {
          borderRadius: 0,
          backgroundColor: "#FFFFFF",
          height: "24px",
          paddingBlock: "12px",
        },

        "& .MuiInputBase-root": {
          borderRadius: 0,
          backgroundColor: "#FFFFFF",
          paddingInline: "12px",
        },

        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#265CF6",
          },
        },
      }}
    />
  );
};

const Brand = () => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [searchFieldText, setSearchFieldText] = React.useState("");
  const { selectedBrand, setSelectedBrand } = React.useContext(AppContext);

  const handleOnTabPress = React.useCallback(
    () => setShowFilter(!showFilter),
    [showFilter]
  );

  function handleOnCheckboxChange({ event, item }) {
    const { brand } = item;
    if (event.target.checked && !selectedBrand.includes(brand)) {
      return setSelectedBrand([...selectedBrand, brand]);
    }
    const filteredBrand = selectedBrand.filter((value) => value !== brand);
    setSelectedBrand(filteredBrand);
  }

  function handleOnChangeText(event) {
    setSearchFieldText(event.target.value.trim());
  }

  function handleOnClearSerachText() {
    setSearchFieldText("");
  }

  return (
    <FilterLayout
      showFilter={showFilter}
      handleOnTabPress={handleOnTabPress}
      title={textUtils.filter.brand.title}
    >
      <Box component={"search"} className="w-full">
        <SearchBar
          searchFieldText={searchFieldText}
          handleOnChangeText={handleOnChangeText}
          handleOnClearSerachText={handleOnClearSerachText}
        />
      </Box>
      <Box component={"div"} className="mb-3">
        {brandData.map((value, index) => {
          return (
            <Box
              className="flex items-center justify-between mb-3 last:mb-0"
              key={index}
            >
              <Stack direction={"row"} className="items-center gap-2">
                <Checkbox
                  checked={selectedBrand.includes(value.brand) || false}
                  onChange={(event) =>
                    handleOnCheckboxChange({ event: event, item: value })
                  }
                  sx={{
                    color: "black",
                    padding: 0,
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <Typography
                  fontFamily={"var(--font-rigidSquare)"}
                  fontSize={14}
                  fontWeight={700}
                  color={"#000000"}
                  className="uppercase"
                >
                  {value.brand}
                </Typography>
              </Stack>
              <Box
                component={"div"}
                className="px-2 py-1 bg-neutral-400 font-rigidSquare text-neutral-700 text-xs font-bold"
              >
                {value.numberOfItems}
              </Box>
            </Box>
          );
        })}
        <TitleButton
          fontFamily={"var(--font-rigidSquare)"}
          fontSize={12}
          fontWeight={700}
          buttonTitle={"Show more"}
        />
      </Box>
    </FilterLayout>
  );
};

export default Brand;
