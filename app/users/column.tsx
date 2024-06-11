// column.ts
"use client";
import { Orders } from "@/type/orders";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { PencilLine, ReceiptText, Trash2 } from "lucide-react";

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "id",
    header: "Order Id",
  },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "total_products",
    header: "Total Product",
  },
  {
    accessorKey: "total_price",
    header: "Total Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("total_price"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Order Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      const formatted = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const handleEdit = () => {
        // Handle edit action
        console.log("Edit", row.original);
      };

      const handleView = () => {
        // Handle view action
        console.log("View", row.original);
      };

      const handleDelete = () => {
        // Handle delete action
        console.log("Delete", row.original);
      };

      return (
        <div className="flex items-center space-x-10">
          <button onClick={handleEdit} className="text-blue-500">
            <PencilLine className="w-5 h-5" />
          </button>
          <button onClick={handleView} className="text-green-500">
            <ReceiptText className="w-5 h-5" />
          </button>
          <button onClick={handleDelete} className="text-red-500">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      );
    },
  },
];
