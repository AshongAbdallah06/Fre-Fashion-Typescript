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
import ShippingMethodInfo from "./order/ShippingMethodInfo";
import Loading from "../Loading";
import CustomerOrderInfo from "./order/CustomerOrderInfo";
import PaymentOrderInfo from "./order/PaymentOrderInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import useContextProvider from "../../hooks/useContextProvider";
import { OrderType } from "../../Interface";

const Checkout = ({ title = "Checkout" }) => {
	const { setOrderInfo, selectedMethod, isOrderPlaced, orderInfo } = useContextProvider();

	document.title = "Fre Fashion & Clothing | Checkout";

	const [submitted, setSubmitted] = useState<boolean>(false);

	// Data excluding selectedMethod
	const [orderExcludingSelectedMethod, setOrderExcludingSelectedMethod] =
		useState<OrderType | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const schema = yup.object().shape({
		// Customer Info Schema
		email: yup.string().email("Please enter a valid email").required("Your Email is required"),

		// Shipping Address Schema
		name: yup
			.string()
			.required("Your Full Name is required")
			.matches(/^[A-Za-z -]+$/, "Please enter a valid full name"),
		streetAddress: yup
			.string()
			.required("Your Street Address is required")
			.matches(/^[0-9]+ [A-Za-z]+ [A-Za-z ]+$/, "Please enter a valid street address"),
		streetAddress2: yup.string(),
		city: yup
			.string()
			.required()
			.matches(/^[A-Za-z ]{4,}$/),
		state: yup
			.string()
			.required()
			.matches(/^[A-Za-z ]{2,}$/),
		postalCode: yup
			.string()
			.required("Postal code is required")
			.matches(/^[0-9]{3,7}$/),

		// Payment Info Schema
		cardNumber: yup
			.string()
			.required("Your card number is required")
			.matches(/^[0-9 -]+$/, "Please enter a valid card number")
			.min(8, "Card number must be at least 8 characters")
			.max(19, "Card number should not be more than 19 characters"),
		expirationDate: yup
			.string()
			.required()
			.matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/),
		securityCode: yup
			.string()
			.required()
			.matches(/^[0-9]{3}$/),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: OrderType) => {
		// if (!orderInfo) return;

		setOrderInfo({ ...data, selectedMethod });
		setOrderExcludingSelectedMethod(data);

		setSubmitted(true);
	};

	const loadingFunction = () => {
		//setLoading;
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	};

	useEffect(() => {
		//loadingFunction();
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
						style={{ opacity: submitted ? 1 : 0 }}
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
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className="buttons">
											<PaypalButton />
											<ApplePayButton />
										</div>

										<CustomerInfo
											register={register}
											errors={errors}
										/>

										<ShippingAddress
											register={register}
											errors={errors}
										/>

										<ShippingMethod />

										<PaymentInfo
											register={register}
											errors={errors}
										/>

										{/* Items in the cart */}
										<Items />
									</form>
								)}
							</div>

							{/* Order Summary */}
							<Sidebar
								orderExcludingSelectedMethod={orderExcludingSelectedMethod}
								loadingFunction={loadingFunction}
								submitted={submitted}
								setSubmitted={setSubmitted}
							/>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default Checkout;
