import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
export default function ProductDescription() {
  const { prodId } = useParams();
  const { iData } = useData();
  const product = iData.find((item) => item.id === +prodId);
  const { id, name, imageUrl, description, price, stock,sku, supplier, department } = product;

  return (
    <div className="h-screen">
      <h1 className="text-4xl font-bold "> {name}</h1>
      <div className=" h-full grid grid-cols-2 gap-4 items-center justify-center">
      <div>
        <img src={imageUrl} alt="" className="w-[100%]" />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <div>Price : $ {price}</div>
        <div>Stock : {stock}</div>
        <div>Supplier : {supplier}</div>
        <div>SKU : {sku}</div>
        <div>Department : {department}</div>
        <div>Description : {description}</div>
      </div>
      </div>
     
    </div>
  );
}
// id: 1,
// department: 'Kitchen',
// name: 'Stainless Steel Cookware Set',
// description:
//   'A set of high-quality stainless steel cookware including pots and pans.',
// price: 149.99,
// stock: 15,
// sku: 'KITCH001',
// supplier: 'KitchenWonders Inc.',
// delivered: 15,
// imageUrl: 'https://m.media-amazon.com/images/I/616vJsA33kL.jpg',
// },