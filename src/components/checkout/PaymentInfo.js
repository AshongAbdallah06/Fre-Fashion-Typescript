import React, { useContext, useEffect, useState } from "react";
import Label from "./Label";
// import Input from "./Input";
import Countries from "./Countries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AppContext } from "../../App";

const PaymentInfo = () => {
	const { shippingAddress } = useContext(AppContext);
	const [isChecked, setIsChecked] = useState(false);

	const [paymentInfo, setPaymentInfo] = useState({
		cardNumber: null,
		expirationDate: null,
		securityCode: null,
		name: null,
		streetAddress: null,
		streetAddress2: null,
		city: null,
		state: null,
		postalCode: null,
	});

	const schema = yup.object().shape({
		cardNumber: yup.string().required(),
		// .matches(/^[0-9]{13,19}$/),
		expirationDate: yup
			.string()
			.required()
			.matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),
		securityCode: yup
			.string()
			.required()
			.matches(/^[0-9]{3}$/),
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
		setPaymentInfo({
			cardNumber: data.cardNumber,
			expirationDate: data.expirationDate,
			securityCode: data.securityCode,
			name: isChecked ? shippingAddress.name : data.name,
			streetAddress: isChecked ? shippingAddress.streetAddress : data.streetAddress,
			streetAddress2: data.streetAddress2 ? data.streetAddress2 : null,
			city: isChecked ? shippingAddress.city : data.city,
			state: isChecked ? shippingAddress.state : data.state,
			postalCode: isChecked ? shippingAddress.postalCode : data.postalCode,
		});

		console.log(data);
		console.log("Payment Info: ", paymentInfo);
	};

	useEffect(() => {
		isChecked
			? setPaymentInfo({
					...paymentInfo,
					name: shippingAddress.name,
					streetAddress: shippingAddress.streetAddress,
					streetAddress2: shippingAddress.streetAddress2,
					city: shippingAddress.city,
					state: shippingAddress.state,
					postalCode: shippingAddress.postalCode,
			  })
			: setPaymentInfo({
					...paymentInfo,
					name: null,
					streetAddress: null,
					streetAddress2: null,
					city: null,
					state: null,
					postalCode: null,
			  });
	}, [isChecked]);

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Payment Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form"
				>
					<Label label={"Card Number *"} />
					<input
						className="checkout-input"
						type="text"
						minLength={13}
						maxLength={19}
						{...register("cardNumber")}
					/>

					<div className="checkout-row">
						<div className="checkout-column">
							<Label label={"Expiration date *"} />
							<input
								className="checkout-input"
								type="text"
								maxLength={5}
								placeholder="MM/YY"
								{...register("expirationDate")}
							/>
						</div>

						<div className="checkout-column">
							<Label label={"Security Code *"} />
							<input
								className="checkout-input"
								type="text"
								maxLength={3}
								{...register("securityCode")}
							/>
						</div>
					</div>

					<div className="billing-address-toggle-wrapper">
						<input
							type="checkbox"
							onClick={() => {
								shippingAddress && setIsChecked(!isChecked);
							}}
						/>
						<label>Billing address same as shipping</label>
					</div>

					<div className="billing-address-wrapper">
						<div>
							<Label label={" Full Name *"} />
							{isChecked ? (
								<div className="hekl">{shippingAddress.name}</div>
							) : (
								<input
									className="checkout-input"
									type="text"
									{...register("name")}
								/>
							)}
						</div>

						<div>
							<Label label={"Street Address *"} />
							{isChecked ? (
								<>
									<div className="hekl">{shippingAddress.streetAddress}</div>
									<div className="hekl">{shippingAddress.streetAddress2}</div>
								</>
							) : (
								<>
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
								</>
							)}
						</div>

						<div className="checkout-row">
							<div className="checkout-column">
								<Label label={"City *"} />

								{isChecked ? (
									<div className="hekl">{shippingAddress.city}</div>
								) : (
									<input
										className="checkout-input"
										type="text"
										{...register("city")}
									/>
								)}
							</div>

							<div className="checkout-column">
								<Label label={"State/Province *"} />

								{isChecked ? (
									<div className="hekl">{shippingAddress.state}</div>
								) : (
									<input
										className="checkout-input"
										type="text"
										{...register("state")}
									/>
								)}
							</div>

							<div className="checkout-column">
								<Label label={"Zip/Postal Code *"} />

								{isChecked ? (
									<div className="hekl">{shippingAddress.postalCode}</div>
								) : (
									<input
										className="checkout-input"
										type="text"
										{...register("postalCode")}
									/>
								)}
							</div>
						</div>

						<Countries />

						<button className="submit">Submit</button>
					</div>
				</form>
			</fieldset>
		</div>
	);
};

export default PaymentInfo;
