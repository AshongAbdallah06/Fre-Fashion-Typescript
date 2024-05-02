import React, { useContext, useState } from "react";
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
import Label from "./Label";

const Checkout = ({ title = "Checkout" }) => {
	const { isOrderPlaced, orderInfo } = useContext(AppContext);
	document.title = "Fre Fashion & Clothing | Checkout";

	const [submitted, setSubmitted] = useState(false);

	const handleSubmitted = () => {
		setSubmitted(true);
		setTimeout(() => {
			setSubmitted(false);
		}, 2000);
	};

	return (
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
					{isOrderPlaced ? (
						<>
							<div className="layout-main">
								{/* Customer Information */}
								<div className="wrapper">
									<div className="block-header">
										<h4>Customer Information</h4>
									</div>

									<fieldset className="block-content">
										<div className="checkout-row">
											<div className="checkout-column">
												<Label label={"Email"} />
												<p>{orderInfo.customerOrderInfo.email}</p>
											</div>
											<div className="checkout-column">
												<Label label={"Shipping Address"} />
												<p className="details">
													{orderInfo.shippingOrderInfo.name}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.streetAddress}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.city}{" "}
													{orderInfo.shippingOrderInfo.state}{" "}
													{orderInfo.shippingOrderInfo.postalCode}{" "}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.country}
												</p>
											</div>
										</div>
									</fieldset>
								</div>

								{/* Shipping Address Information */}
								<div className="wrapper">
									<div className="block-header">
										<h4>Shipping Method</h4>
									</div>

									<fieldset className="block-content">
										<div className="checkout-row">
											<div className="checkout-column">
												<Label label={"Flat Rate"} />
												<p>Standard flat rate for all shipments.</p>
											</div>
										</div>
									</fieldset>
								</div>

								{/* Payment Information */}
								<div className="wrapper">
									<div className="block-header">
										<h4>Payment Information</h4>
									</div>

									<fieldset className="block-content">
										<div className="checkout-row">
											<div className="checkout-column">
												<Label label={"Payment Info"} />
												<p
													style={{
														letterSpacing: "0.1rem",
														marginBottom: "0.5rem",
													}}
												>
													Card No. :{" "}
													{orderInfo.paymentOrderInfo.cardNumber}
												</p>
												<p>
													Expiration Date :{" "}
													{orderInfo.paymentOrderInfo.expirationDate}
												</p>
											</div>

											<div className="checkout-column">
												<Label label={"Billing Address"} />
												<p className="details">
													{orderInfo.shippingOrderInfo.name}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.streetAddress}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.city}{" "}
													{orderInfo.shippingOrderInfo.state}{" "}
													{orderInfo.shippingOrderInfo.postalCode}{" "}
												</p>
												<p className="details">
													{orderInfo.shippingOrderInfo.country}
												</p>
											</div>
										</div>
									</fieldset>
								</div>

								<Items />
							</div>

							<Sidebar />
						</>
					) : (
						<>
							<div className="layout-main">
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

								<Items />
							</div>
							<Sidebar />
						</>
					)}
				</div>
			</section>
		</div>
	);
};

export default Checkout;
