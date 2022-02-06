import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import mainImage from '../images/mainImage.jpg';

const ProductCard = ({ product }) => {
  const { id, name, images, price } = product;

  return (
    <div className="col px-4">
      <div className="card shadow-sm">
        <Link to={`/products/${id}`}>
          <img
            src={mainImage}
            alt={product.name}
            style={{ width: '100%', height: '240px', objectFit: 'cover' }}
          />
        </Link>
        <div className="card-body text-center">
          <p className="card-text my-1">{name}</p>
          <p className="text-muted mt-1 mb-2">{price} $</p>
          <AddToCartButton product={{ ...product, quantity: 1 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
