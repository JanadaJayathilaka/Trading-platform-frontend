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
