import Label from "../Label";
import useContextProvider from "../../../hooks/useContextProvider";

const CardInfo = () => {
	const { orderInfo } = useContextProvider();

	return (
		<div className="checkout-column">
			<Label label={"Payment Info"} />
			<p
				style={{
					letterSpacing: "0.1rem",
					marginBottom: "0.5rem",
				}}
			>
				{orderInfo && orderInfo.cardNumber}
			</p>
			<p>{orderInfo && orderInfo.expirationDate}</p>
		</div>
	);
};

export default CardInfo;
