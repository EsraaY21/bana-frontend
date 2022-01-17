import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { successFetchProducts } from '../features/product/productSlice';

const Shop = () => {
  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(products);

    console.log('start');
    dispatch(successFetchProducts());
    console.log('success');
    console.log(products);
  }, []);

  return (
    <>
      <Header />
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
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <p className="mt-5">Loading...</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
