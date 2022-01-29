import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

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
          <AddToCartButton product={{ ...product, quantity: 1 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
