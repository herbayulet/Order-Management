import Cardtable from "@/components/cardtable";

export default function Home() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <p className="text-2xl text-center pt-10 font-bold">Order Management</p>
      <Cardtable />
    </div>
  );
}
