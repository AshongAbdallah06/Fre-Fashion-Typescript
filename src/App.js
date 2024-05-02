import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/general.css";
import "./styles/App.css";
import Content from "./components/home/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import Accessories from "./components/shop/Accessories";
import Jewelry from "./components/shop/Jewelry";
import Bags from "./components/shop/Bags";
import Hats from "./components/shop/Hats";
import Item from "./components/selected-item/Item";
import Checkout from "./components/checkout/Checkout";
import formatCurrency from "./utils/money";
// import Login from "./components/login/Login";
import useFunctions from "./hooks/useFunctions";

export const AppContext = createContext();

function App() {
	const [isOrderPlaced, setIsOrderPlaced] = useState(false);
	const [selectedMethod, setSelectedMethod] = useState({
		name: "flat-rate",
		amount: formatCurrency(1890),
	});

	const {
		cartItems,
		setCartItems,
		handleAddItem,
		handleRemoveItem,
		cartDropdown,
		setCartDropdown,
		itemQuantity,
		setItemQuantity,
	} = useFunctions();

	const title = "";
	const heading = "";

	const [orderInfo, setOrderInfo] = useState({
		customerOrderInfo: null,
		shippingOrderInfo: null,
		shippingMethodInfo: {
			name: "flat-rate",
			description: "Standard flat rate for all shipments",
		},
		paymentOrderInfo: null,
	});

	useEffect(() => {
		// Calculate subtotal whenever cartItems change
		calculateSubTotal();
	});

	const [subtotal, setSubtotal] = useState(0);
	const calculateSubTotal = () => {
		let total = 0;
		cartItems.forEach((item) => {
			total += item.itemPrice * item.itemQuantity;
		});
		setSubtotal(total + ".00");
	};

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	const [product, setProduct] = useState(
		JSON.parse(localStorage.getItem("product")) || {
			name: null,
			price: null,
			product_image: null,
			quantity: null,
			type: null,
		}
	);

	useEffect(() => {
		localStorage.setItem("product", JSON.stringify(product));
	}, [product]);

	return (
		<div className="App">
			{/* <Login /> */}
			<AppContext.Provider
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
					itemQuantity,
					setItemQuantity,
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
				<Router>
					<Header />

					<Routes>
						<Route
							path="/"
							element={<Content />}
						/>
						<Route
							path="/shop"
							element={<Shop />}
						/>
						{product.name !== null && (
							<>
								<Route
									path={`/shop/${product.name
										.replaceAll(" ", "-")
										.toLowerCase()}`}
									element={
										<Item
											productName={product.name}
											productImage={product.product_image}
											productPrice={formatCurrency(product.price)}
											productType={product.type}
											productQuantity={product.quantity}
										/>
									}
								/>
							</>
						)}
						<Route
							path="/shop/accessories"
							element={<Accessories />}
						/>
						<Route
							path="/shop/jewelry"
							element={<Jewelry />}
						/>
						<Route
							path="/shop/bags"
							element={<Bags />}
						/>
						<Route
							path="/shop/hats"
							element={<Hats />}
						/>
						<Route
							path="/contact"
							element={<Contact />}
						/>
						<Route
							path="/checkout"
							element={<Checkout />}
						/>
						<Route
							path="*"
							element={<h1>404 PAGE CANNOT BE FOUND</h1>}
						/>
					</Routes>

					<Footer />
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
