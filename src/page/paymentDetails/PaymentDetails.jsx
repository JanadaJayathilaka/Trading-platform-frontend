import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import PaymentDetailsForm from "./PaymentDetailsForm";

const PaymentDetails = () => {
  return (
    <div className="px-20 ">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>

      <Card className="border-border">
        <CardHeader>
          <CardTitle>Peoples Bank</CardTitle>
          <CardDescription> AC/NO: ***************3747</CardDescription>
          <CardContent>
            <div className="flex items-center ">
              <p className="w-32">Account Holder</p>
              <p className="text-gray-400">: Janada Jayathilaka</p>
            </div>
            <div className="flex items-center">
              <p className="w-32">IFSC</p>
              <p className="text-gray-400">: Peoples32312</p>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
      <Dialog>
        <DialogTrigger>
          <Button className="py-6 mt-2 bg-white text-black">
            Add Payment Details
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentDetails;
