import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const PurchaseForm = ({
	productName,
	productPrice,
	productImage,
	productId,
}) => {
	const { handleAddItem, itemQuantity, setItemQuantity, setCartDropdown } =
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
					min={1}
					className="quantity-input"
				/>
				<div>
					<button
						className="add-to-cart"
						onClick={() => {
							handleAddItem(
								productName,
								productImage,
								productPrice,
								itemQuantity,
								productId
							);

							setClicked(true);
							setTimeout(() => {
								setClicked(false);
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}, 2000);

							setTimeout(() => {
								setCartDropdown(true);
							}, 2200);
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
