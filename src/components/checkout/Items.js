import React, { useContext } from "react";
import { AppContext } from "../../App";

const Items = () => {
	const { cartItems } = useContext(AppContext);
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Items in Order</h4>
			</div>

			<fieldset className="block-content">
				{cartItems.map((item) => (
					<div className="order-item">
						<img
							src={item.itemImage}
							alt="item"
							className="cart-item-image"
						/>

						<div className="item-description-wrapper">
							<div className="bold-text-block">{item.itemName}</div>
							<div className="item-quantity-wrapper">
								<p className="item-quantity">Quantity:</p>
								<p className="quantity">{item.itemQuantity}</p>
							</div>
						</div>

						<div className="item-price amount">$ {item.itemPrice} USD</div>
					</div>
				))}
			</fieldset>
		</div>
	);
};

export default Items;
