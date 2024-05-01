import React from "react";
import Input from "./Input";
import Label from "./Label";

const CustomerInfo = () => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Customer Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<Label label={"Email *"} />

				<Input />
			</fieldset>
		</div>
	);
};

export default CustomerInfo;
