import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import ProductsCarousel from './ProductsCarousel';

const LatestProducts = () => {
  let products = useSelector((state) => state.products.value).slice(0, 5);

  return (
    <>
      {products && (
        <section className="latest bg-gray-light">
          <div className="container text-center section-y-padding">
            <h2 className="cursive-title">New Collection</h2>
            <h1 className="color-blue-dark fw-bold mb-5">Latest Products</h1>
            <div className="row center-section row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5 mx-auto">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <button
              type="button"
              className="btn btn-lg rounded-4 mt-5 btn-blue-dark"
            >
              <Link to="shop">More Products</Link>
            </button>
          </div>
          <ProductsCarousel />
        </section>
      )}
    </>
  );
};

export default LatestProducts;
