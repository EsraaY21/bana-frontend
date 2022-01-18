import { FaShoppingBag, FaSearch } from 'react-icons/fa';
import logo from '../images/bana-care-logo.svg';
import { NavLink, useNavigate, createSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const params = { sort: 'date', order: 'newest' };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/shop',
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-4 py-3">
        {/* logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="80" className="img-fluid" />
        </NavLink>

        <button
          className="navbar-toggler color-blue-dark navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            {['Home', 'Shop', 'Services', 'About', 'Contact'].map(
              (pageName, index) => (
                <li className="nav-item pb-0" key={index}>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? 'nav-link color-blue-dark active-link'
                        : 'nav-link color-blue-dark'
                    }
                    to={
                      pageName === 'Home' ? '/' : `/${pageName.toLowerCase()}`
                    }
                  >
                    {pageName}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="d-flex align-items-center">
            {/* Search */}
            <form onSubmit={handleSubmit}>
              <div className="d-flex align-items-center" id="navbar_search">
                <FaSearch className="navbar_search_icon" />
                <input
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  type="text"
                  className="form-control border-0 rounded-4 "
                  placeholder="Search Products ..."
                />
              </div>
            </form>
            <button className="btn">
              <NavLink to="/cart">
                <FaShoppingBag className="fs-5" />
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
