
import { NavLink } from "react-router-dom"

export default function ProductCard({item}){

  const {id, name,imageUrl, description, price, stock, supplier} = item


  return(
    <div className="pCard">
      <div>
          <img src={imageUrl} alt="" />
      </div>
     <div>
      <NavLink to={`/product/${id}`}>
      {name}
      </NavLink>
    </div>
     <div>{description}</div>
     <div>{price}</div>
     <div>{stock}</div>
     <div>{supplier}</div>


    </div>
  )
}
