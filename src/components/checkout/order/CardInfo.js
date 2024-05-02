import React, { useContext } from "react";
import Label from "../Label";
import { AppContext } from "../../../App";

const CardInfo = () => {
	const { orderInfo } = useContext(AppContext);

	return (
		<div className="checkout-column">
			<Label label={"Payment Info"} />
			<p
				style={{
					letterSpacing: "0.1rem",
					marginBottom: "0.5rem",
				}}
			>
				Card No. : {orderInfo.paymentOrderInfo.cardNumber}
			</p>
			<p>Expiration Date : {orderInfo.paymentOrderInfo.expirationDate}</p>
		</div>
	);
};

export default CardInfo;
