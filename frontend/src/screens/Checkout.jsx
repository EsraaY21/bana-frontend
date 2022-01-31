import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cities } from '../data';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const [city, setCity] = useState('');

  const handleChangeCity = (e) => {
    const selectedCity = cities.filter(
      (city) => city.name === e.target.value
    )[0];
    setCity(selectedCity);
  };

  return (
    <div className="checkout container">
      <h1 className="my-5 text-center">Checkout</h1>
      <main className="row g-5">
        <div className="col-md-5 col-lg-6 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="">Your cart</span>
            <span className="badge bg-info rounded-pill">
              {cartItems.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cartItems.map((cartItem) => (
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{cartItem.name}</h6>
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
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>

        <div className="col-md-7 col-lg-6">
          <h4 className="mb-3">Contact Information</h4>
          <form>
            <div className="row">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-sm-6">
                <label for="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="phone">
              <label for="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="phoneTwo">
              <label for="phoneTwo" className="form-label">
                Phone Number 2 (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneTwo"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="email">
              <label for="email" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <h4 className="mb-3">Shipping Address</h4>

            <div className="col-md-5">
              <label for="country" className="form-label">
                City
              </label>
              <select
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
              <label for="firstName" className="form-label">
                Street
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="">
              <label for="firstName" className="form-label">
                Detailed Address Description
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                value=""
                required
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
