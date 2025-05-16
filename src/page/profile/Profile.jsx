import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AccountVerificationForm from "./AccountVerificationForm";

const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("two step verification");
  };
  return (
    <div className="flex flex-col items-center mb-5 ">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Infromantion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">
                    janadajayathilaka123@gmail.com
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name : </p>
                  <p className="text-gray-500">janada Jayathilaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth : </p>
                  <p className="text-gray-500">2000/11/28</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality : </p>
                  <p className="text-gray-500">Srilankan</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">
                    janadajayathilaka123@gmail.com
                  </p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name : </p>
                  <p className="text-gray-500">janada Jayathilaka</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth : </p>
                  <p className="text-gray-500">2000/11/28</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality : </p>
                  <p className="text-gray-500">Srilankan</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2step Verification</CardTitle>
                {true ? (
                  <Badge className="space-x-2 text-white bg-green-600">
                    <VerifiedIcon className="w-10 h-10" />
                    <span></span>
                    Enabled
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button className={"bg-white text-background"}>
                      Enabled Two Step Verification
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account?</DialogTitle>
                      <AccountVerificationForm
                        handleSubmit={handleEnableTwoStepVerification}
                      />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
