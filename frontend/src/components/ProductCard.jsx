import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, image, price } = product;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={`/products/${id}`}>
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            role="img"
          >
            <rect width="100%" height="100%" fill="#f5f5f5" />
          </svg>
        </Link>

        <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="text-muted">{price} $</p>
          <button type="button" className="btn bg-blue-dark text-white w-100">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
