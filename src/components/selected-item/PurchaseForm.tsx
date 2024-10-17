import { FC, useState } from "react";
import useContextProvider from "../../hooks/useContextProvider";

interface Props {
	productName: string | null;
	productPrice: string | null;
	productImage: string | undefined;
}

const PurchaseForm: FC<Props> = ({ productName, productPrice, productImage }) => {
	const { handleAddItem, quantity, setQuantity, setCartDropdown } = useContextProvider();

	const [clicked, setClicked] = useState(false);

	return (
		<>
			<div className="top-margin">
				<label
					htmlFor="quantity"
					className="quantity-label"
				>
					Quantity
				</label>
				<input
					onChange={(e) => setQuantity(Number(e.target.value))}
					value={quantity}
					id="quantity"
					type="number"
					max={999}
					min={1}
					className="quantity-input"
				/>
				<div>
					<button
						className="add-to-cart"
						onClick={() => {
							handleAddItem(productName, productImage, productPrice, quantity);

							setClicked(true);
							setTimeout(() => {
								setClicked(false);
								window.scrollTo({
									top: 0,
									behavior: "smooth",
								});
							}, 2000);

							setTimeout(() => {
								setCartDropdown(true);
							}, 2200);
						}}
					>
						{clicked ? "Adding to Cart" : "Add to Cart"}
					</button>
				</div>
				<div>
					<button>Buy now</button>
				</div>
			</div>
		</>
	);
};

export default PurchaseForm;
