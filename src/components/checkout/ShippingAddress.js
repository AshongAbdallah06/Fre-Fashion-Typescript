import React from "react";
import Input from "./Input";
import Label from "./Label";
import Address from "./Address";

const ShippingAddress = () => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Address</h4>

				<div className="normal-text-block">* Required</div>
			</div>

			<fieldset className="block-content">
				<Label label={"Name *"} />
				<Input />

				<Address />
			</fieldset>
		</div>
	);
};

export default ShippingAddress;
