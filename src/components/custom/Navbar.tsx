"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

import { useEffect, useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
  const [isOpenMobileSearch, setIsOpenMobileSearch] = useState<boolean>(false);
  const [isOpenMobileNavLinks, setIsOpenMobileNavLinks] =
    useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [user, setUser] = useState<boolean>(false);

  const navLinks: string[] = ["products", "new arrivals", "brands"];

  const handleOpenMobileSearch = () => {
    setIsOpenMobileNavLinks(false);
    setIsOpenMobileSearch(!isOpenMobileSearch);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`container py-2 lg:py-4 h-20 duration-200 ${
        isScrolled
          ? "fixed bg-darkGray text-white left-1/2 -translate-x-1/2 z-50 rounded-full shadow-lg shadow-black w-[90%] lg:w-[80%] mt-1 h-12 md:h-12 lg:h-16 lg:py-[11px]"
          : ""
      }`}
    >
      <div className="flex items-center gap-6 lg:gap-10 relative">
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
        <ul className="lg:flex gap-6 hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <Link className="uppercase text-sm" href={`/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 lg:gap-6 lg:flex-grow ml-auto lg:ml-0">
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

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={"/favorite"} className="text-xl">
                  <FaRegHeart />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Favorite</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Link href={"/cart"} className="text-xl">
                  <MdOutlineShoppingCart />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {user ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"#"} className="text-xl">
                    <IoPersonCircleOutline />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link href={"/login"} className="text-xl">
                    <IoMdLogIn className="rotate-180" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Login</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
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
