import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import React from "react";
import Sidebar from "./Sidebar";
import { AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 sticky  bg-background bg-opacity-0 top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11 "
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col justify-center"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar className="w-10 h-10 rounded-full">
                    <AvatarImage
                      className="rounded-full"
                      src="https://media.istockphoto.com/id/882085928/vector/blockchain-bitcoin-icon-symbol-vector.jpg?s=612x612&w=is&k=20&c=8QICDSOWHFHaAZJ5HUlQWblOI-12AeO0B0eMlnRHbSs="
                    />
                  </Avatar>
                  <div>
                    <span className="text-orange-700 font-bold">J.J</span>
                    <span>Trading</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar></Sidebar>
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">J.J Trading</p>
        <div className="p-0 ml-9">
          <Button className="flex items-center gap-3 border-0 hover:bg-sidebar-border">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
