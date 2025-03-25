import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiUserOutline } from "react-icons/ti";
import qwertyDigitalLogo from "../../public/assets/icons/qwertyDigitalLogo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between bg-[#000000]">
      <div className="w-[768px] h-[67px] flex gap-4 text-white text-xl ">
        <FaSearch />
        <TiUserOutline />
        <HiOutlineShoppingBag />
      </div>
      <div className="w-[768px] h-[67px]">
        <Image src={qwertyDigitalLogo} alt="qwertyDigitalLogo" />
      </div>
    </div>
  );
}
