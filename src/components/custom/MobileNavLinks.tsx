import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

type prop = {
  isOpenMobileNavLinks: boolean;
  setIsOpenMobileNavLinks: Dispatch<SetStateAction<boolean>>;
  setIsOpenMobileSearch: Dispatch<SetStateAction<boolean>>;
};

const MobileNavLinks = ({
  isOpenMobileNavLinks,
  setIsOpenMobileNavLinks,
  setIsOpenMobileSearch,
}: prop) => {
  const navLinks: string[] = ["shop", "on sale", "new arrivals", "brands"];
  const handleMobileMenuToggle = () => {
    setIsOpenMobileNavLinks(!isOpenMobileNavLinks);
    setIsOpenMobileSearch(false);
  };
  return (
    <>
      <button onClick={handleMobileMenuToggle} className="text-xl mt-1">
        {isOpenMobileNavLinks ? <FaXmark /> : <FaBars />}
      </button>
      <ul
        className={` bg-gray-200 absolute top-[100%] w-full text-center overflow-hidden divide-y-2 divide-gray-100 duration-200 ${
          !isOpenMobileNavLinks ? "h-0" : "h-[152px] border-b"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link} className="">
            <Link
              className="uppercase text-sm block w-full py-2"
              href={`/${link}`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileNavLinks;
