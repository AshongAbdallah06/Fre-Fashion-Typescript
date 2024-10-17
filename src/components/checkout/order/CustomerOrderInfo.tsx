import Label from "../Label";

import ShippingBillingAddress from "./ShippingBillingAddress";
import useContextProvider from "../../../hooks/useContextProvider";

const CustomerOrderInfo = () => {
	const { orderInfo } = useContextProvider();

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Customer Information</h4>
			</div>

			<fieldset className="block-content">
				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={"Email"} />
						<p>{orderInfo && orderInfo.email}</p>
					</div>

					<ShippingBillingAddress label={"Shipping Address"} />
				</div>
			</fieldset>
		</div>
	);
};

export default CustomerOrderInfo;
