import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Sidebar = () => {
	const schema = yup.object().shape({
		discount: yup.string().required(),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="layout-sidebar">
			<div className="block-header">
				<h4>Order Summary</h4>
			</div>

			<div className="block-content">
				<div className="summary-line-item">
					<div>Subtotal:</div>
					<div className="total-price">$ 341.00 USD</div>
				</div>

				<div className="summary-line-item">
					<div>Flat Rate:</div>
					<div className="total-price">$ 18.90 USD</div>
				</div>

				<div className="summary-line-item">
					<div>Total:</div>
					<div className="text-block-2">$ 489.20 USD</div>
					{/* <div className="total-price">$ 341.00 USD</div> */}
				</div>
			</div>

			<div className="discounts">
				<label className="discounts-label">Discount Code</label>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className=" checkout-form flex"
				>
					<input
						className="discounts-input"
						{...register("discount")}
					/>
					<button className="discounts-button">Apply</button>
				</form>
			</div>

			<button className="place-order">Place Order</button>
		</div>
	);
};

export default Sidebar;
