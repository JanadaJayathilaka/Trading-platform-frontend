import React from "react";
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
const Activity = () => {
  return (
    <div>
      <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>
        <Table className="border border-border">
          <TableHeader className=" border-border">
            <TableRow className="border-border">
              <TableHead className="py-5 border-border">Date & Time</TableHead>
              <TableHead>Trading Pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead>Sell Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead className="">Profit/Loss</TableHead>
              <TableHead className="text-right ">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1].map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-border border-1 border-border"
              >
                <TableCell>
                  <p>2025/05/06</p>
                  <p className="text-gray-300">12:39:32</p>
                </TableCell>

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

                <TableCell>2058695677578</TableCell>
                <TableCell>0.30637%</TableCell>
                <TableCell className="">$103560</TableCell>
                <TableCell className="text-right">354</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
