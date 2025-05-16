import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const StockDetails = () => {
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between ">
        <div className="flex gap-5 items-center">
          <Avatar>
            <AvatarImage
              src={
                "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
              }
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
