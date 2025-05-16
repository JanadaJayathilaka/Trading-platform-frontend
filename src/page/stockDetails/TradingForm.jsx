import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import React, { useState } from "react";

const TradingForm = () => {
  const [orderType, setOrderType] = useState("BUY");
  const handleChange = () => {};
  return (
    <div className="space-y-10 p-5">
      <div>
        <div className="flex gap-4 items-center justify-between">
          <Input
            className={"py-7 focus:outline-none"}
            placeholder="Enter Amount.."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div>
            <p className="border text-2xl justify-center items-center w-36 h-14 rounded-md">
              4322
            </p>
          </div>
        </div>
        {false && (
          <h1 className="text-red-600 text-center pt-4">
            Insufficient wallet balance to buy
          </h1>
        )}
      </div>

      <div className="flex gap-5 items-center">
        <Avatar>
          <AvatarImage
            src={
              "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
            }
          />
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <p>BTC</p>
            <DotIcon className="text-gray-400" />
            <p>Bitcoin</p>
          </div>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold">$103300</p>
            <p className="text-red-600">
              <span>-2131241332.567</span>
              <span>(-0.254535%)</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p>Order Type</p>
        <p>Market Order</p>
      </div>
      <div className="flex items-center justify-between">
        <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p>{orderType == "BUY" ? 890 : 1.54154}</p>
      </div>
      <div>
        <Button
          className={`w-full py-6 ${
            orderType === "SELL"
              ? "bg-red-600 text-white"
              : "bg-amber-50 text-black"
          }`}
        >
          {orderType}
        </Button>
        <Button
          variant={"link"}
          className={" mt-5 w-full text-xl "}
          onClick={() => {
            setOrderType(orderType == "BUY" ? "SELL" : "BUY");
          }}
        >
          {orderType == "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>
    </div>
  );
};

export default TradingForm;
