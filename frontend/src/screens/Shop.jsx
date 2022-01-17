import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  initFetchProducts,
  successFetchProducts,
} from '../features/productSlice';

const API_URL = 'https://fakestoreapi.com/products';

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(initFetchProducts());
    const fetchProducts = async () => {
      const { data } = await axios.get(API_URL).catch((error) => {
        console.log(error);
      });
      dispatch(successFetchProducts(data));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="shop container text-center">
        <h1 className="my-5">Shop</h1>

        {products.length < 1 ? (
          <h1>Loading...</h1>
        ) : (
          <main>
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
          </main>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Shop;
