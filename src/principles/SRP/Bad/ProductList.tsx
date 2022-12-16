import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../Style.css";

interface IProduct {
  id: string;
  title: string;
  price: number;
  rating: { rate: number };
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterRate, setFilterRate] = useState(1);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setProducts(data);
    };
    loadUsers();
  }, []);

  const handleRating = (rate: number) => {
    setFilterRate(rate);
  };

  const fileredProducts = useMemo(() => {
    return products.filter(
      (product: IProduct) => product.rating.rate >= filterRate
    );
  }, [products, filterRate]);

  return (
    <div className='wrapper'>
      <div className='rating'>
        <Rating
          initialValue={filterRate}
          SVGclassName='inline-block'
          onClick={handleRating}
        />
      </div>
      {fileredProducts.map((product: IProduct) => (
        <div className='card' key={product.id}>
          <img className='img' src={product.image} alt={product.title} />
          <div className='info'>
            <h3>{product.title}</h3>
            <p>Rating : {product.rating.rate}</p>
            <p>Price : ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
