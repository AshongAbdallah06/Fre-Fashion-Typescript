import React, { useState } from "react";
import Label from "./Label";
import Countries from "./Countries";

const ShippingAddress = ({ register, errors }) => {
	const [country, setCountry] = useState("Afghanistan");

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Address</h4>

				<div className="normal-text-block">* Required</div>
			</div>

			<fieldset className="block-content">
				<div>
					<Label label={"Full Name *"} />
					{errors.name && <span className="error">{errors.name.message}</span>}
					<input
						className={`checkout-input ${errors.name && "error-input"}`}
						type="text"
						{...register("name")}
					/>
				</div>

				<div>
					<Label label={"Street Address *"} />
					{errors.streetAddress && (
						<span className="error">{errors.streetAddress.message}</span>
					)}

					<input
						className={`checkout-input ${errors.streetAddress && "error-input"}`}
						type="text"
						{...register("streetAddress")}
					/>
					<input
						className="checkout-input"
						type="text"
						{...register("streetAddress2")}
					/>
				</div>

				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={"City *"} />

						<input
							className={`checkout-input ${errors.city && "error-input"}`}
							type="text"
							{...register("city")}
						/>
					</div>

					<div className="checkout-column">
						<Label label={"State/Province *"} />

						<input
							className={`checkout-input ${errors.state && "error-input"}`}
							type="text"
							{...register("state")}
						/>
					</div>

					<div className="checkout-column">
						<Label label={"Zip/Postal Code *"} />

						<input
							className={`checkout-input ${errors.postalCode && "error-input"}`}
							type="text"
							maxLength={7}
							{...register("postalCode")}
						/>
					</div>
				</div>
				<Countries
					country={country}
					setCountry={setCountry}
				/>
			</fieldset>
		</div>
	);
};

export default ShippingAddress;
