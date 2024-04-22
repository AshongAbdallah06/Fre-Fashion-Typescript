import React, { useContext } from "react";
import { AppContext } from "../../App";

const CartList = () => {
	const { cartItems } = useContext(AppContext);

	return (
		<div className="cart-list">
			{cartItems.map((item) => (
				<div
					key={item.itemId}
					className="cart-item"
				>
					<img
						src={item.itemImage}
						className="cart-item-image"
						alt="item"
					/>
					<div className="cart-item-info">
						<p className="cart-product-name">{item.itemName}</p>
						<div className="text-block">$ {item.itemPrice} USD</div>
						<button className="remove-button">Remove</button>
					</div>
					<input
						className="cart-quantity-input"
						required
						pattern="^[0-9]+$"
						min="1"
						max="999"
						type="number"
						defaultValue={item.itemQuantity}
					/>
				</div>
			))}
		</div>
	);
};

export default CartList;
