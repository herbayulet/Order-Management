"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div
      className={`h-16 bg-white flex flex-row justify-between items-center px-4 shadow-lg `}
    >
      <div className="flex items-center gap-2">
        <div className="bg-orange-400 w-2 h-2 rounded-full" />
        <p className={`text-xl font-bold text-primary`}>My Brand</p>
      </div>
      <div className={`w-48 h-10 gap-2  flex items-center `}>
        <div className="bg-biruMuda flex justify-center items-center w-10 h-full rounded-full">
          <p className="text-white text-center font-semibold">CR</p>
        </div>
        <p>Cooper Rosser</p>
        <DropdownMenu onOpenChange={handleClick}>
          {clicked ? (
            <DropdownMenuTrigger>
              <ChevronRight />
            </DropdownMenuTrigger>
          ) : (
            <DropdownMenuTrigger>
              <ChevronDown />
            </DropdownMenuTrigger>
          )}

          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <div className="p-4">
              <Button variant={"destructive"} size={"lg"}>
                Log out
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
