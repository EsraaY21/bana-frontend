import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('name');

  return (
    <div className="shop container text-center">
      <h1 className="my-5">Shop</h1>

      {products && (
        <main>
          <div className="d-flex justify-content-between px-4">
            <p className="fs-6">Showing 1–9 of 14 results</p>
            <input
              placeholder="Search Product.."
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
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
              <p className="">Filter </p>
            </div>
          </div>
          <div className="py-5">
            <div className="row center-section row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 mx-auto">
              {products
                .filter((product) =>
                  product.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .sort((productA, productB) => {
                  switch (sortValue) {
                    case 'price':
                      return productA.price - productB.price;
                    case 'date':
                      break;
                    default:
                      return productA.title
                        .toLowerCase()
                        .localeCompare(productB.title.toLowerCase());
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
  );
};

export default Shop;
