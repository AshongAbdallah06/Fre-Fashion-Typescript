import useContextProvider from "../../hooks/useContextProvider";

const CartList = () => {
	const { cartItems, handleRemoveItem } = useContextProvider();

	return (
		<div className="cart-list">
			{cartItems.map((item, index) => (
				<div
					key={item.id ? item.id : index + 1}
					className="cart-item"
				>
					<img
						src={item.product_image}
						className="cart-item-image"
						alt="item"
					/>
					<div className="cart-item-info">
						<p className="cart-product-name">{item.name}</p>
						<div className="text-block">$ {item.price} USD</div>
						<button
							className="remove-button"
							onClick={() => handleRemoveItem(Number(item.id))}
						>
							Remove
						</button>
					</div>
					<div className="cart-quantity-input">{item.quantity}</div>
				</div>
			))}
		</div>
	);
};

export default CartList;
