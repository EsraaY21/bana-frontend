import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { removeFromCart } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleDelete = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="cart container text-center">
      <h1 className="my-5">Cart</h1>
      <main className="row g-5">
        <div className="col-md-5 col-lg-3 order-md-last">
          <div className="card rounded-4 text-start p-4">
            <h4>Cart Totals</h4>
            <hr className="my-0" />
            <p>Total 500$</p>
            <hr className="my-0" />
            <span className="color-gray-light">
              Shipping calculated at Checkout
            </span>
            <button className="bg-blue-dark rounded-4">
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
        <div className="col-md-7 col-lg-9">
          <div className="card">
            <table className="table table-borderless">
              <thead className="table-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">SubTotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr>
                    {/* <th scope="row">{cartItem.name}</th> */}
                    <td className="text-start">{cartItem.name}</td>
                    <td>{cartItem.price}</td>
                    <td className="d-flex justify-content-around">
                      <div className="d-flex align-items-center">
                        <button>+</button>
                        <span className="mx-2">2</span>
                        <button>-</button>
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <span>
                        <TiDelete
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            handleDelete(cartItem);
                          }}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
