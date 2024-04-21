import React from "react";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="flex-row">
				<div className="left">
					<p className="nav-link in-footer left">Home</p>
					<p className="nav-link in-footer left">Shop</p>
					<p className="nav-link in-footer left">Contact</p>
				</div>

				<div className="footer-right">
					<p className="nav-link in-footer follow">Follow us on:</p>
					<img
						src={facebook}
						alt="fb"
						className="social-media-icons"
					/>
					<img
						src={instagram}
						alt="ig"
						className="social-media-icons"
					/>
					<img
						src={twitter}
						alt="twitter"
						className="social-media-icons"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
