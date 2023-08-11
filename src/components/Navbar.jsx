import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import MenHover from "./MenHover";
import WomenHover from "./WomenHOver";

const Navbar = () => {
  return (
    <div className=" w-full  h-12 sticky top-0 left-0 lg:sticky lg:top-9  nav__bg backdrop-blur-[10px] flex items-center z-10">
      <div className="px-4 lg:px-8 w-[1400px] mx-auto flex items-center justify-between ">
        {/* Mobile menu */}
        <div className="lg:hidden flex-[1]">
          <MobileMenu />
        </div>

        {/* Logo  */}
        <div className="cursor-pointer flex-[1]">
          <Link href="/" className=" flex gap-2 items-center">
            <Image src="/img/logo.svg" height={20} width={20} alt="" />
            <span className="text-xl font-bold">Logo</span>
          </Link>
        </div>

        {/* cart Icon for mobile  */}
        <div className="lg:hidden cursor-pointer relative ">
          <Image
            src="/img/cart.png"
            width={18}
            height={18}
            className="object-contain "
            alt=""
          />
          <span className="flex items-center justify-center w-3 h-3 absolute bottom-[-5px] right-[-3px] bg-black text-white rounded-full text-[10px]">
            0
          </span>
        </div>
        {/* menu item  */}
        <div className="hidden lg:flex gap-8 items-center justify-center flex-[2]">
          <div className="group/men ">
            <span className="py-4 cursor-pointer">Men</span>
            <div className="invisible opacity-0 group-hover/men:visible group-hover/men:opacity-100 duration-500 transition-all">
              <MenHover />
            </div>
          </div>
          <div className="group/women ">
            <span className="py-4 cursor-pointer">Women</span>
            <div className="invisible opacity-0 group-hover/women:visible group-hover/women:opacity-100 duration-500 transition-all ">
              <WomenHover />
            </div>
          </div>
          <span className="py-4 cursor-pointer">Accessories</span>{" "}
          <span className="py-4 cursor-pointer">About</span>{" "}
          <Link
            className="bg-[#e9effc] py-1 px-4 rounded-full text-blue-500 text-[15px] text-center  "
            href="/"
          >
            Shoe Finder Quiz
          </Link>{" "}
        </div>
        {/* menu options */}
        <div className="hidden lg:flex  items-center flex-[1] justify-end">
          <div className="relative p-4 cursor-pointer group/support">
            <span>Support</span>
            {/* support hover item */}
            <div className="invisible opacity-0 group-hover/support:visible group-hover/support:opacity-100 duration-500 transition-all flex  w-max gap-2 bg-white ring-1 ring-gray-400 p-4 rounded-md flex-col absolute top-12 right-0">
              <Link className="hover:underline" href="/">
                Exchange/Return
              </Link>
              <Link className="hover:underline" href="/">
                Order Status
              </Link>
              <Link className="hover:underline" href="/">
                FAQ
              </Link>
              <Link className="hover:underline" href="/">
                Help
              </Link>
              <Link className="hover:underline" href="/">
                Contuct Us
              </Link>
            </div>
          </div>
          {/* Profile icon */}
          <div className="cursor-pointer relative group/profile p-4 ">
            <Image
              src="/img/profile.png"
              className="object-contain"
              width={18}
              height={18}
              alt=""
            />

            {/* profile hover item */}

            <div className="invisible opacity-0 group-hover/profile:visible group-hover/profile:opacity-100 transition-all duration-500  w-max flex gap-2 bg-white ring-1 ring-gray-400 p-4 rounded-md flex-col absolute top-12 right-0">
              <Link className="hover:underline" href="/">
                My Orders
              </Link>
              <Link className="hover:underline" href="/">
                Profile and Security
              </Link>
              <Link className="hover:underline" href="/">
                Addresses
              </Link>
              <Link className="hover:underline" href="/">
                Login
              </Link>
            </div>
          </div>
          {/* cart Icon  */}
          <div className="cursor-pointer  p-4">
            <div className="relative">
              <Image
                src="/img/cart.png"
                width={18}
                height={18}
                className="object-contain relative"
                alt=""
              />
              <span className="flex items-center justify-center w-3 h-3 absolute bottom-[-5px] right-[-3px] bg-black text-white rounded-full text-[10px]">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
