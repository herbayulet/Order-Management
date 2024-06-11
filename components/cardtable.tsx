import React from "react";
import { Card } from "./ui/card";
import InputButton from "./inputbutton";
import { fetchOrders } from "@/function/getAllOrders";

const Cardtable = () => {
  const data = fetchOrders();

  return (
    <Card className="flflex-col ex mt-10 mx-6">
      <InputButton />
    </Card>
  );
};

export default Cardtable;
