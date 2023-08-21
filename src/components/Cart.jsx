"use client";
import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const IncreaseQty = (type) => {
    if (type === "inc") {
      setQty(qty + 1);
    } else {
      qty > 1 && setQty(qty - 1);
    }
  };
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
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

      <div
        className={`${open ? "block" : "hidden"} sidebar fixed  top-0 right-0 `}
      >
        <div className=" bg-white px-8 p-4  h-screen w-screen md:w-[50vw] z-10 box__shadow cursor-auto">
          {/* top  */}
          <div className="flex justify-between w-full h-max">
            {/* close icon */}
            <span>Cart</span>
            <span>
              <Image
                onClick={() => setOpen(false)}
                src="/img/remove.svg"
                width={20}
                height={20}
                alt=""
                className="object-contain cursor-pointer"
              />
            </span>
          </div>

          {/* top announce */}
          <div className=" flex flex-col items-center justify-center mb-4">
            <span className="text-center text-sm">
              Congrast! This order gets free shipping.
            </span>
            {/* line */}
            <div className="relative h-2 w-full ">
              <div className="absolute left-0 top-0 h-full w-full ring-1 ring-gray-500 my-2 rounded-full" />
              <div className="absolute left-0 top-0 h-full w-[100%] bg-black my-2 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col justify-between h-[80%]">
            {/* Cart items */}
            <div className="flex-[2] flex flex-col gap-2 overflow-auto">
              {/* Cart item */}
              <div className="w-full flex gap-2 justify-between">
                <div className="flex-1 relative flex items-center justify-center rounded-2xl overflow-hidden">
                  <Image
                    src="/img/p-3.jpg"
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>

                <div className="flex-[3] flex flex-col justify-between p-1 ">
                  <span>Model 000: Black</span>
                  <span className="text-sm">Color: Black</span>
                  <span className="text-sm">Size:Men's 3.5</span>
                </div>
                <div className="flex-[2] flex items-center gap-4">
                  <div className="flex gap-1 ring-1 ring-gray-500 rounded-full p-1">
                    {qty > 1 ? (
                      <Image
                        onClick={() => IncreaseQty("dec")}
                        src="/img/minus.svg"
                        width={14}
                        height={14}
                        alt=""
                        className="cursor-pointer"
                      />
                    ) : (
                      <Image
                        src="/img/trash.svg"
                        width={14}
                        height={14}
                        alt=""
                        className="cursor-pointer"
                      />
                    )}

                    <span className="text-sm">{qty}</span>
                    <Image
                      onClick={() => IncreaseQty("inc")}
                      src="/img/add.svg"
                      width={16}
                      height={16}
                      alt=""
                      className="cursor-pointer"
                    />
                  </div>
                  <span>$145</span>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            {/* Checkout  */}
            <div className="flex-[1] flex flex-col gap-4 ">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$145.00</span>
              </div>
              {/* input container */}
              <div className="flex w-full items-center justify-between">
                <input
                  className="w-[65%] p-2 border-none outline-none ring-1 ring-gray-400 rounded-lg"
                  type="text"
                  placeholder="Discount code"
                />
                <span>Apply Discount</span>
              </div>
              <button className="p-2 bg-black text-white rounded-full">
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
