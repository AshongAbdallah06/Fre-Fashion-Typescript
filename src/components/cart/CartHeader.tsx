import closeIcon from "../../images/xmark-solid.svg";
import useContextProvider from "../../hooks/useContextProvider";

const CartHeader = () => {
	const { setCartDropdown } = useContextProvider();

	return (
		<section className="cart-header">
			<h4 className="cart-heading">Your Cart🛒</h4>
			<button
				className="close-link"
				onClick={() => setCartDropdown(false)}
			>
				<img
					src={closeIcon}
					alt="close-icon"
				/>
			</button>
		</section>
	);
};

export default CartHeader;
