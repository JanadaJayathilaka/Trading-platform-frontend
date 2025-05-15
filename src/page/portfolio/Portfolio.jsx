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
const Portfolio = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
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
              <TableCell className="text-right">$103560</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
