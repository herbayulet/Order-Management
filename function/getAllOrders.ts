import { api } from "@/lib/axios";

export const fetchOrders = async () => {
  // Mendapatkan pesanan dengan parameter-parameter default
  const response = await api.get("/orders", {
    params: {
      customer_name: "",
      order_date: "",
    },
  });
  const data = response?.data;
  return { data };
};
