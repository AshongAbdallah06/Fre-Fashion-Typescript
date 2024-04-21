import React from "react";
import logo from "../../images/fre-logo.png";
import phone from "../../images/phone.png";
import newPost from "../../images/new-post.png";
import cart from "../../images/shopping-cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="top-banner">
				<nav>
					<img
						src={logo}
						alt="logo"
						className="logo"
					/>
				</nav>

				<nav className="right-section">
					<div
						className="container"
						id="phone"
					>
						<img
							src={phone}
							alt="phone"
							className="nav-icons"
						/>
					</div>
					<div
						className="container"
						id="mail"
					>
						<img
							src={newPost}
							alt="new-post"
							className="nav-icons"
						/>
					</div>
					<div
						className="container"
						id="cart"
					>
						<img
							src={cart}
							alt="cart"
							className="nav-icons"
						/>
					</div>
				</nav>
			</nav>

			<nav className="nav-menu">
				<Link
					to={"/"}
					className="nav-link"
				>
					Home
				</Link>
				&nbsp;
				<Link
					to={"/shop"}
					className="nav-link"
				>
					Shop
				</Link>
				&nbsp;
				<Link
					to={"/contact"}
					className="nav-link"
				>
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
