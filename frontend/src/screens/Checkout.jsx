import { useSelector } from 'react-redux';
import { useState } from 'react';
import { cities } from '../data';
import { imageUrl } from '../baseAPI';

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
    let selectedCity;

    if (e.target.value.length < 1) {
      selectedCity = { name: '', shipping_cost: 0 };
    } else {
      selectedCity = cities.filter((city) => city.name === e.target.value)[0];
    }
    setCity(selectedCity);

    setOrderData((prevOrderData) => {
      return {
        ...prevOrderData,
        city: selectedCity.name,
        shipping_cost: selectedCity.shipping_cost,
      };
    });

    console.log(selectedCity);
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
      <h1 className="mt-5 mb-2 text-center">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <main className="row g-5">
          {/* Cart Items ---------------------------------------------- */}
          <div className="col-md-5 col-lg-6 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="">Your cart</span>
              <span className="badge checkout-count rounded">
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
                        <img
                          src={`${imageUrl}${cartItem.imageOne}`}
                          alt={cartItem.name}
                          style={{
                            width: '120px',
                            height: '60px',
                            objectFit: 'cover',
                          }}
                        />
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
              <li className="list-group-item d-flex justify-content-between align-items-center bg-light">
                <div className="text-success">
                  <h6 className="my-0">Shipping</h6>
                  <p className="mb-0">
                    <small>{city.name}</small>
                  </p>
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
            {/* <h2 className="">BANA CARE</h2> */}
            <h4 className="mb-3">Contact Information</h4>
            <div className="row g-3">
              {/* First and Last Name ---- */}
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={orderData.firstName}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                  // required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={orderData.lastName}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                  // required
                />
              </div>

              {/* Phone Number ---- */}
              <div className="col-md-6">
                <label htmlFor="phoneNumberOne" className="form-label">
                  Phone Number 1
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumberOne"
                  value={orderData.phoneNumberOne}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                  // required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="phoneNumberTwo" className="form-label">
                  Phone Number 2 (Optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumberTwo"
                  value={orderData.phoneNumberTwo}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                  // required
                />
              </div>

              {/* Email ---- */}
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
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
              </div>
            </div>
            {/* row */}

            <h4 className="mb-3 mt-5">Shipping Address</h4>

            <div className="row g-3">
              {/* City ---- */}
              <div className="col-md-6">
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
              </div>

              {/* Street ---- */}
              <div className="col-md-6">
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  value={orderData.street}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                  // required
                />
              </div>

              {/* Detailed Address ---- */}
              <div className="col-md-12">
                <label htmlFor="detailedAddress" className="form-label">
                  Detailed Address
                </label>
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
              </div>
            </div>

            {/* Additional Information ---- */}
            <h4 className="mb-3 mt-5">Additional Information</h4>
            <div className="row g-3">
              <div className="col">
                <label htmlFor="additional" className="form-label">
                  Additional Information
                </label>
                <textarea
                  className="form-control"
                  id="additional"
                  rows="3"
                  value={orderData.additional}
                  onChange={(e) => {
                    handleValueChange(e);
                  }}
                ></textarea>
              </div>
            </div>

            {/* Button */}
            <div className="row">
              <div className="col">
                <div className="d-grid gap-2">
                  <button
                    className="btn-blue-dark btn-block btn mb-5 mt-4"
                    type="submit"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};

export default Checkout;
