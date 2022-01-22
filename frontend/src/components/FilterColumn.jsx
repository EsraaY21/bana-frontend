import { useState } from 'react';
import { useSelector } from 'react-redux';

const FilterColumn = ({
  categoryFilter,
  setCategoryFilter,
  brandFilter,
  setBrandFilter,
}) => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="container">
      <h3>Filter</h3>
      <h4>Categories</h4>
      {['All', 'Electronics', 'Jewelery'].map((category) => (
        <p
          key={category}
          className={
            categoryFilter.toLowerCase() === category.toLowerCase()
              ? 'shop-filter-active'
              : 'shop-filter'
          }
          onClick={() => setCategoryFilter(category)}
        >
          {category}
        </p>
      ))}

      <h4>Brands</h4>
      {['All', 'NaturalBrand', 'CeraVe'].map((brand) => (
        <p
          key={brand}
          className={
            brandFilter.toLowerCase() === brand.toLowerCase()
              ? 'shop-filter-active'
              : 'shop-filter'
          }
          onClick={() => setBrandFilter(brand)}
        >
          {brand}
        </p>
      ))}

      <h4>Price</h4>
      <p>All</p>
      <p>20$</p>
    </div>
  );
};

export default FilterColumn;
