import React from "react";

const Sidebar = () => {
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

				<div className="flex">
					<input className="discounts-input" />
					<button className="discounts-button">Apply</button>
				</div>
			</div>

			<button className="place-order">Place Order</button>
		</div>
	);
};

export default Sidebar;
