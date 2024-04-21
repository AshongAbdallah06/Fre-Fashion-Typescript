import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<section className="banner">
			<div className="align-center">
				<h1 className="heading-banner">
					Perfect eCommerce Webflow Template to Get Started
				</h1>
				<button className="get-started">
					<Link
						to={"/shop"}
						style={{ color: "white", fontFamily: "Poppins, serif" }}
					>
						Get Started
					</Link>
				</button>
			</div>
		</section>
	);
};

export default Banner;
