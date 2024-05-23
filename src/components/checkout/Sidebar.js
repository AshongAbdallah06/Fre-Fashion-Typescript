import React, { useContext } from "react";
import { AppContext } from "../../App";

const Sidebar = ({ loadingFunction, orderExcludingSelectedMethod }) => {
	const { isOrderPlaced, setIsOrderPlaced, orderInfo, selectedMethod, subtotal } =
		useContext(AppContext);

	// const { handleSubmit } = useForm();

	const placeOrder = () => {
		// If all the fields required has been filled then place order
		if (orderInfo.selectedMethod !== null && orderExcludingSelectedMethod !== null) {
			// No null fields
			setIsOrderPlaced(true);
			loadingFunction();
		} else {
			alert("Please fill out the fields");
		}
	};

	// const onSubmit = () => {
	// 	// Prevent Default behavior of the form
	// 	placeOrder();
	// };

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
				style={{ display: isOrderPlaced && "none" }}
			>
				<label className="discounts-label">Discount Code</label>

				<div className="checkout-form flex">
					<input className="discounts-input" />
					<button className="discounts-button">Apply</button>
				</div>
			</div>

			{/* <form
				onSubmit={handleSubmit(placeOrder)}
				className="checkout-form"
				style={{ display: isOrderPlaced && "none" }}
			> */}
			<button
				onClick={placeOrder}
				className="place-order"
			>
				Place Order
			</button>
			{/* </form> */}
		</div>
	);
};

export default Sidebar;
