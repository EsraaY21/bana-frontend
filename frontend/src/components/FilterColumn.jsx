import { useSelector } from 'react-redux';

const FilterColumn = ({
  categoryFilter,
  setCategoryFilter,
  brandFilter,
  setBrandFilter,
}) => {
  const categories = useSelector((state) => state.categories.value);
  const brands = useSelector((state) => state.brands.value);

  return (
    <div className="container">
      <h3>Filter</h3>
      <h4>Categories</h4>
      <p
        key="all"
        className={
          categoryFilter.toLowerCase() === 'all'
            ? 'shop-filter-active'
            : 'shop-filter'
        }
        onClick={() => setCategoryFilter('all')}
      >
        All
      </p>
      {categories.map((category) => (
        <p
          key={category.name}
          className={
            categoryFilter.toLowerCase() === category.name.toLowerCase()
              ? 'shop-filter-active'
              : 'shop-filter'
          }
          onClick={() => setCategoryFilter(category.name)}
        >
          {category.name}
        </p>
      ))}

      <h4>Brands</h4>
      <p
        key="all"
        className={
          brandFilter.toLowerCase() === 'all'
            ? 'shop-filter-active'
            : 'shop-filter'
        }
        onClick={() => setBrandFilter('all')}
      >
        All
      </p>
      {brands.map((brand) => (
        <p
          key={brand.name}
          className={
            categoryFilter.toLowerCase() === brand.name.toLowerCase()
              ? 'shop-filter-active'
              : 'shop-filter'
          }
          onClick={() => setBrandFilter(brand.name)}
        >
          {brand.name}
        </p>
      ))}

      <h4>Price</h4>
      <p>All</p>
      <p>20$</p>
    </div>
  );
};

export default FilterColumn;
