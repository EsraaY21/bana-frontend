import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, changeQuantityByOne } from '../features/cartSlice';
import { Table, Button, CloseButton as DeleteIcon } from 'react-bootstrap';
import { imageUrl } from '../baseAPI';

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
    <div className="cart container text-center pb-5">
      <h1 className="mt-5 mb-2">Cart</h1>
      <main className="row g-5">
        <div className="col-md-5 col-lg-3 order-md-last">
          <div className="card rounded-4 text-start p-3">
            <h4>Cart Totals</h4>
            <hr className="my-0" style={{ color: '#8f8989' }} />
            <div className="d-flex justify-content-between mt-3">
              <p className="mt-3x">Total</p>
              <span className="color-brown fw-bold">
                {' '}
                {cartItems
                  .map((item) => item)
                  .reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
                $
              </span>
            </div>

            <hr className="my-0" style={{ color: '#8f8989' }} />
            <span className="color-gray-dark mt-3 mb-3">
              Shipping calculated at Checkout
            </span>
            <button className="btn btn-blue-dark">
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="col-md-7 col-lg-9">
          <div className="card">
            <Table responsive>
              <thead className="table-light">
                <tr>
                  <th style={{ width: '61%' }}>Product</th>
                  <th style={{ width: '11%' }}>Price</th>
                  <th style={{ width: '11%' }}>Quantity</th>
                  <th style={{ width: '11%' }}>SubTotal</th>
                  <th style={{ width: '6%' }}></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr>
                    <td>
                      <Link to={`/products/${cartItem.id}`}>
                        <div className="row">
                          <div className="col-lg-3 ">
                            <img
                              src={`${imageUrl}${cartItem.imageOne}`}
                              alt={cartItem.name}
                              style={{
                                width: '100%',
                                height: '100px',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                          <div className="col-lg-9 text-start d-flex align-items-center">
                            <span>{cartItem.name}</span>
                          </div>
                        </div>
                      </Link>
                    </td>

                    <td className="align-middle">{cartItem.price}$</td>

                    <td className="align-middle">
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

                    <td className="align-middle">
                      {cartItem.price * cartItem.quantity}$
                    </td>
                    <td className="align-middle">
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
