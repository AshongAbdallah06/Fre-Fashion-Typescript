import React from "react";
import paypalLogo from "../../images/paypal-logo.svg";

const PaypalButton = () => {
	return (
		<>
			<button className="button-pay cart-paypal-button">
				<img
					src={paypalLogo}
					className="paypal-icon"
					alt="paypal-icon"
				/>
				Checkout
			</button>
		</>
	);
};

export default PaypalButton;
