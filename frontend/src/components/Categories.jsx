import { Link } from 'react-router-dom';
import categoryImage from '../images/category.png';

const categories = [
  { title: 'Soaps', image: categoryImage },
  { title: 'Candles', image: categoryImage },
  { title: 'Hair', image: categoryImage },
  { title: 'Skin', image: categoryImage },
];

const Categories = () => {
  return (
    <div className="categories container py-5">
      <div className="row center-section">
        <h3>Discover</h3>
        <h1>Categories</h1>
        {categories.map((category) => (
          <div key={category.title} className="col-lg-3">
            <Link to={`shop/${category.title.toLowerCase()}`}>
              <svg
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>
              <h2>{category.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
