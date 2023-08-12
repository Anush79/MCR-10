import { useData } from "../context/DataContext";
export default function Home() {
  const { iData } = useData();
  const totalStock = iData.reduce((acc, curr)=>curr.stock+acc,0)
  const totalDelivered = iData.reduce((acc, curr)=>curr.delivered+acc,0)

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard Page</h1>
      <div className="flex gap-6 justify-center p-4">
        <div className="dash-card "><span className="text-green-500">{totalStock}</span>Total Stock</div> 
        <div className="dash-card"><span className="text-yellow-500">{totalDelivered}</span>Total Delivered</div>
        <div className="dash-card"><span className="text-red-500">2</span>Low Stock items</div>
      </div>
    </div>
  );
}
