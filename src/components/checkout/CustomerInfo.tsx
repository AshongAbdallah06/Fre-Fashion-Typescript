import React from "react";
import Label from "./Label";

const CustomerInfo = ({ register, errors }: { register: any; errors: any }) => {
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Customer Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<Label label={"Email *"} />
				{errors.email && <span className="error">{errors.email.message}</span>}

				<input
					type="email"
					className={`checkout-input ${errors.email && "error-input"}`}
					{...register("email")}
				/>
			</fieldset>
		</div>
	);
};

export default CustomerInfo;
