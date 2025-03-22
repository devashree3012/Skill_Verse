import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({ product }) => {
  if (!product) {
      return <p>Loading...</p>;  // ✅ Show a loading message until data loads
  }

  return (
      <div className="product-card">
          <img src={product.images?.[0] || "fallback-image.jpg"} alt={product.name} />  {/* ✅ Prevents errors */}
          <h2>{product.name}</h2>
          <p>{product.price ? `$${product.price}` : "Price Not Available"}</p>
      </div>
  );
};


export default ProductItem
