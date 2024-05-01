import React from "react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CustomerInfo = () => {
	const schema = yup.object().shape({
		email: yup.string().email().required(),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Customer Info</h4>
				<p className="normal-text-block">* Required</p>
			</div>

			<fieldset className="block-content">
				<Label label={"Email *"} />

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form"
				>
					<input
						type="text"
						className="checkout-input"
						{...register("email")}
					/>
					<button>Submit</button>
				</form>
			</fieldset>
		</div>
	);
};

export default CustomerInfo;
