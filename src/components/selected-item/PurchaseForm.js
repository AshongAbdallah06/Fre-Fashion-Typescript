import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

const PurchaseForm = ({
	productName,
	productPrice,
	productImage,
	productQuantity,
}) => {
	const { handleAddToCart, itemQuantity, setItemQuantity } =
		useContext(AppContext);

	const [clicked, setClicked] = useState(false);

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
					onChange={(e) => setItemQuantity(e.target.value)}
					value={itemQuantity}
					id="quantity"
					type="number"
					max={999}
					min={0}
					className="quantity-input"
				/>
				<div>
					<button
						className="add-to-cart"
						onClick={() => {
							handleAddToCart(
								productName,
								productImage,
								productPrice,
								itemQuantity
							);

							setClicked(true);
							setTimeout(() => {
								setClicked(false);
							}, 2000);
						}}
					>
						{clicked ? "Adding to Cart" : "Add to Cart"}
					</button>
				</div>
				<div>
					<button>Buy now</button>
				</div>
			</div>
		</>
	);
};

export default PurchaseForm;
