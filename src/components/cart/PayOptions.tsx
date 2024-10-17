import { Link } from "react-router-dom";

import formatCurrency from "../../utils/Money";
import ApplePayButton from "./ApplePayButton";
import PaypalButton from "./PaypalButton";
import useContextProvider from "../../hooks/useContextProvider";

const PayOptions = () => {
	const { subtotal, setCartDropdown } = useContextProvider();
	return (
		<section className="pay-options">
			<div className="cart-labels">
				<label>Subtotal</label>
				<label>$ {formatCurrency(subtotal)} USD</label>
			</div>

			<PaypalButton />

			<ApplePayButton />

			<button onClick={() => setCartDropdown(false)}>
				<Link
					to={"/checkout"}
					className="button-pay checkout-button"
				>
					Continue to Checkout
				</Link>
			</button>
		</section>
	);
};

export default PayOptions;
