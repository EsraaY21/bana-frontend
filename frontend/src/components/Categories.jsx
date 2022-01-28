import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories.value);

  return (
    <section className="categories container inner-section-y-padding">
      <div className="row text-center">
        <h2 className="cursive-title">Discover</h2>
        <h1 className="color-blue-dark fw-bold mb-5">Categories</h1>
        {categories.map((category) => (
          <div key={category.name} className="col-lg-3">
            <Link to={`shop/${category.name.toLowerCase()}`}>
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#F5F5F5" />
              </svg>
              <h4 className="color-blue-dark mt-3">{category.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
