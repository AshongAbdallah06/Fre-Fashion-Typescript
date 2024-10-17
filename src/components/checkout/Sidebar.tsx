import { FC } from "react";
import useContextProvider from "../../hooks/useContextProvider";
import { OrderType } from "../../Interface";

interface Props {
	loadingFunction: () => void;
	orderExcludingSelectedMethod: OrderType | null;
	submitted: boolean;
	setSubmitted: (value: boolean) => void;
}

const Sidebar: FC<Props> = ({ orderExcludingSelectedMethod, submitted, setSubmitted }) => {
	const { isOrderPlaced, setIsOrderPlaced, orderInfo, selectedMethod, subtotal } =
		useContextProvider();

	const placeOrder = () => {
		// If all the fields required has been filled then place order
		if (!orderInfo) return;
		if (!orderInfo.selectedMethod) return;

		if (
			submitted &&
			orderInfo.selectedMethod !== null &&
			orderExcludingSelectedMethod !== null
		) {
			// No null fields
			setIsOrderPlaced(true);
			setSubmitted(false);
		} else {
			alert("Please submit the form before placing order.");
		}
	};

	return (
		<div className="layout-sidebar">
			<div className="block-header">
				<h4>Order Summary</h4>
			</div>

			<div className="block-content">
				<div className="summary-line-item">
					<div>Subtotal:</div>
					<div className="total-price">$ {subtotal} USD</div>
				</div>

				<div className="summary-line-item">
					<div style={{ textTransform: "capitalize" }}>
						{selectedMethod.name && selectedMethod.name}:
					</div>
					<div className="total-price">
						$ {selectedMethod.amount && selectedMethod.amount} USD
					</div>
				</div>

				<div className="summary-line-item">
					<div>Total:</div>
					<div className="text-block-2">
						${" "}
						{Number(subtotal) +
							Number(selectedMethod.amount && selectedMethod.amount) +
							"0"}{" "}
						USD
					</div>
				</div>
			</div>

			<div
				className="discounts"
				style={{ display: isOrderPlaced ? "none" : "" }}
			>
				<label className="discounts-label">Discount Code</label>

				<div className="checkout-form flex">
					<input className="discounts-input" />
					<button className="discounts-button">Apply</button>
				</div>
			</div>

			{!isOrderPlaced && (
				<button
					onClick={placeOrder}
					className="place-order"
				>
					Place Order
				</button>
			)}
		</div>
	);
};

export default Sidebar;
