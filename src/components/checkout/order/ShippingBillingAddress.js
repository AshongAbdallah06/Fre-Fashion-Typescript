import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";

const ShippingBillingAddress = ({ label }) => {
	const { orderInfo } = useContext(AppContext);

	return (
		<div className="checkout-column">
			<Label label={label} />
			<p className="details">{orderInfo.name}</p>
			<p className="details">{orderInfo.streetAddress}</p>
			<p className="details">
				{orderInfo.city} {orderInfo.state} {orderInfo.postalCode}{" "}
			</p>
			<p className="details">{orderInfo.country}</p>
		</div>
	);
};

export default ShippingBillingAddress;
