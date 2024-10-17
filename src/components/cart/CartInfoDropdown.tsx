import "../../styles/cart-dropdown.css";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartEmpty from "./CartEmpty";
import PayOptions from "./PayOptions";
import useContextProvider from "../../hooks/useContextProvider";

const CartInfoDropdown = () => {
	const { cartItems, cartDropdown } = useContextProvider();

	return (
		<div className={`cart-dropdown-wrapper ${cartDropdown && "animation"}`}>
			<CartHeader />

			<section className="cart-item-wrapper">
				{!cartItems.length && <CartEmpty />}

				<CartList />
			</section>

			<PayOptions />
		</div>
	);
};

export default CartInfoDropdown;
