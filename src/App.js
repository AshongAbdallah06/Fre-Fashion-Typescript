import React, { createContext, useState } from "react";
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
import formatCurrency from "./utils/money";

export const AppContext = createContext();

function App() {
	const title = "";
	const heading = "";

	const [product, setProduct] = useState({
		name: null,
		price: null,
		product_image: null,
		type: null,
	});

	return (
		<div className="App">
			<AppContext.Provider
				value={{ title, heading, product, setProduct }}
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
									path={`/${product.name
										.replaceAll(" ", "-")
										.toLowerCase()}`}
									element={
										<Item
											productName={product.name}
											productImage={product.product_image}
											productPrice={formatCurrency(
												product.price
											)}
											productType={product.type}
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
