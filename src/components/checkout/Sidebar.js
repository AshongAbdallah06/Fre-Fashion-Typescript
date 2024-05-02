import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AppContext } from "../../App";
import formatCurrency from "../../utils/money";

const Sidebar = () => {
	const { setIsOrderPlaced, orderInfo, selectedMethod, subtotal } = useContext(AppContext);

	const schema = yup.object().shape({
		discount: yup.string(),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {};

	const placeOrder = (data) => {
		if (
			orderInfo.customerOrderInfo !== null &&
			orderInfo.shippingOrderInfo !== null &&
			orderInfo.paymentOrderInfo !== null
			// && orderInfo.orderItems !== null
		) {
			console.log("At least one of the specified values is not null");
			setIsOrderPlaced(true);
		} else {
			console.log("ALL VALUES ARE NULL");
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

			<div className="discounts">
				<label className="discounts-label">Discount Code</label>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="checkout-form flex"
				>
					<input
						className="discounts-input"
						{...register("discount")}
					/>
					<button className="discounts-button">Apply</button>
				</form>
			</div>

			<form
				onSubmit={handleSubmit(placeOrder)}
				className="checkout-form"
			>
				<button className="place-order">Place Order</button>
			</form>
		</div>
	);
};

export default Sidebar;
