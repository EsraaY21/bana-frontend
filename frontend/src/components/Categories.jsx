import { Link } from "react-router-dom";
import categoryImage from "../images/category.png";

const categories = [
	{ title: "Soaps", image: categoryImage },
	{ title: "Candles", image: categoryImage },
	{ title: "Hair", image: categoryImage },
	{ title: "Skin", image: categoryImage },
];

const Categories = () => {
	return (
		<section className="categories container inner-section-y-padding">
			<div className="row text-center">
				<h2 className="cursive-title">Discover</h2>
				<h1 className="color-blue-dark fw-bold mb-5">Categories</h1>
				{categories.map((category) => (
					<div key={category.title} className="col-lg-3">
						<Link to={`shop/${category.title.toLowerCase()}`}>
							<svg
								className="bd-placeholder-img rounded-circle"
								width="140"
								height="140"
								role="img"
								aria-label="Placeholder: 140x140"
								preserveAspectRatio="xMidYMid slice"
								focusable="false"
							>
								<rect width="100%" height="100%" fill="#F5F5F5" />
							</svg>
							<h4 className="color-blue-dark mt-3">{category.title}</h4>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default Categories;
