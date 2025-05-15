import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const WatchList = () => {
  const [removeToWatchList, setRemoveToWatchList] = useState(null);
  const handleRemoveToWatchList = (value) => {
    console.log(value);
  };
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">WatchList</h1>
      <Table className="border border-border">
        <TableHeader className=" border-border">
          <TableRow className="border-border">
            <TableHead className="py-5 border-border">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="text-right text-red-600">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1].map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-border border-1 border-border"
            >
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                    className="h-10 w-10"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>32869995099</TableCell>
              <TableCell>2058695677578</TableCell>
              <TableCell>0.30637%</TableCell>
              <TableCell className="">$103560</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  className="h-10 w-10"
                  size="icon"
                  onClick={() => handleRemoveToWatchList(item.id)}
                >
                  <BookmarkFilledIcon className="w-6 h-6 " />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchList;
