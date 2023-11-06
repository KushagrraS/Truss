import { Box, Stack } from "@mui/material";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ImageView } from "../Image/ImageView";

export const GuideCard = ({
  className,
  imageClassname,
  headingClassname,
  subHeadingClassname,
  rowHeadingClassname,
  rowSubHeadingClassname,
  iconClassname,
  pathname
}) => {
  return (
    <Link
      href={{
        pathname: pathname,
        query: {
          title:
            "A global guide to the best vintage stores and resale platforms",
        },
      }}
      className={`p-3 min-w-[454px] flex flex-col justify-between border-0 odd:!border-l-[#000000] odd:border-l-[1px] even:border-l-[#000000] even:border-l-[1px] odd:border-t-[#000000] odd:border-t-[1px] even:border-t-[#000000] even:border-t-[1px] hover:bg-neutral-300 group ${className}`}
    >
      <div>
        <Box
          component={"div"}
          className={`w-[100%] h-[50%] min-h-[430px] !overflow-hidden ${imageClassname}`}
        >
          <ImageView
            src={"/images/CardImage.png"}
            fill={true}
            className="!relative !object-cover transition-all ease-in-out duration-700  group-hover:scale-110"
          />
        </Box>
        <Stack direction={"column"} className="mt-5 gap-2">
          <span
            className={`font-rigidSquare text-[18px] font-bold text-neutral-800 ${headingClassname}`}
          >
            A global guide to the best vintage stores and resale platforms
          </span>
          <span
            className={`font-Inter text-[14px] font-normal text-neutral-700 ${subHeadingClassname}`}
          >
            The best vintage—wherever in the world you might land.
          </span>
        </Stack>
      </div>
      <div className="w-full flex items-center justify-between mt-[60px]">
        <Stack direction={"row"} spacing={0.5} className="items-center">
          <InstagramIcon
            sx={{ color: "#000000", width: "20px", height: "20px" }}
            className={iconClassname}
          />
          <span
            className={`font-rigidSquare text-base text-neutral-800 font-bold uppercase ${rowHeadingClassname}`}
          >
            complex
          </span>
        </Stack>
        <span
          className={`font-Inter text-[11px] text-neutral-800 font-normal ${rowSubHeadingClassname}`}
        >
          12 Jan 2023
        </span>
      </div>
    </Link>
  );
};
