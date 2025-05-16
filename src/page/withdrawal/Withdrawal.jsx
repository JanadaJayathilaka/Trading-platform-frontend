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

const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
      <Table className="border border-border">
        <TableHeader className=" border-border">
          <TableRow className="border-border">
            <TableHead className="py-5 border-border">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1].map((item, index) => (
            <TableRow
              key={index}
              className="hover:bg-border border-1 border-border bg-gray-900"
            >
              <TableCell>
                <p>May 15, 2025 at 15.25</p>
              </TableCell>

              <TableCell>Bank</TableCell>

              <TableCell>$100</TableCell>

              <TableCell className="text-right">354</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
