import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaShoppingBasket, FaSearch } from "react-icons/fa";
import logo from "../images/bana-care-logo.svg";
import LocationBar from "./LocationBar";
import { useSelector } from "react-redux";
import { Popover, OverlayTrigger } from "react-bootstrap";

const Header = () => {
	const products = useSelector((state) => state.products.value);
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();
	const cartItems = useSelector((state) => state.cart.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate({
			pathname: `/shop/${searchValue}`,
		});
		setSearchValue("");
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid px-5 py-3">
					{/* logo */}
					<NavLink className="navbar-brand" to="/">
						<img src={logo} alt="logo" width="75" className="img-fluid" />
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
							{["Home", "Shop", "Services", "About", "Contact"].map(
								(pageName, index) => (
									<li className="nav-item pb-0" key={index}>
										<NavLink
											className={(navData) =>
												navData.isActive
													? "nav-link color-blue-dark active-link"
													: "nav-link color-blue-dark"
											}
											to={
												pageName === "Home" ? "/" : `/${pageName.toLowerCase()}`
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

							<OverlayTrigger
								trigger="click"
								key="bottom"
								placement="bottom"
								overlay={
									<Popover id="popover-positioned-bottom">
										<Popover.Header as="h3">Suggestions</Popover.Header>
										<Popover.Body>
											{products
												.filter((product) =>
													product.name
														.toLowerCase()
														.includes(
															searchValue ? searchValue.toLowerCase() : ""
														)
												)
												.map((product) => (
													<Link to={`/products/${product.id}`}>
														<p className="mb-3">{product.name}</p>
													</Link>
												))}
											<Link to={`/shop/${searchValue}`}>
												<strong>View all results</strong>
											</Link>
										</Popover.Body>
									</Popover>
								}
							>
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
							</OverlayTrigger>

							<button className="btn">
								<NavLink to="/cart">
									<div className="badge-container">
										<button type="button" class="btn btn-sm position-relative">
											<FaShoppingBasket className="fs-5 position-relative" />
											<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-brown">
												{cartItems
													.map((item) => item.quantity)
													.reduce((prev, curr) => prev + curr, 0)}
												<span class="visually-hidden">items in cart</span>
											</span>
										</button>
									</div>
								</NavLink>
							</button>
						</div>
					</div>
				</div>
			</nav>
			<LocationBar />
		</>
	);
};

export default Header;
