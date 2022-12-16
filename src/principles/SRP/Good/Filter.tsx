import { Rating } from "react-simple-star-rating";
import { IProduct } from "./IProduct";

export function filterProducts(products: any[], rate: number) {
  return products.filter((product: IProduct) => product.rating.rate > rate);
}

interface IFilterProps {
  filterRate: number;
  handleRating: (rate: number) => void;
}

export function Filter(props: IFilterProps) {
  const { filterRate, handleRating } = props;

  return (
    <div className='rating'>
      <Rating
        initialValue={filterRate}
        SVGclassName='inline-block'
        onClick={handleRating}
      />
    </div>
  );
}
