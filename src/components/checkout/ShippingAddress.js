import React, { useContext, useState } from "react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Countries from "./Countries";
import { AppContext } from "../../App";

const ShippingAddress = () => {
	const { shippingAddress, setShippingAddress } = useContext(AppContext);
	const schema = yup.object().shape({
		name: yup.string().required().min(2),
		streetAddress: yup.string().required(),
		streetAddress2: yup.string(),
		city: yup.string().required(),
		state: yup.string().required(),
		postalCode: yup
			.string()
			.required("Postal code is required")
			.matches(/^[0-9]{3}$/),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		setShippingAddress({
			name: data.name,
			streetAddress: data.streetAddress,
			streetAddress2: data.streetAddress2 ? data.streetAddress2 : null,
			city: data.city,
			state: data.state,
			postalCode: data.postalCode,
			country: data,
		});

		console.log(data);
		console.log("Shipping Info: ", shippingAddress);
	};
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Address</h4>

				<div className="normal-text-block">* Required</div>
			</div>

			<fieldset className="block-content">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form"
				>
					<div>
						<Label label={" Full Name *"} />
						<input
							className="checkout-input"
							type="text"
							{...register("name")}
						/>
					</div>

					<div>
						<Label label={"Street Address *"} />
						<input
							className="checkout-input"
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
								className="checkout-input"
								type="text"
								{...register("city")}
							/>
						</div>

						<div className="checkout-column">
							<Label label={"State/Province *"} />

							<input
								className="checkout-input"
								type="text"
								{...register("state")}
							/>
						</div>

						<div className="checkout-column">
							<Label label={"Zip/Postal Code *"} />

							<input
								className="checkout-input"
								type="text"
								maxLength={3}
								{...register("postalCode")}
							/>
						</div>
					</div>
					<Countries />

					<button className="submit">Submit</button>
				</form>
			</fieldset>
		</div>
	);
};

export default ShippingAddress;
