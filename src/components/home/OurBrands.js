import React from "react";
import logo1 from "../../images/logo-1.png";
import logo2 from "../../images/logo-2.png";
import logo3 from "../../images/logo-3.png";
import logo4 from "../../images/logo-4.png";
import logo5 from "../../images/logo-5.png";
import logo6 from "../../images/logo-6.png";

const OurBrands = () => {
	return (
		<section className="margin-section">
			<div className="top-title">
				<h2>Our Brands</h2>
				<div className="divider"></div>
			</div>

			<div className="logo-wrapper">
				<img
					src={logo1}
					alt="logo1"
					className="client-logo"
				/>
				<img
					src={logo2}
					alt="logo2"
					className="client-logo"
				/>
				<img
					src={logo3}
					alt="logo3"
					className="client-logo"
				/>
				<img
					src={logo4}
					alt="logo4"
					className="client-logo"
				/>
				<img
					src={logo5}
					alt="logo5"
					className="client-logo"
				/>
				<img
					src={logo6}
					alt="logo6"
					className="client-logo"
				/>
			</div>
		</section>
	);
};

export default OurBrands;
