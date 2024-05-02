import { useState } from "react";

const useFunctions = () => {
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
	const [cartDropdown, setCartDropdown] = useState(false);
	const [itemQuantity, setItemQuantity] = useState(1);

	const handleAddItem = (productName, productImage, productPrice, quantity) => {
		const quantityNumber = parseInt(quantity);

		// Check if cartItems is initialized and if not, initialize it as an empty array
		const updatedCartItems = cartItems ? [...cartItems] : [];

		// Check if the item already exists in the cart
		const existingItemIndex = updatedCartItems.findIndex(
			(item) => item.itemName === productName
		);

		if (existingItemIndex !== -1) {
			// If the item exists, update its quantity
			updatedCartItems[existingItemIndex].itemQuantity += quantityNumber;
		} else {
			// If the item doesn't exist, add it to the cart
			const id = updatedCartItems.length
				? updatedCartItems[updatedCartItems.length - 1].itemId + 1
				: 1;
			updatedCartItems.push({
				itemName: productName,
				itemImage: productImage,
				itemPrice: productPrice,
				itemQuantity: quantityNumber,
				itemId: id,
			});
		}

		setCartItems(updatedCartItems);
	};

	const handleRemoveItem = (id) => {
		const newCartItems = cartItems.filter((item) => item.itemId !== id);
		setCartItems(newCartItems);
	};

	return {
		cartItems,
		setCartItems,
		handleAddItem,
		handleRemoveItem,
		cartDropdown,
		setCartDropdown,
		itemQuantity,
		setItemQuantity,
	};
};

export default useFunctions;
