import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FilterColumn from '../components/FilterColumn';

const Shop = () => {
  const products = useSelector((state) => state.products.value);
  const [sortValue, setSortValue] = useState('name');
  const { urlSearchKey } = useParams();
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [priceFilter, setPrice] = useState('all');

  return (
    <>
      <div className="row text-center">
        <h1 className="my-5">Shop</h1>

        <div className="col-lg-3 text-start px-5">
          <FilterColumn
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            brandFilter={brandFilter}
            setBrandFilter={setBrandFilter}
          />
        </div>
        <div className="col-lg-9">
          <div className="">
            {products && (
              <main>
                <div className="d-flex justify-content-between px-4">
                  <p className="fs-6">[100] Results</p>

                  <div className="d-flex">
                    <span className="">Sort by: </span>
                    <select
                      className="form-select"
                      value={sortValue}
                      onChange={(e) => setSortValue(e.target.value)}
                    >
                      <option value="name">Name</option>
                      <option value="date">Date</option>
                      <option value="price">Price</option>
                    </select>
                  </div>
                </div>
                <div className="py-5">
                  <div className="row center-section row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-5 mx-auto">
                    {products
                      .filter((product) =>
                        product.name
                          .toLowerCase()
                          .includes(
                            urlSearchKey ? urlSearchKey.toLowerCase() : ''
                          )
                      )
                      .filter((product) =>
                        categoryFilter.toLowerCase() === 'all' ||
                        categoryFilter.toLowerCase() ===
                          product.category.toLowerCase()
                          ? product
                          : ''
                      )
                      .sort((productA, productB) => {
                        switch (sortValue) {
                          case 'price':
                            return productA.price - productB.price;
                          case 'date':
                            return 0;
                          default:
                            return productA.name
                              .toLowerCase()
                              .localeCompare(productB.name.toLowerCase());
                        }
                      })
                      .map((product) => (
                        <ProductCard product={product} key={product.id} />
                      ))}
                  </div>
                </div>
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
