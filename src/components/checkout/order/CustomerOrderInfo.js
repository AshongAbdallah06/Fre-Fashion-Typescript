import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";
import ShippingBillingAddress from "./ShippingBillingAddress";

const CustomerOrderInfo = () => {
	const { orderInfo } = useContext(AppContext);

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Customer Information</h4>
			</div>

			<fieldset className="block-content">
				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={"Email"} />
						<p>{orderInfo.customerOrderInfo.email}</p>
					</div>

					<ShippingBillingAddress label={"Shipping Address"} />
				</div>
			</fieldset>
		</div>
	);
};

export default CustomerOrderInfo;
