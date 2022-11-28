import React from "react";
import { IProductProps } from "./IProduct";

const ProductItem = (props: IProductProps) => {
  const { product } = props;
  const { id, title, price, rating, image } = product;

  return (
    <div className='card' key={id}>
      <img className='img' src={image} alt={title} />
      <div className='info'>
        <h3>{title}</h3>
        <p>Rating : {rating.rate}</p>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
