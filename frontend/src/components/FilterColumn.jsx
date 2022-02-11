import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const FilterColumn = ({
  categoryFilter,
  setCategoryFilter,
  brandFilter,
  setBrandFilter,
}) => {
  const categories = useSelector((state) => state.categories.value);
  //   const brands = useSelector((state) => state.brands.value);

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

  return (
    <div className="container">
      <h2 className="mb-4">Filter</h2>
      <div className="d-flex mb-3 align-items-center justify-content-between">
        <h4 className="mb-0">Categories</h4>
        <span
          className="badge bg-secondary"
          onClick={() => setCategoryFilter([])}
          style={{ cursor: 'pointer' }}
        >
          Clear
        </span>
      </div>

      {categories.map((category) => (
        <Form key={category.name}>
          <div className="mb-3" key={category.name}>
            <Form.Check
              type="checkbox"
              className="d-inline-block"
              id={category.id}
              value={category.id}
              label={category.name}
              onClick={(e) => handleAddFilter(e)}
              checked={
                categoryFilter.find(
                  (x) => parseInt(x) === parseInt(category.id)
                )
                  ? true
                  : false
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

      <h4 className="mb-3 pt-3">Price</h4>
      <p>All</p>
      <p>20$</p>
    </div>
  );
};

export default FilterColumn;
