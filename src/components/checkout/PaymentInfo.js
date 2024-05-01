import React, { useState } from "react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const PaymentInfo = () => {
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
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		setPaymentInfo({
			cardNumber: data.cardNumber,
			expirationDate: data.expirationDate,
			securityCode: data.securityCode,
		});

		console.log("Payment Info: ", paymentInfo);
	};

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

					<button className="submit">Submit</button>
				</form>
			</fieldset>
		</div>
	);
};

export default PaymentInfo;
