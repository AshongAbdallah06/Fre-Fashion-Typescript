import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";

const ShippingBillingAddress = ({ label }) => {
	const { orderInfo } = useContext(AppContext);

	return (
		<div className="checkout-column">
			<Label label={label} />
			<p className="details">{orderInfo.shippingOrderInfo.name}</p>
			<p className="details">{orderInfo.shippingOrderInfo.streetAddress}</p>
			<p className="details">
				{orderInfo.shippingOrderInfo.city} {orderInfo.shippingOrderInfo.state}{" "}
				{orderInfo.shippingOrderInfo.postalCode}{" "}
			</p>
			<p className="details">{orderInfo.shippingOrderInfo.country}</p>
		</div>
	);
};

export default ShippingBillingAddress;
