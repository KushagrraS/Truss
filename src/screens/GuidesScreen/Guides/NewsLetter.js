import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { textUtils } from "utils/TextContent/textUtils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SubscribeNewsletter = () => {
  return (
    <Box
      component={"search"}
      className="w-full h-12 flex items-center mt-6 md:w-[40%] lg:w-[50%]"
    >
      <Box component={"div"} className="w-4/5">
        <TextField
          variant="outlined"
          className="w-full"
          placeholder={textUtils.enterYourEmailAddress}
          margin="none"
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
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "#265CF6",
              },
            },
          }}
        />
      </Box>
      <div className="flex items-center !h-full !border-[1px] !border-neutral-800 !text-neutral-800 px-5 py-4 relative right-[0.5px] cursor-pointer hover:bg-neutral-800 hover:!text-neutral-100 hover:px-[22px] transition-all ease-in-out duration-500">
        <Stack direction={"row"} spacing={1} className="items-center">
          <span className="text-[14px] font-rigidSquare font-bold uppercase">
            {textUtils.subscribe}
          </span>
          <ArrowForwardIcon />
        </Stack>
      </div>
    </Box>
  );
};

const ThanksMessageComponent = () => {
  return (
    <Box
      component={"div"}
      className="w-full h-12 flex items-center justify-center mt-6 md:w-[40%] lg:w-[50%] bg-neutral-800 uppercase text-neutral-100 font-rigidSquare font-bold px-5 py-4"
    >
      Thanks for subscribing!
    </Box>
  );
};
const SubscriptionStatus = ({ subscribed }) => {
  switch (subscribed) {
    case true:
      return <ThanksMessageComponent />;

    default:
      return <SubscribeNewsletter />;
  }
};

export const NewsLetter = ({ className }) => {
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <Box
      component={"div"}
      className={`px-10 mx-10 my-10 min-h-[360px] flex items-center justify-between border-t-[1px] border-t-neutral-800 ${className}`}
    >
      <Box component={"div"} className="w-[40%] flex flex-col">
        <span className="font-rigidSquare uppercase text-[16px] font-bold">
          {textUtils.newsLetter}
        </span>
        <div className="font-rigidSquare uppercase text-[56px] font-bold leading-[64px] mt-4">
          get the latest from truss!
        </div>
        <SubscriptionStatus subscribed={subscribed} />
      </Box>
      <Box component={"div"} className="w-[40%]">
        <Image
          src={"/icons/NewsLetter.png"}
          alt="NewsLetter"
          fill={true}
          className="!object-cover !relative"
        />
      </Box>
    </Box>
  );
};
