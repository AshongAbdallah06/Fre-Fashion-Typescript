import Label from "../Label";
import useContextProvider from "../../../hooks/useContextProvider";

const ShippingAddressInfo = () => {
	const { orderInfo } = useContextProvider();

	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Shipping Method</h4>
			</div>

			<fieldset className="block-content">
				<div className="checkout-row">
					<div className="checkout-column">
						<Label label={orderInfo ? orderInfo.selectedMethod.name : ""} />
						<p>{orderInfo && orderInfo.selectedMethod.description}</p>
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default ShippingAddressInfo;
