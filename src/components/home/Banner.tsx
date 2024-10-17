import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<section className="banner">
			<div className="align-center">
				<h1 className="heading-banner">
					Perfect eCommerce Webflow Template to Get Started
				</h1>
				<Link
					to={"/shop"}
					style={{ color: "white", fontFamily: "Poppins, serif" }}
				>
					<button className="get-started">Get Started</button>
				</Link>
			</div>
		</section>
	);
};

export default Banner;
