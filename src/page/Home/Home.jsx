import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";

const Home = () => {
  const [category, setCategory] = useState("all");
  const handleCategory = (value) => {
    setCategory(value);
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
        </div>
      </div>
    </div>
  );
};

export default Home;
