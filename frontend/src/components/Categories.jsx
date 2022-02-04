import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import categoryImage from '../images/category.png';

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
              <div
                className="rounded-circle bg-light mx-auto"
                style={{ width: '200px', height: '200px' }}
              >
                <img
                  src={categoryImage}
                  alt={category.name}
                  style={{
                    width: '100%',
                    maxHeight: '180px',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <h4 className="color-blue-dark mt-3">{category.name}</h4>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
