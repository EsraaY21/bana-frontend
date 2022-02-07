import { useSelector } from 'react-redux';
import { useState } from 'react';
import { cities } from '../data';
import { useEffect } from 'react';

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
    totalCost: 0,
    shipping_cost: 0,
    items: [],
  });

  const handleChangeCity = (e) => {
    const selectedCity = cities.filter(
      (city) => city.name === e.target.value
    )[0];
    setCity(selectedCity);

    setOrderData((prevOrderData) => {
      return {
        ...prevOrderData,
        city: selectedCity.name,
        shipping_cost: selectedCity.shipping_cost,
      };
    });
  };

  const handleValueChange = (e) => {
    setOrderData((prevOrderData) => {
      return { ...prevOrderData, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    // send new order to backend
    e.preventDefault();
    console.log(orderData);
  };

  return (
    <div className="checkout container">
      <h1 className="my-5 text-center">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <main className="row g-5">
          {/* Cart Items ---------------------------------------------- */}
          <div className="col-md-5 col-lg-6 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="">Your cart</span>
              <span className="badge bg-info rounded">
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
                    <div className="col-lg-3">
                      <div className="badge-container">
                        <img src={cartItem.images[1]} alt={cartItem.name} />
                        <span className="badge-count badge">
                          {cartItem.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-9 d-flex flex-column justify-content-center">
                      <span>{cartItem.name}</span>
                      <span className="text-muted">{cartItem.price}$</span>
                    </div>
                  </div>
                  <span className="text-muted">${cartItem.price}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Shipping</h6>
                  <p>{city.name}</p>
                </div>
                <span className="text-success">${city.shipping_cost}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>
                  {cartItems
                    .map((item) => item)
                    .reduce(
                      (prev, curr) => prev + curr.quantity * curr.price,
                      0
                    ) + (city.shipping_cost ? city.shipping_cost : 0)}
                  $
                </strong>
              </li>
            </ul>
          </div>

          {/* Contact Information ------------------------------------- */}

          <div className="col-md-7 col-lg-6">
            <h2 className="">BANA CARE</h2>
            <h4 className="mb-3">Contact Information</h4>

            {/* First and Last Name ---- */}
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
                // required
              />
              {/* <div className="invalid-feedback">
                Valid first name is required.
              </div> */}

              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                value={orderData.lastName}
                onChange={(e) => {
                  handleValueChange(e);
                }}
                // required
              />
            </div>

            {/* Phone Number ---- */}
            <input
              type="tel"
              className="form-control"
              id="phoneNumberOne"
              placeholder="Phone Number"
              value={orderData.phoneNumberOne}
              onChange={(e) => {
                handleValueChange(e);
              }}
              // required
            />

            <input
              type="text"
              className="form-control"
              id="phoneNumberTwo"
              placeholder="Phone Number 2 (Optional)"
              value={orderData.phoneNumberTwo}
              onChange={(e) => {
                handleValueChange(e);
              }}
              // required
            />

            {/* Email ---- */}
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={orderData.email}
              onChange={(e) => {
                handleValueChange(e);
              }}
              // required
            />

            <h4 className="mb-3">Shipping Address</h4>

            {/* City ---- */}
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              value={orderData.city}
              className="form-select"
              id="city"
              // required
              onChange={handleChangeCity}
            >
              <option value="">Choose...</option>
              {cities.map((city) => (
                <option value={city.name}>{city.name}</option>
              ))}
            </select>

            {/* Street ---- */}
            <input
              type="text"
              className="form-control"
              id="street"
              placeholder="Street"
              value={orderData.street}
              onChange={(e) => {
                handleValueChange(e);
              }}
              // required
            />

            {/* Detailed Address ---- */}
            <input
              type="text"
              className="form-control"
              id="detailedAddress"
              placeholder="Detailed Address"
              value={orderData.detailedAddress}
              onChange={(e) => {
                handleValueChange(e);
              }}
            />

            {/* Additional Information ---- */}
            <h4 className="mb-3">Additional Information</h4>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="additional"
                rows="3"
                placeholder="Additional Information"
                value={orderData.additional}
                onChange={(e) => {
                  handleValueChange(e);
                }}
              ></textarea>
            </div>
          </div>
        </main>

        <div className="text-center">
          <button className="btn-blue-dark btn mb-5 mt-4" type="submit">
            BUY
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
