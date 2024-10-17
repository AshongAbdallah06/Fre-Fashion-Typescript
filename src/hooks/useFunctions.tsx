import { useState } from "react";
import { Item } from "../Interface";

const useFunctions = () => {
	const [cartItems, setCartItems] = useState(() => {
		const storedItem = localStorage.getItem("cartItems");

		try {
			return storedItem ? JSON.parse(storedItem) : [];
		} catch (error) {
			console.log("🚀 ~ const[cartItems,setCartItems]=useState ~ error:", error);
		}
	});
	const [cartDropdown, setCartDropdown] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const handleAddItem = (
		productName: string | null,
		productImage: string | undefined,
		productPrice: string | null,
		quantity: number
	) => {
		// Check if cartItems is initialized and if not, initialize it as an empty array
		const updatedCartItems = cartItems ? cartItems : [];

		// Check if the item already exists in the cart
		const existingItemIndex = updatedCartItems.findIndex(
			(item: Item) => item.name === productName
		);

		if (existingItemIndex !== -1) {
			// If the item exists, update its quantity
			updatedCartItems[existingItemIndex].quantity += quantity;
		} else {
			// If the item doesn't exist, add it to the cart
			const id = updatedCartItems.length
				? updatedCartItems[updatedCartItems.length - 1].id + 1
				: 1;
			updatedCartItems.push({
				name: productName,
				product_image: productImage,
				price: productPrice,
				quantity: quantity,
				id: id,
			});
		}

		setCartItems(updatedCartItems);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	const handleRemoveItem = (id: number) => {
		const newCartItems = cartItems.filter((item: Item) => item.id !== id);
		setCartItems(newCartItems);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	return {
		cartItems,
		setCartItems,
		handleAddItem,
		handleRemoveItem,
		cartDropdown,
		setCartDropdown,
		quantity,
		setQuantity,
	};
};

export default useFunctions;
