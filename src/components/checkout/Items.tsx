import useContextProvider from "../../hooks/useContextProvider";

const Items = () => {
	const { cartItems } = useContextProvider();
	return (
		<div className="wrapper">
			<div className="block-header">
				<h4>Items in Order</h4>
			</div>

			<fieldset className="block-content">
				{cartItems.map((item) => (
					<div
						className="order-item"
						key={item.id}
					>
						<img
							src={item.product_image}
							alt="item"
							className="cart-item-image"
						/>

						<div className="item-description-wrapper">
							<div className="bold-text-block">{item.name}</div>
							<div className="item-quantity-wrapper">
								<p className="item-quantity">Quantity:</p>
								<p className="quantity">{item.quantity}</p>
							</div>
						</div>

						<div className="item-price amount">$ {item.price} USD</div>
					</div>
				))}
			</fieldset>
		</div>
	);
};

export default Items;
