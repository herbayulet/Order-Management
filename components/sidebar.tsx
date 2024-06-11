"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ClipboardList } from "lucide-react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="w-60 bg-primary hidden flex-col justify-between h-screen md:flex lg:flex">
      <div
        className={`p-2 mt-3 flex items-center gap-2 ${
          activeLink === "#" ? "bg-blue-200" : "hover:bg-blue-200"
        }`}
        onClick={() => handleLinkClick("#")}
      >
        <ClipboardList color="#ffffff" />
        <a href="/#" className="block py-2 text-lg text-white  ">
          Order Management
        </a>
      </div>
      <div className="p-4">
        <Button variant={"destructive"} size={"lg"}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
