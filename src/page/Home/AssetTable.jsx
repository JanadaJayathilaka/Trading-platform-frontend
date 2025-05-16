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
import { useNavigate } from "react-router-dom";

const AssetTable = () => {
  const navigate = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">COIN</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <TableRow
            key={index}
            className="hover:bg-border border-1 border-border"
          >
            <TableCell
              onClick={() => navigate("/market/bitcoin/")}
              className="font-medium flex items-center gap-2"
            >
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
  );
};

export default AssetTable;
