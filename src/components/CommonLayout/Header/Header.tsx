import React from "react";
import { FaSearch } from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Image from "next/image";
import qwertyDigitalLogo from "../../../../public/assets/icons/qwertyDigitalLogo.svg";

// type Props = {}

const Header = () => {
  return (
    <div className="flex justify-between bg-[#04191A] ">
      <div className="w-[768px] h-[67px] ">
        <Image src={qwertyDigitalLogo} alt="qwertyDigitalLogo" />
      </div>
      <div className="w-[768px] h-[67px] flex justify-end items-center gap-4 text-white text-xl pr-2 ">
        <FaSearch />
        <TiUserOutline />
        <HiOutlineShoppingBag />
      </div>
    </div>
  );
};

export default Header;
