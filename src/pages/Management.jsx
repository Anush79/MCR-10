import { useState } from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
export default function Management() {
  const navigate = useNavigate()
  const { handleAddNewProduct } = useData();
  const [productData, setProductData] = useState({
    id: "",
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "https://picsum.photos/id/1/500/500",
  });

  /**
   * 
   *{
    id: "",
    department: '',
    name: "",
    description:
      '',
    price: 0,
    stock: 0,
    sku: '',
    supplier: '',
    delivered: 0,
    imageUrl: 'https://picsum.photos/id/1/500/500',
  }
   */
  const dummyData = {
    id: "huih3232isdm9",
    name: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    supplier: "Apple.Inc",
    delivered: 0,
    stock: 94,
    sku: "AppleSK",
    department: "Toys",
    imageUrl:
      "https://inventstore.in/wp-content/uploads/2023/04/Midnight-scaled.webp",
  };
  const handleChange = (e) => {
    const { value, id } = e.target;
    setProductData({ ...productData, [id]: value });
  };
  return (
    <div className="flex flex-col  justify-center items-center p-1 ">
      <h1 className="text-3xl font-bold" >Add New Product Page</h1>
      <form
        className="flex flex-col pl-6 gap-2 p-2 items-start"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddNewProduct(productData);
          navigate('/products')
        }}
      >
        <div className="flex gap-10 text-left">
          <div className="flex flex-col ">
            <label for="department">Department:</label>
            <select
              id="department"
              name="department"
              required
              onChange={handleChange}
              value={productData.department}
            >
              <option value="">Select Department</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Clothing">Clothing</option>
              <option value="Toys">Toys</option>
            </select>
            <label for="product">Product Name:</label>
            <input
              type="text"
              id="name"
              name="productName"
              required
              onChange={handleChange}
              value={productData.name}
            />
 <label for="itemsDelivered">Items Delivered:</label>
            <input
              type="number"
              id="itemsDelivered"
              name="delivered"
              value="0"
              readonly
              onChange={handleChange}
            />
  

            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.1"
              required
              onChange={handleChange}
              value={productData.price}
            />
          </div>
          <div className="flex flex-col">
            <label for="stock">Stock (Quantity):</label>
            <input
              type="number"
              id="stock"
              name="stock"
              required
              onChange={handleChange}
              value={productData.stock}
            />

            <label for="sku">SKU (Stocking Unit):</label>
            <input
              type="text"
              id="sku"
              name="sku"
              required
              onChange={handleChange}
              value={productData.sku}
            />

            <label for="supplierName">Supplier Name:</label>
            <input
              type="text"
              id="supplier"
              name="supplierName"
              required
              onChange={handleChange}
              value={productData.supplier}
            />


            <label for="itemImage">Item Image URL:</label>
            <input
              type="url"
              id="imageUrl"
              name="itemImage"
              required
              onChange={handleChange}
              value={productData.imageUrl}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
        <label for="description">Description:</label>
            <textarea
              id="description"
              name="description"
              required
              onChange={handleChange}
              value={productData.description}
            ></textarea>
        </div>
<div className="flex justify-between w-full"><button
          onClick={(e) => {
            e.preventDefault();
            setProductData(dummyData);
          }}
          className="bg-yellow-500 text-slate-800 p-2 rounded-md"
        >
          Fill with Dummy Data
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add New Product
        </button>

</div>
        
      </form>
    </div>
  );
}
