import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { Ghost, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [isBotRelese, setUsBotRelese] = useState(false);

  const handleBotRelese = () => {
    setUsBotRelese(!isBotRelese);
  };
  const handleCategory = (value) => {
    setCategory(value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      console.log(inputValue);
    }
    setInputValue("");
  };
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r border-border">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              className={`rounded-full ${
                category === "all" ? "bg-white text-black" : ""
              }`}
            >
              ALL
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              className={`rounded-full ${
                category === "top50" ? "bg-white text-black" : ""
              }`}
            >
              Top50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              className={`rounded-full ${
                category === "topGainers" ? "bg-white text-black" : ""
              }`}
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              className={`rounded-full ${
                category === "topLosers" ? "bg-white text-black" : ""
              }`}
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="sm:hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage
                  src={
                    "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628"
                  }
                />
              </Avatar>
            </div>
            <div>
              {" "}
              <div className="flex items-center gap-2">
                <p>ETH</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Ehtereum</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">5454</p>
                <p className="text-red-600">
                  <span>-260121416.541</span>
                  <span>(-0.25898%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
        {isBotRelese && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
            <div className="flex justify-between items-center border-b px-6 h-[12%]">
              <p>Chat Bot</p>
              <Button onClick={handleBotRelese} variant={Ghost} size="icon">
                <Cross1Icon />
              </Button>
            </div>
            <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
              <div className="self-start pb-5 w-auto">
                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                  <p>Hi, Janada J</p>
                  <p>You can ask crypto related question</p>
                  <p>like, price, marketCap etc...</p>
                </div>
              </div>
              {[1, 1, 1, 1, 1, 1].map((item, i) => (
                <div
                  key={i}
                  className={` ${
                    i % 2 == 0 ? "self-start" : "self-end"
                  } "pb-5 w-auto"`}
                >
                  {i % 2 == 0 ? (
                    <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                      <p>prompt who are you</p>
                    </div>
                  ) : (
                    <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-600 w-auto">
                      <p>Hi, Janada J</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="h-[12%] border-t border-border">
              <Input
                className="w-full h-full border-none outline-none"
                placeholder="write prompt"
                onChange={handleChange}
                value={inputValue}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        )}

        <div className="relative w-[10rem] cursor-pointer group">
          <Button
            onClick={handleBotRelese}
            className="w-full h-[3rem] flex gap-2 items-center bg-amber-50 hover:bg-amber-100 "
          >
            <MessageCircle
              size={50}
              className="fill-slate-800 -rotate-90 stroke-none "
            />
            <span className="text-2xl text-black">Chat Bot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
