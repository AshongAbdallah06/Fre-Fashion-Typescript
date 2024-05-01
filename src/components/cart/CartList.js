import React, { useContext } from "react";
import { AppContext } from "../../App";

const CartList = () => {
	const { cartItems, handleRemoveItem } = useContext(AppContext);

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
						<button
							className="remove-button"
							onClick={() => handleRemoveItem(item.itemId)}
						>
							Remove
						</button>
					</div>
					<div className="cart-quantity-input">
						{item.itemQuantity}
					</div>
				</div>
			))}
		</div>
	);
};

export default CartList;
