import { Typography } from "@mui/material";
import Image from "next/image";

export const PrimaryButton = ({
  title,
  showLeftIcon = true,
  showRightIcon,
  width = 24,
  height = 24,
  iconSrc = "/icons/Close.png",
  handleOnLeftIconClick,
  handleOnRightIconClick,
  buttonClassName,
  textClassName,
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center bg-neutral-800 py-4 px-5 hover:bg-neutral-700 disabled:bg-neutral-500 focus:bg-neutral-700 focus:ring-4 focus:ring-neutral-600 transition-all ease-in ${buttonClassName}`}
      {...rest}
    >
      <div className="flex items-center gap-2">
        <Image
          src={iconSrc}
          alt="Left Icon"
          loading="lazy"
          width={width}
          height={height}
          className={`${showLeftIcon ? "visible" : "hidden"}`}
          onClick={handleOnLeftIconClick}
          fill={false}
        />
        <Typography
          variant="button"
          className={`!uppercase !text-neutral-100 !font-rigidSquare !text-sm !font-bold ${textClassName}`}
        >
          {title}
        </Typography>
        <Image
          src={iconSrc}
          alt="Right Icon"
          loading="lazy"
          width={width}
          height={height}
          className={`${showRightIcon ? "visible" : "hidden"}`}
          onClick={handleOnRightIconClick}
          fill={false}
        />
      </div>
    </button>
  );
};
