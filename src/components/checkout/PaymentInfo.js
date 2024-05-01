import React from "react";
import Label from "./Label";
import Input from "./Input";
import Address from "./Address";

const PaymentInfo = () => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Payment Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<Label label={"Card Number *"} />
				<Input />

				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={"Expiration date *"} />
						<Input />
					</div>

					<div className="checkout-column">
						<Label label={"Security Code *"} />
						<Input />
					</div>
				</div>

				<div className="billing-address-toggle-wrapper">
					<input type="checkbox" />
					<label>Billing address same as shipping</label>
				</div>

				<div className="billing-address-wrapper">
					<Label label={" Full Name *"} />
					<Input />

					<Address />
				</div>
			</fieldset>
		</div>
	);
};

export default PaymentInfo;
