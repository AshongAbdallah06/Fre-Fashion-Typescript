import Label from "../Label";
import useContextProvider from "../../../hooks/useContextProvider";

const ShippingBillingAddress = ({ label }: { label: string }) => {
	const { orderInfo } = useContextProvider();

	return (
		<div className="checkout-column">
			<Label label={label} />
			{orderInfo && (
				<>
					<p className="details">{orderInfo.name}</p>
					<p className="details">{orderInfo.streetAddress}</p>
					<p className="details">
						{orderInfo.city} {orderInfo.state} {orderInfo.postalCode}{" "}
					</p>
					<p className="details">{orderInfo.country}</p>
				</>
			)}
		</div>
	);
};

export default ShippingBillingAddress;
