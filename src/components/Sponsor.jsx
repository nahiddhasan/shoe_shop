import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <div className=" w-full my-6 lg:my-12 flex items-center">
      <div className=" px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-center  ">
        <div className="w-full rounded-2xl p-[3rem] md:p-[6rem] flex gap-4 flex-col items-center justify-center bg-[#f2f2f2]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center">
            “The most thoughtfully designed sneakers ever.”
          </h2>
          {/* Image container  */}

          <div className="w-full md:w-[70%] flex gap-4 items-center justify-around p-4  ">
            <div className="relative w-1/3 h-[50px] opacity-75 hover:opacity-100  transition">
              <Image src="/img/s1.png" fill alt="" className="object-contain " />
            </div>
            <div className="relative w-1/3 h-[50px] opacity-75 hover:opacity-100 transition">
              <Image src="/img/s2.png" fill alt="" className="object-contain"/>
            </div>
            <div className="relative w-1/3 h-[50px] opacity-75 hover:opacity-100 transition">
              <Image src="/img/s3.png" fill alt="" className="object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
