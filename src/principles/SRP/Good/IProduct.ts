export interface IProduct {
  id: string;
  title: string;
  price: number;
  rating: { rate: number };
  image: string;
}

export interface IProductProps {
  product: IProduct;
}
