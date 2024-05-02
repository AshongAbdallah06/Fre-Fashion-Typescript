import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../App";

const Sidebar = () => {
	const { cartItems, isOrderPlaced, setIsOrderPlaced, orderInfo, selectedMethod, subtotal } =
		useContext(AppContext);

	const { handleSubmit } = useForm();

	const onSubmit = () => {
		// Prevent Default behavior of the form
	};

	const placeOrder = () => {
		// If all the fields required has been filled then place order
		if (
			orderInfo.customerOrderInfo !== null &&
			orderInfo.shippingOrderInfo !== null &&
			orderInfo.paymentOrderInfo !== null
			// cartItems.length === 0
		) {
			// No null fields
			setIsOrderPlaced(true);
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
					<div style={{ textTransform: "capitalize" }}>{selectedMethod.name}:</div>
					<div className="total-price">$ {selectedMethod.amount} USD</div>
				</div>

				<div className="summary-line-item">
					<div>Total:</div>
					<div className="text-block-2">
						$ {Number(subtotal) + Number(selectedMethod.amount) + "0"} USD
					</div>
				</div>
			</div>

			<div
				className="discounts"
				style={{ display: isOrderPlaced && "none" }}
			>
				<label className="discounts-label">Discount Code</label>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form flex"
				>
					<input className="discounts-input" />
					<button className="discounts-button">Apply</button>
				</form>
			</div>

			<form
				onSubmit={handleSubmit(placeOrder)}
				className="checkout-form"
				style={{ display: isOrderPlaced && "none" }}
			>
				<button className="place-order">Place Order</button>
			</form>
		</div>
	);
};

export default Sidebar;
