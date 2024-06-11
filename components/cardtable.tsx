"use client";

import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import InputButton from "./inputbutton";
import { Orders } from "@/type/orders";
import { api } from "@/lib/axios";
import { DataTable } from "./datatable";

const Cardtable = () => {
  const [dataOrder, setDataOrder] = useState<Orders[]>([]);
  const [orderDate, setOrderDate] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, [page, orderDate]);

  const fetchData = async () => {
    try {
      const response = await api.get("orders", {
        params: {
          page: page,
          limit: 10,
          orderDate: orderDate,
        },
      });
      const ordersData: Orders[] = response.data.list;
      setDataOrder(ordersData);
    } catch (error) {
      throw new Error("Error fetching orders");
    }
  };

  console.log(dataOrder);

  return (
    <Card className="flflex-col ex mt-10 mx-6">
      <InputButton />
      <DataTable columns={columns} data={dataOrder} />
    </Card>
  );
};

export default Cardtable;
