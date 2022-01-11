import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const LatestProducts = () => {
  return (
    <div className="latest container py-5 text-center">
      <h3 className="cursive-title">New Collection</h3>
      <h1>Latest Products</h1>
      <div className="row center-section row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {['', '', '', ''].map((product) => (
          <ProductCard />
        ))}
      </div>
      <button type="button" className="btn btn-primary btn-lg rounded-4">
        <Link to="shop">More Products</Link>
      </button>
    </div>
  );
};

export default LatestProducts;
