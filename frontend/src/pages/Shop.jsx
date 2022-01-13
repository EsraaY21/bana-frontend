import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  return (
    <div className="shop container text-center">
      <h1 className="my-5">Shop</h1>
      <div className="d-flex justify-content-between px-4">
        <p className="fs-6">Showing 1–9 of 14 results</p>
        <div className="d-flex">
          <span className="">Sort by: </span>
          <select className="form-select">
            <option value="newest">Newest</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="py-5">
        <div className="row center-section row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mx-auto">
          {['', '', '', ''].map((product) => (
            <ProductCard />
          ))}
        </div>
        <p className="mt-5">Loading...</p>
      </div>
    </div>
  );
};

export default Shop;
