import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoinList } from "@/state/Coin/Action";

const AssetTable = ({ coin, category }) => {
  const dispatch = useDispatch();
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
        {coin.map((item, index) => (
          <TableRow
            key={item.id}
            className="hover:bg-border border-1 border-border"
          >
            <TableCell
              onClick={() => navigate("/market/bitcoin/")}
              className="font-medium flex items-center gap-3 cursor-pointer"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={item.image} alt={item.name} />
                <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <span>{item.name}</span>
            </TableCell>

            <TableCell>{item.symbol.toUpperCase()}</TableCell>
            <TableCell>{item.total_volume}</TableCell>
            <TableCell>{item.market_cap}</TableCell>
            <TableCell>{item.price_change_percentage_24h}</TableCell>
            <TableCell className="text-right">{item.current_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
