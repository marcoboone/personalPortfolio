"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItemProps = {
  children: ReactNode;
  href?: string;
  clickFunction?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  href = "",
  clickFunction,
}) => {
  return (
    <Link
      onClick={clickFunction}
      className="text-md tracking-wide hover:opacity-70"
      href={href}
    >
      {children}
    </Link>
  );
};

type MenuButtonProps = {
  isOpen: boolean;
  handler: () => void;
  barColor: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen,
  handler,
  barColor,
}) => {
  return (
    <button
      onClick={handler}
      className="md:hidden cursor-pointer hamburger-button overflow-hidden text-black"
    >
      <svg
        stroke={barColor}
        fill="none"
        className={`hamburger ` + (isOpen ? "hamburger-close" : "")}
        viewBox="-10 -10 120 120"
        width="50"
      >
        <path
          className={"line " + (isOpen ? "line-close" : "")}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  const resetNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="invisible-nav absolute w-full h-nav bg-transparent"></div>
      <div
        className={
          " navbar transition ease-in text-black py-4 flex items-center justify-center fixed z-50 w-full squeezetainer top-0 h-nav"
        }
      >
        <div id="navbar-links" className={"max-md:hidden md:flex gap-12"}>
          <NavItem href={"/#about"}>ABOUT</NavItem>
          <NavItem href={"/#projects"}>PROJECTS</NavItem>
          <NavItem href={"/#contact"}>CONTACT</NavItem>
        </div>

        {nav ? (
          <MenuButton
            barColor={"white"}
            isOpen={true}
            handler={resetNav}
          ></MenuButton>
        ) : (
          <MenuButton
            barColor={"black"}
            isOpen={false}
            handler={handleNav}
          ></MenuButton>
        )}
      </div>
      <div className="relative">
        <div
          id="navbar-links"
          className={
            (nav ? "" : "translate-y-[-100%]") +
            "  text-white duration-[.2s] ease-in fixed top-0 h-screen w-screen bg-black/30 backdrop-blur-lg z-40 md:hidden"
          }
        >
          <div className="flex flex-col pt-[15vh] px-6 gap-8 text-lg">
            <NavItem clickFunction={resetNav} href={"/#about"}>
              ABOUT
            </NavItem>
            <NavItem clickFunction={resetNav} href={"/#projects"}>
              PROJECTS
            </NavItem>

            <NavItem clickFunction={resetNav} href={"/#contact"}>
              CONTACT
            </NavItem>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
