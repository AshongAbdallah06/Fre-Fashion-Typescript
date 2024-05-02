import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import formatCurrency from "../../utils/money";
import ApplePayButton from "./ApplePayButton";
import PaypalButton from "./PaypalButton";

const PayOptions = () => {
	const { subtotal, setCartDropdown } = useContext(AppContext);
	return (
		<section className="pay-options">
			<div className="cart-labels">
				<label>Subtotal</label>
				<label>$ {formatCurrency(subtotal)} USD</label>
			</div>

			<PaypalButton />

			<ApplePayButton />

			<button onClick={() => setCartDropdown(false)}>
				<Link
					to={"/checkout"}
					className="button-pay checkout-button"
				>
					Continue to Checkout
				</Link>
			</button>
		</section>
	);
};

export default PayOptions;
