import { useState } from "react";
import { useData } from "../context/DataContext";
export default function Management() {
  const { handleAddNewProduct } = useData()
  const [productData, setProductData] = useState({
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
  })

  const handleChange = (e) => {
    const { value, id } = e.target;
    setProductData({ ...productData, [id]: value })
  }
  return (
    <div>
      <h1>Management Page</h1>
      <form className="flex flex-col items-start" onSubmit={(e) => { e.preventDefault(); handleAddNewProduct(productData) }}>
        <label for="department">Department:</label>
        <select id="department" name="department" required onChange={handleChange} >
          <option value="">Select Department</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>
        <label for="product">Product Name:</label>
        <input type="text" id="name" name="productName" required onChange={handleChange} />

        <label for="description">Description:</label>
        <textarea id="description" name="description" required onChange={handleChange}></textarea>

        <label for="price">Price:</label>
        <input type="number" id="price" name="price" step="0.1" required onChange={handleChange} />

        <label for="stock">Stock (Quantity):</label>
        <input type="number" id="stock" name="stock" required onChange={handleChange} />

        <label for="sku">SKU (Stocking Unit):</label>
        <input type="text" id="sku" name="sku" required onChange={handleChange} />

        <label for="supplierName">Supplier Name:</label>
        <input type="text" id="supplier" name="supplierName" required onChange={handleChange} />

        <label for="itemsDelivered">Items Delivered:</label>
        <input
          type="number"
          id="itemsDelivered"
          name="itemsDelivered"
          value="0"
          readonly onChange={handleChange}
        />

        <label for="itemImage">Item Image URL:</label>
        <input type="url" id="imageUrl" name="itemImage" required onChange={handleChange} />

        <button>Add New Product</button>
      </form>
    </div>
  );
}
