"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

import { useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [isOpenMobileSearch, setIsOpenMobileSearch] = useState<boolean>(false);
  const [isOpenMobileNavLinks, setIsOpenMobileNavLinks] =
    useState<boolean>(false);

  const navLinks: string[] = ["shop", "on sale", "new arrivals", "brands"];

  const handleOpenMobileSearch = () => {
    setIsOpenMobileNavLinks(false);
    setIsOpenMobileSearch(!isOpenMobileSearch);
  };

  return (
    <nav className="container mx-auto max-w-5x py-2 lg:py-4">
      <div className="max-w-5xl mx-auto flex items-center gap-8 relative">
        <div className="lg:hidden">
          <MobileNavLinks
            isOpenMobileNavLinks={isOpenMobileNavLinks}
            setIsOpenMobileNavLinks={setIsOpenMobileNavLinks}
            setIsOpenMobileSearch={setIsOpenMobileSearch}
          />
        </div>
        <div>
          <Link
            href={"/"}
            className="cursor-pointer text-3xl lg:text-4xl font-black"
          >
            eSHOP
          </Link>
        </div>
        <ul className="lg:flex gap-4 hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <Link className="uppercase text-sm" href={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 lg:flex-grow ml-auto lg:ml-0">
          <form action="" className="relative flex-grow hidden lg:block">
            <Input
              type="text"
              placeholder="Search for products..."
              name="search"
              className="rounded-full bg-[#f0f0f0] pl-8"
            />
            <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-1/2" />
          </form>

          {/* mobile devices search field trigger */}
          <button
            onClick={handleOpenMobileSearch}
            className="lg:hidden text-xl"
          >
            <IoSearch />
          </button>

          <Link href={"/cart"} className="text-xl">
            <MdOutlineShoppingCart />
          </Link>
          <Link href={"#"} className="text-xl">
            <IoPersonCircleOutline />
          </Link>
        </div>
      </div>

      <form
        action=""
        className={`lg:hidden duration-200 overflow-hidden relative ${
          isOpenMobileSearch ? "h-9" : "h-0"
        }`}
      >
        <Input
          type="text"
          placeholder="Search for products..."
          name="search"
          className={`rounded-full bg-[#f0f0f0] shadow-none border-none pr-10`}
        />
        <button className="absolute right-7 top-1/2 -translate-y-1/2 translate-x-1/2 text-xl">
          <IoSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
