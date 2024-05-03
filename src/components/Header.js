import React, { useContext } from "react";
import logo from "../images/fre-logo.png";
import phone from "../images/phone.png";
import newPost from "../images/new-post.png";
import cart from "../images/shopping-cart.svg";
import { Link } from "react-router-dom";
import CartInfoDropdown from "./cart/CartInfoDropdown";
import { AppContext } from "../App";

const Header = () => {
	const { cartItems } = useContext(AppContext);
	const { cartDropdown, setCartDropdown } = useContext(AppContext);
	return (
		<header>
			{cartDropdown && <CartInfoDropdown />}

			<nav className="top-banner">
				<nav>
					<Link
						to={"/"}
						className="nav-link"
						onClick={() => setCartDropdown(false)}
					>
						<img
							src={logo}
							alt="logo"
							className="logo"
						/>
					</Link>
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
						onClick={() => setCartDropdown(!cartDropdown)}
						className="container"
						id="cart"
					>
						<img
							src={cart}
							alt="cart"
							className="nav-icons"
						/>
						<p className="cartlength">{cartItems.length}</p>
					</div>
				</nav>
			</nav>

			<nav className="nav-menu">
				<Link
					to={"/"}
					className="nav-link"
					onClick={() => setCartDropdown(false)}
				>
					Home
				</Link>
				&nbsp;
				<Link
					to={"/shop"}
					className="nav-link"
					onClick={() => setCartDropdown(false)}
				>
					Shop
				</Link>
				&nbsp;
				<Link
					to={"/contact"}
					className="nav-link"
					onClick={() => setCartDropdown(false)}
				>
					Contact
				</Link>
			</nav>
		</header>
	);
};

export default Header;
