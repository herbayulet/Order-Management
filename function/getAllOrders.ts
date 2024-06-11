import { api } from "@/lib/axios";
import { Orders } from "@/type/orders";

export const fetchOrders = async (): Promise<Orders[]> => {
  console.log("fetchOrders called");
  const res = await api.get("orders");
  const data = res.data.list;
  console.log(data);

  return data;
};
