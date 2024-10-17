import React from "react";
import CardInfo from "./CardInfo";
import ShippingBillingAddress from "./ShippingBillingAddress";

const PaymentOrderInfo = () => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Payment Information</h4>
			</div>

			<fieldset className="block-content">
				<div className="checkout-row">
					<CardInfo />

					<ShippingBillingAddress label={"Billing Address"} />
				</div>
			</fieldset>
		</div>
	);
};

export default PaymentOrderInfo;
