import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";

const CustomerEmail = () => {
	const { orderInfo } = useContext(AppContext);
	return (
		<div className="checkout-column">
			<Label label={"Email"} />
			<p>{orderInfo.customerOrderInfo.email}</p>
		</div>
	);
};

export default CustomerEmail;
