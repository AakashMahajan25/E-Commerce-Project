import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.webp";
import {
  IconSearch,
  IconPhone,
  IconUser,
  IconShoppingCart,
} from "@tabler/icons-react";
import SecondaryNavbar from "@/functionalities/SecondaryNavbar";

export default function Navbar() {
  return (
    <div>
      <div className="h-[8vh] my-5 mx-3 flex justify-between">
        <Image alt="Logo" src={Logo} className="w-fit" />
        <div className="flex">
          <input
            type="text"
            name="search-bar"
            placeholder="What are you looking for?"
            className="h-full w-[60vw] border border-[#f4333f] rounded-l-lg px-3"
          />
          <div className="bg-[#f4333f] border border-[#f4333f] px-4 flex rounded-r-lg">
            <IconSearch strokeWidth={2} className=" my-auto text-white" />
          </div>
        </div>
        <div className="flex w-[18vw] justify-between">
          <div className="flex">
            <IconPhone strokeWidth={1} className="h-2/3 w-auto my-auto" />
          </div>
          <div className="flex">
            <IconUser strokeWidth={1} className="h-2/3 w-auto my-auto" />
            <div className="my-auto font-bold">Login / SignUp</div>
          </div>
          <div className="flex">
            <IconShoppingCart
              strokeWidth={1}
              className="h-2/3 w-auto my-auto"
            />
          </div>
        </div>
      </div>
      <SecondaryNavbar />
    </div>
  );
}
