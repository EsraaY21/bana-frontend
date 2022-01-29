import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      onClick={addToCartHandler}
      className={
        product.countInStock === 0 ? 'btn w-100' : 'btn-blue-dark btn w-100'
      }
      disabled={product.countInStock === 0}
    >
      {product.countInStock > 0 ? 'Add to Cart' : 'Out of Stock'}{' '}
    </button>
  );
};

export default AddToCartButton;
