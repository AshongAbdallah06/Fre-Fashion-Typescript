import React from "react";
import Label from "./Label";
import Input from "./Input";
import Countries from "./Countries";

const Address = () => {
	return (
		<>
			<Label label={"Street Address *"} />
			<Input />
			<Input />
			<div className="checkout-row">
				<div className="checkout-column">
					<Label label={"City *"} />

					<Input />
				</div>

				<div className="checkout-column">
					<Label label={"State/Province *"} />

					<Input />
				</div>

				<div className="checkout-column">
					<Label label={"Zip/Postal Code *"} />

					<Input />
				</div>
			</div>
			<Countries />
		</>
	);
};

export default Address;
