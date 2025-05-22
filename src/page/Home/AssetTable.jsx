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
import { useDispatch } from "react-redux";
import { ScrollArea } from "@/components/ui/scroll-area";

const AssetTable = ({ coin, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ScrollArea className={`${category === "all" ? "h-[77vh]" : "h-[82vh]"}`}>
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
          {coin.map((item) => (
            <TableRow
              key={item.id}
              className="hover:bg-border border-1 border-border "
            >
              <TableCell
                onClick={() => navigate(`/market/${item.id}`)}
                className="font-medium flex items-center gap-2 mr-15"
              >
                <Avatar className="shrink-0">
                  <AvatarImage
                    src={item.image}
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </Avatar>
                <span>{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell className="text-right">
                ${item.current_price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default AssetTable;
