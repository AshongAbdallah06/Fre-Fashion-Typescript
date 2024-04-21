import React from "react";

const PurchaseForm = () => {
	return (
		<>
			<div className="top-margin">
				<label
					htmlFor="quantity"
					className="quantity-label"
				>
					Quantity
				</label>
				<input
					defaultValue={0}
					id="quantity"
					type="number"
					max={999}
					min={0}
					className="quantity-input"
				/>
				<div>
					<button className="add-to-cart">Add to Cart</button>
				</div>
				<div>
					<button>Buy now</button>
				</div>
			</div>
		</>
	);
};

export default PurchaseForm;
