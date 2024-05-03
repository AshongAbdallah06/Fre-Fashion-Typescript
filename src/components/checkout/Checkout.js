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
import Loading from "../Loading";
import CustomerOrderInfo from "./order/CustomerOrderInfo";
import PaymentOrderInfo from "./order/PaymentOrderInfo";

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

	const [loading, setLoading] = useState(false);

	const loadingFunction = () => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		loadingFunction();
	}, []);

	return (
		<div>
			{loading && <Loading />}

			{!loading && (
				<>
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
										{loading && <Loading />}

										{!loading && (
											<>
												{/* Customer Information */}
												<CustomerOrderInfo />

												{/* Shipping Method Information */}
												<ShippingMethodInfo />

												{/* Payment Information */}
												<PaymentOrderInfo />

												{/* Items in the cart */}
												<Items />
											</>
										)}
									</>
								) : (
									<div>
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
									</div>
								)}
							</div>

							{/* Order Summary */}
							<Sidebar loadingFunction={loadingFunction} />
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default Checkout;
