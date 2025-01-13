import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-ful md:w-auto flex-[1.5] lg:max-w-full *:mx-auto lg:mx-0">
            left
          </div>
          {/* left column end */}
          {/* Right column start */}
          <div className="flex-[1] py-3">right</div>
          {/* Right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
