import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";

const ShippingAddressInfo = () => {
	const { orderInfo } = useContext(AppContext);

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Method</h4>
			</div>

			<fieldset className="block-content">
				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={orderInfo.selectedMethod.name} />
						<p>{orderInfo.selectedMethod.description}</p>
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default ShippingAddressInfo;
