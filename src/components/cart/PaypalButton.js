import React from "react";
import paypalLogo from "../../images/paypal-logo.svg";

const PaypalButton = () => {
	return (
		<>
			<button className="button-pay cart-paypal-buttton">
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
