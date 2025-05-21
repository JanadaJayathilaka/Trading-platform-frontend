import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { BookmarkIcon, DotIcon } from "lucide-react";
import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "./TradingForm";
import StockChart from "../Home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/state/Coin/Action";

const StockDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching coin with ID:", id);
    dispatch(fetchCoinDetails({ id, jwt: localStorage.getItem("jwt") }));
  }, [id]);
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between ">
        <div className="flex gap-5 items-center">
          <Avatar>
            <AvatarImage src={""} />
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
        <div className="flex items-center gap-5">
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button size={"lg"} className="bg-amber-50 text-black">
                Trade
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-20 ">
        <StockChart />
      </div>
    </div>
  );
};

export default StockDetails;
