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
							(pageName) => (
								<li className="nav-item">
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
						<form>
							<div className="input-group">
								<span
									className="input-group-text bg-gray-light rounded-4"
									id="basic-addon1"
									style={{ cursor: "pointer" }}
								>
									<FaSearch />
								</span>
								<input
									type="text"
									className="form-control border-start-0 rounded-4 "
									placeholder="Search Products ..."
									aria-describedby="basic-addon1"
								/>
							</div>
						</form>
						<FaShoppingBag className="ms-3 fs-5" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
