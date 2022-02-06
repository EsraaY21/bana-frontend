import { useSelector } from 'react-redux';
import { useState } from 'react';
import { cities } from '../data';
import {
  InputGroup,
  FormControl,
  Form,
  Row,
  Col,
  FloatingLabel,
} from 'react-bootstrap';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const [city, setCity] = useState('');
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    phoneNumberOne: '',
    phoneNumberTwo: '',
    email: '',
    city: '',
    street: '',
    detailedAddress: '',
    additional: '',
  });

  const handleChangeCity = (e) => {
    const selectedCity = cities.filter(
      (city) => city.name === e.target.value
    )[0];
    setCity(selectedCity);
  };

  const handleValueChange = (e) => {
    setOrderData((prevOrderData) => {
      return { ...prevOrderData, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="checkout container">
      <h1 className="my-5 text-center">Checkout</h1>
      <main className="row g-5">
        <div className="col-md-5 col-lg-6 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="">Your cart</span>
            <span className="badge bg-info rounded-pill">
              <span>
                {cartItems
                  .map((item) => item.quantity)
                  .reduce((prev, curr) => prev + curr, 0)}
              </span>
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((cartItem) => (
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div className="row">
                  <div className="col-lg-3 ">
                    <img src={cartItem.images[1]} alt={cartItem.name} />
                  </div>
                  <div className="col-lg-9 text-start d-flex align-items-center">
                    <span>{cartItem.name}</span>
                  </div>
                </div>
                <span className="text-muted">${cartItem.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Shipping</h6>
                <small>{city.name}</small>
              </div>
              <span className="text-success">${city.shipping_cost}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>
                {cartItems
                  .map((item) => item)
                  .reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}
                $
              </strong>
            </li>
          </ul>
        </div>

        <div className="col-md-7 col-lg-6">
          <h2 className="">BANA CARE</h2>
          <h4 className="mb-3">Contact Information</h4>
          <form>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                id="firstName"
                value={orderData.firstName}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>

              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                value={orderData.lastName}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="phoneNumberOne">
              <input
                type="tel"
                className="form-control"
                id="phoneNumberOne"
                placeholder="Phone Number"
                value={orderData.phoneNumberOne}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="phoneNumberTwo">
              <input
                type="text"
                className="form-control"
                id="phoneNumberTwo"
                placeholder="Phone Number 2 (Optional)"
                value={orderData.phoneNumberTwo}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="email">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={orderData.email}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <h4 className="mb-3">Shipping Address</h4>

            <div className="col-md-5">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                value={orderData.city}
                className="form-select"
                id="city"
                required
                onChange={handleChangeCity}
              >
                <option value="">Choose...</option>
                {cities.map((city) => (
                  <option value={city.name}>{city.name}</option>
                ))}
              </select>
              <div className="invalid-feedback">Please select a valid i.</div>
            </div>

            <div className="">
              <label htmlFor="firstName" className="form-label">
                Street
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                value={orderData.street}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="">
              <label htmlFor="firstName" className="form-label">
                Detailed Address Description
              </label>
              <input
                type="text"
                className="form-control"
                id="detailedAddress"
                placeholder=""
                value={orderData.detailedAddress}
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <h4 className="mb-3">Additional Information</h4>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={orderData.additional}
              ></textarea>
            </div>
          </form>
        </div>
      </main>
      <button className="btn btn-primary btn-lg" type="submit">
        BUY
      </button>
    </div>
  );
};

export default Checkout;
