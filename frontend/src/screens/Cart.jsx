import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeFromCart, changeQuantityByOne } from '../features/cartSlice';
import { Table, Button, CloseButton as DeleteIcon } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleDelete = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const changeQuantityByOneHandler = (
    operation,
    productId,
    currentQuantity
  ) => {
    dispatch(
      changeQuantityByOne({
        operation: operation,
        productId: productId,
        currentQuantity: currentQuantity,
      })
    );
  };

  return (
    <div className="cart container text-center">
      <h1 className="my-5">Cart</h1>
      <main className="row g-5">
        <div className="col-md-5 col-lg-3 order-md-last">
          <div className="card rounded-4 text-start p-4">
            <h4>Cart Totals</h4>
            <hr className="my-0" />
            <p>
              Total
              <span>
                {' '}
                {cartItems
                  .map((item) => item)
                  .reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
                $
              </span>
            </p>
            <hr className="my-0" />
            <span className="color-gray-light">
              Shipping calculated at Checkout
            </span>
            <button className="bg-blue-dark rounded-4">
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="col-md-7 col-lg-9">
          <div className="card">
            <Table responsive>
              <thead>
                <tr>
                  {['Product', 'Quantity', 'Price', 'SubTotal', ''].map(
                    (title, index) => (
                      <th key={index}>{title}</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr>
                    <td>
                      <Link to={`/products/${cartItem.id}`}>
                        <div className="row">
                          <div className="col-lg-3 ">
                            <img src={cartItem.images[1]} alt={cartItem.name} />
                          </div>
                          <div className="col-lg-9 text-start d-flex align-items-center">
                            <span>{cartItem.name}</span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    <td>{cartItem.price}$</td>

                    <td>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="light"
                          onClick={() =>
                            changeQuantityByOneHandler(
                              'add',
                              cartItem.id,
                              cartItem.quantity
                            )
                          }
                        >
                          +
                        </Button>
                        <span className="mx-2">{cartItem.quantity}</span>
                        <Button
                          variant="light"
                          onClick={() =>
                            changeQuantityByOneHandler(
                              'subtract',
                              cartItem.id,
                              cartItem.quantity
                            )
                          }
                        >
                          -
                        </Button>
                      </div>
                    </td>

                    <td>{cartItem.price * cartItem.quantity}$</td>
                    <td>
                      {/* <FaTrash
                          style={{
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            handleDelete(cartItem);
                          }}
                        /> */}
                      <DeleteIcon
                        onClick={() => {
                          handleDelete(cartItem);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
