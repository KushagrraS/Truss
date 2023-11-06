import { Box } from "@mui/material";
import React from "react";
import { Share } from "./Share";
import { ImageContainer } from "./ImageContainer";

const Paragraph = ({ children, ...rest }) => {
  return (
    <p
      className="w-[70%] mt-5 text-lg text-neutral-800 font-Inter my-10 max-w-[670px]"
      {...rest}
    >
      {children}
    </p>
  );
};
export const Spotlight = ({ title }) => {
  return (
    <Box component={"section"} className="mt-10 gap-10">
      <Box component={"div"} className="w-full flex items-start gap-10">
        <Share />
        <Box component={"div"} className="w-full">
          <h1 className="text-[40px] font-rigidSquare uppercase text-neutral-800 font-bold">
            {title}
          </h1>
          <Paragraph>
            Fans of the Milanese label Prada tend to have two things in common:
            an appreciation for intellectualism in design and a desire to wear
            it in an artful but still pretty way. The brand’s creative head,
            Miuccia Prada, is known for her ability to divine the future of
            fashion and launching seismic-force trends that ripple through the
            industry with impressive—and lasting—effects.
          </Paragraph>
        </Box>
      </Box>
      <ImageContainer />
      <Box component={"div"} className="w-full flex items-start gap-10 mt-5">
        <Share className={"invisible"} />
        <Box component={"div"} className="w-full">
          <Paragraph>
            {`Prada appears to have had a magic touch from the very start. Having earned a doctorate in political science, she had blithely set on a career as a mime when duty called in the form of the family store. Established in 1913 by her grandfather Mario, Fratelli Prada was in its heyday a premier purveyor of luxury leather goods and accessories. But by the late ’70s, the solid, heavy luggage that required a servant or two to wrangle was sorely out of vogue. Prada faced the not-insignificant task of dusting off her family’s staid, if stately, name, and redefining it for the modern era.
            Thrust into her new role as a businesswoman, the introspective Prada found her match when she met Patrizio Bertelli, a headstrong Tuscan leather-goods manufacturer who had his own factory. He eventually became her husband. With Bertelli’s business-shark brain and Prada’s prescience for what the public didn’t yet know it craved, the brand’s revival wasn’t long in coming. The surprise product that set everything in motion was an innocuous black backpack, made from the same fine nylon fabric that Prada’s grandfather had used as a protective cover on his steamer trunks (and the Italian army had used for parachutes). Ready-to-wear...`}
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};
