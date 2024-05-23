import React from "react";
import Label from "./Label";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { AppContext } from "../../App";

const CustomerInfo = ({ register, errors }) => {
	// const { orderInfo, setOrderInfo } = useContext(AppContext);

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
					value="sddsadsds@jsjjd.com"
				/>
			</fieldset>
		</div>
	);
};

export default CustomerInfo;
