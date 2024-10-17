import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { ContextType, Item, OrderInfo, ProductType, SelectedMethod } from "../Interface";
import formatCurrency from "../utils/Money";
import useFunctions from "../hooks/useFunctions";

export const Context = createContext<ContextType | undefined>(undefined);

interface Props {
	children: ReactNode;
}

export const ContextProvider: FC<Props> = ({ children }) => {
	const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false);
	const [selectedMethod, setSelectedMethod] = useState<SelectedMethod>({
		name: "flat-rate",
		amount: formatCurrency(1890),
		description: "Standard flat rate for all shipments.",
	});

	const {
		cartItems,
		setCartItems,
		handleAddItem,
		handleRemoveItem,
		cartDropdown,
		setCartDropdown,
		quantity,
		setQuantity,
	} = useFunctions();

	const title = "";
	const heading = "";

	const [orderInfo, setOrderInfo] = useState<OrderInfo | undefined>(undefined);

	useEffect(() => {
		// Calculate subtotal whenever cartItems change
		calculateSubTotal();
	}, [cartItems]);

	const [subtotal, setSubtotal] = useState<number>(0);
	const calculateSubTotal = () => {
		let total = 0;
		cartItems.forEach((item: Item) => {
			total += item.price * item.quantity;
		});
		setSubtotal(total);
	};

	const [product, setProduct] = useState<ProductType>(() => {
		const storedItem = localStorage.getItem("product");

		try {
			return storedItem ? JSON.parse(storedItem) : null;
		} catch (error) {
			return error;
		}
	});

	useEffect(() => {
		localStorage.setItem("product", JSON.stringify(product));
	}, [product]);

	return (
		<Context.Provider
			value={{
				title,
				heading,
				product,
				setProduct,
				cartDropdown,
				setCartDropdown,
				cartItems,
				setCartItems,
				handleAddItem,
				handleRemoveItem,
				quantity,
				setQuantity,
				subtotal,
				isOrderPlaced,
				setIsOrderPlaced,
				orderInfo,
				setOrderInfo,
				selectedMethod,
				setSelectedMethod,
				calculateSubTotal,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
