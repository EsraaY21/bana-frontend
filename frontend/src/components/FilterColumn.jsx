import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const FilterColumn = ({
  categoryFilter,
  setCategoryFilter,
  brandFilter,
  setBrandFilter,
}) => {
  const categories = useSelector((state) => state.categories.value);
  const brands = useSelector((state) => state.brands.value);

  const handleAddFilter = (e) => {
    const newCategory = e.target.id;
    const categorySelected = categoryFilter.find((x) => x === newCategory);

    if (!categorySelected) {
      const newFilters = [...categoryFilter, newCategory];
      setCategoryFilter(newFilters);
    } else {
      const newFilter = categoryFilter.filter((x) => x !== newCategory);
      setCategoryFilter(newFilter);
    }
  };

  console.log(categoryFilter);

  return (
    <div className="container">
      <h3>Filter</h3>
      <h4>
        Categories
        <small
          className="text-muted"
          onClick={() => setCategoryFilter([])}
          style={{ cursor: 'pointer' }}
        >
          Clear
        </small>
      </h4>
      {categories.map((category) => (
        <Form key={category.name}>
          <div className="mb-3" key={category.name}>
            <Form.Check
              type="checkbox"
              id={category.name}
              value={category.name}
              label={category.name}
              onClick={(e) => handleAddFilter(e)}
              checked={
                categoryFilter.find((x) => x === category.name) ? true : false
              }
              onChange={(e) => console.log(e.target.value)}
            />
            <span>(4)</span>
          </div>
        </Form>
      ))}
      {/* 
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
            brandFilter.toLowerCase() === brand.name.toLowerCase()
              ? 'shop-filter-active'
              : 'shop-filter'
          }
          onClick={() => setBrandFilter(brand.name)}
        >
          {brand.name}
        </p>
      ))} */}

      <h4>Price</h4>
      <p>All</p>
      <p>20$</p>
    </div>
  );
};

export default FilterColumn;
