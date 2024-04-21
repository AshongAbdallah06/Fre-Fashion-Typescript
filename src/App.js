import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import Content from "./components/home/Content";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Contact from "./components/contact/Contact";
import Shop from "./components/shop/Shop";
import Accessories from "./components/shop/Accessories";
import Jewelry from "./components/shop/Jewelry";
import Bags from "./components/shop/Bags";

// export const AppContext = createContext();

function App() {
	return (
		<div className="App">
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
		</div>
	);
}

export default App;
