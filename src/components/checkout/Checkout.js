import React, { useContext, useEffect, useState } from "react";
import "../../styles/checkout.css";
import PaypalButton from "../cart/PaypalButton";
import ApplePayButton from "../cart/ApplePayButton";
import CustomerInfo from "./CustomerInfo";
import ShippingAddress from "./ShippingAddress";
import ShippingMethod from "./ShippingMethod";
import PaymentInfo from "./PaymentInfo";
import Items from "./Items";
import Sidebar from "./Sidebar";
import { AppContext } from "../../App";
import ShippingMethodInfo from "./order/ShippingMethodInfo";
import ShippingBillingAddress from "./order/ShippingBillingAddress";
import CardInfo from "./order/CardInfo";
import CustomerEmail from "./order/CustomerEmail";
import Loading from "../Loading";

const Checkout = ({ title = "Checkout" }) => {
	const { isOrderPlaced } = useContext(AppContext);
	// const [loading, setLoading] = useState(true);

	document.title = "Fre Fashion & Clothing | Checkout";

	const [submitted, setSubmitted] = useState(false);

	const handleSubmitted = () => {
		// Set submitted to true
		setSubmitted(true);

		// Set submitted to false after 2 seconds
		setTimeout(() => {
			setSubmitted(false);
		}, 2000);
	};

	// useEffect(() => {
	// 	// Simulate loading by setting loading to false after 3 seconds
	// 	const timer = setTimeout(() => {
	// 		// setLoading(false);
	// 	}, 3000);

	// 	// Clear the timeout if the component unmounts
	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<>
			{/* {loading && (
				<Loading />
			)} */}

			{/* {!loadin/g && ( */}
			<div>
				<div className="heading">
					<h1>{isOrderPlaced ? "Your order has been placed" : title}</h1>
				</div>

				<section
					className={`submitted ${submitted && "submitted-animation"}`}
					style={{ opacity: submitted && 1 }}
				>
					Submitted
				</section>

				<section className="section">
					<div className="checkout-form form-container">
						<div className="layout-main">
							{isOrderPlaced ? (
								<>
									{/* Customer Information */}
									<div className="wrapper">
										<div className="block-header">
											<h4>Customer Information</h4>
										</div>

										<fieldset className="block-content">
											<div className="checkout-row">
												<CustomerEmail />

												<ShippingBillingAddress
													label={"Shipping Address"}
												/>
											</div>
										</fieldset>
									</div>

									{/* Shipping Method Information */}
									<ShippingMethodInfo />

									{/* Payment Information */}
									<div className="wrapper">
										<div className="block-header">
											<h4>Payment Information</h4>
										</div>

										<fieldset className="block-content">
											<div className="checkout-row">
												<CardInfo />

												<ShippingBillingAddress label={"Billing Address"} />
											</div>
										</fieldset>
									</div>

									{/* Items in the cart */}
									<Items />
								</>
							) : (
								<>
									<div className="buttons">
										<PaypalButton />
										<ApplePayButton />
									</div>

									<CustomerInfo
										submitted={submitted}
										setSubmitted={setSubmitted}
										handleSubmitted={handleSubmitted}
									/>

									<ShippingAddress
										submitted={submitted}
										setSubmitted={setSubmitted}
										handleSubmitted={handleSubmitted}
									/>

									<ShippingMethod />

									<PaymentInfo
										submitted={submitted}
										setSubmitted={setSubmitted}
										handleSubmitted={handleSubmitted}
									/>

									{/* Items in the cart */}
									<Items />
								</>
							)}
						</div>

						{/* Order Summary */}
						<Sidebar />
					</div>
				</section>
			</div>
			{/* )} */}
			{/* // )} */}
		</>
	);
};

export default Checkout;
