"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <Image
          src="/img/hamberger.png"
          width={20}
          height={20}
          alt=""
          className="object-contain cursor-pointer"
        />
      </div>

      {open && (
        <div className="fixed px-12 py-12 top-0 left-0 h-screen w-screen md:w-[60vw] flex  bg-white z-10 shadow-md">
          {/* close icon */}
          <span
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4"
          >
            <Image
              src="/img/remove.svg"
              width={20}
              height={20}
              alt=""
              className="object-contain cursor-pointer"
            />
          </span>
          {/* Menu items  */}
          <div className="w-full flex flex-col gap-8">
            {/* menu item */}
            <div className="flex flex-col gap-2">
              <span className="text-sm">Shoes</span>
              <div>
                <h1 className="text-2xl ">Model 001</h1>
                <span className="text-sm text-gray-500">
                  Supportive and Durable
                </span>
              </div>
              <div>
                <h1 className="text-2xl ">Model 000</h1>
                <span className="text-sm text-gray-500">Cushioni Comfort</span>
              </div>
              <Link
                className="py-1 underline rounded-md text-blue-500 text-[15px]"
                href="/"
              >
                Take The Shoe Finder Quiz -
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm">Accessories</span>
              <h2 className="text-2xl">Masks</h2>
              <h2 className="text-2xl">Laces</h2>
              <h2 className="text-2xl">Gift Card</h2>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm">Account</span>
              <h2 className="text-2xl">My Orders</h2>
              <h2 className="text-2xl">Login</h2>
              <h2 className="text-2xl">Exchange/Return</h2>
              <h2 className="text-2xl">Support</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
