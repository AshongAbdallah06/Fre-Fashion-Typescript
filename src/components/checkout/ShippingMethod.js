import React from "react";

const ShippingMethod = () => {
	const methodItems = [
		{
			name: "Flat Rate",
			textBlock: "Standard flat rate for all shipments.",
			amount: "$ 18.90 USD",
			id: 1,
		},
		{
			name: "Expedited Shipping",
			textBlock: "Expedited shipping to get the shipment in a day or two.",
			amount: "$ 81.90 USD",
			id: 2,
		},
		{
			name: "Overnight Shipping",
			textBlock: "An expensive option to get the shipment on the next business day.",
			amount: "$ 148.20 USD",
			id: 3,
		},
	];

	return (
		<div className="wrapper">
			<div className="wrapper">
				<div className="block-header">
					<h4>Shipping Method</h4>
					<p className="normal-text-block">* Required</p>
				</div>

				<fieldset className="block-content methods-list">
					{/* Using array to make code cleaner */}
					{methodItems.map((item) => (
						<div
							className="method-item"
							key={item.id}
						>
							<input
								type="radio"
								name="method"
							/>

							<div className="method-description">
								<div className="bold-text-block">{item.name}</div>
								<div className="normal-text-block">{item.textBlock}</div>
							</div>

							<div className="amount">{item.amount}</div>
						</div>
					))}
				</fieldset>
			</div>
		</div>
	);
};

export default ShippingMethod;
