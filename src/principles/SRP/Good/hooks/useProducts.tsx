import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../IProduct";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      setProducts(data);
    };
    loadUsers();
  }, []);

  return { products };
};
