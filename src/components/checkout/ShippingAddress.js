import React, { useContext, useState } from "react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Countries from "./Countries";
import { AppContext } from "../../App";

const ShippingAddress = ({ submitted, setSubmitted, handleSubmitted }) => {
	const { orderInfo, setOrderInfo } = useContext(AppContext);

	// const [shippingAddress, setShippingAddress] = useState(null);
	const [country, setCountry] = useState("Afghanistan");

	const schema = yup.object().shape({
		name: yup
			.string()
			.required("Your Full Name is required")
			.matches(/^[A-Za-z -]+$/, "Please enter a valid full name"),

		streetAddress: yup
			.string()
			.required("Your Street Address is required")
			.matches(/^[0-9]+ [A-Za-z]+ [A-Za-z ]+$/, "Please enter a valid street address"),
		streetAddress2: yup.string(),
		city: yup
			.string()
			.required()
			.matches(/^[A-Za-z]{4,}$/),
		state: yup
			.string()
			.required()
			.matches(/^[A-Za-z]{2,}$/),
		postalCode: yup
			.string()
			.required("Postal code is required")
			.matches(/^[0-9]{3,7}$/),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		data.country = country;
		// setShippingAddress(data);

		setOrderInfo({ ...orderInfo, shippingOrderInfo: data });

		handleSubmitted();
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

					<button className="submit">Submit</button>
				</form>
			</fieldset>
		</div>
	);
};

export default ShippingAddress;
