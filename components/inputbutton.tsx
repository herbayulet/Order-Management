"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input as TextInput } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon, CalendarIcon } from "lucide-react";
import { DatePickerDemo } from "./ui/date-picker";

const InputButton = () => {
  return (
    <div className="flex mx-6 my-4 md:flex-row flex-wrap items-center justify-between">
      <div className="flex gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-base font-normal">
            Customer Name
          </Label>
          <TextInput
            type="search"
            placeholder="Input customer name"
            icon={<SearchIcon className="h-5 w-5 text-gray-400" />}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="" className="text-base font-normal">
            Create Date
          </Label>
          <DatePickerDemo />
        </div>
      </div>
      <Button variant={"default"} className="text-md font-bold md:mt-5 mt-0">
        Add New Order
      </Button>
    </div>
  );
};

export default InputButton;
