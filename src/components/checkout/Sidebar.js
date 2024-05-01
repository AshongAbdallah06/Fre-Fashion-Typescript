import React from "react";

const Sidebar = () => {
	return (
		<div className="layout-sidebar">
			<div className="block-header">
				<h4>Order Summary</h4>
			</div>

			<div className="block-content">
				<div class="summary-line-item">
					<div>Subtotal:</div>
					<div class="total-price">$ 341.00 USD</div>
				</div>

				<div class="summary-line-item">
					<div>Flat Rate:</div>
					<div class="total-price">$ 18.90 USD</div>
				</div>

				<div class="summary-line-item">
					<div>Total:</div>
					<div class="text-block-2">$ 489.20 USD</div>
					{/* <div class="total-price">$ 341.00 USD</div> */}
				</div>
			</div>

			<div class="discounts">
				<label class="discounts-label">Discount Code</label>

				<div className="flex">
					<input className="discounts-input" />
					<button class="discounts-button">Apply</button>
				</div>
			</div>

			<button className="place-order">Place Order</button>
		</div>
	);
};

export default Sidebar;
