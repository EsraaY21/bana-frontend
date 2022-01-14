import { FaShoppingBag, FaSearch } from "react-icons/fa";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid px-4 py-2">
				{/* logo */}
				<NavLink className="navbar-brand" to="/">
					<img src={logo} alt="logo" width="70" />
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
								<li className="nav-item" key={index}>
									<NavLink
										className="nav-link color-blue-dark"
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
						<form>
							<div className="d-flex align-items-center" id="navbar_search">
								<FaSearch className="navbar_search_icon" />
								<input
									type="text"
									className="form-control border-0 rounded-4 "
									placeholder="Search Products ..."
								/>
							</div>
						</form>
						<button className="btn">
							<FaShoppingBag className="fs-5" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
