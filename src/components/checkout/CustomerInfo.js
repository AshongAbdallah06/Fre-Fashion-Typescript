import React from "react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CustomerInfo = () => {
	const schema = yup.object().shape({
		email: yup.string().email("Please enter a valid email").required("Email is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
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
				{errors.email && <span className="error">{errors.email.message}</span>}
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form"
				>
					<input
						type="email"
						className={`checkout-input ${errors.email && "error-input"}`}
						{...register("email")}
					/>
					<button>Submit</button>
				</form>
			</fieldset>
		</div>
	);
};

export default CustomerInfo;
