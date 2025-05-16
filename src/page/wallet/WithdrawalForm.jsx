import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    console.log(amount, paymentMethod);
  };

  const handleChange = () => {
    setAmount(amount);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$9000</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handleChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$9999"
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="pb-2">Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="data:image/png;base64,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"
            alt="yes bank image"
          />
          <div>
            <p className="text-xl font-bold">Peoples Bank</p>
            <p className="text-xs">***************3747</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full bg-amber-50 text-black">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
