import React from "react";
import "../../styles/checkout.css";
import PaypalButton from "../cart/PaypalButton";
import ApplePayButton from "../cart/ApplePayButton";
import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";
import PaymentInfo from "./PaymentInfo";
import Items from "./Items";
import Sidebar from "./Sidebar";

const Checkout = ({ title = "Checkout" }) => {
	document.title = "Fre Fashion & Clothing | Checkout";

	return (
		<div>
			<div className="heading">
				<h1>{title}</h1>
			</div>

			<section className="section">
				<div className="form-container">
					<div className="layout-main">
						<div className="buttons">
							<PaypalButton />
							<ApplePayButton />
						</div>

						<CustomerInfo />

						<ShippingAddress />

						<ShippingMethod />

						<PaymentInfo />

						<Items />
					</div>

					<Sidebar />
				</div>
			</section>
		</div>
	);
};

export default Checkout;
