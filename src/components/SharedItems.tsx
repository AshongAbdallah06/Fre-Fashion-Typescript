import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import formatCurrency from "../utils/Money";
import useContextProvider from "../hooks/useContextProvider";

const SharedItems = () => {
	const { items } = useProducts();
	const { setProduct, quantity } = useContextProvider();

	return (
		<>
			{items.map((item) => (
				<Link
					to={`/shop/${item.name}`}
					className="product-item"
					key={item.id}
					onClick={() => {
						setProduct({
							name: item.name,
							price: item.price,
							product_image: item.image,
							quantity: quantity,
							type: item.type,
							id: item.id,
						});
					}}
				>
					<div className="product-image">
						<img
							alt="product"
							src={item.image}
						/>
					</div>

					<h4 className="product-name">{item.name}</h4>

					<p className="price">$ {formatCurrency(item.price)} USD</p>
				</Link>
			))}
		</>
	);
};

export default SharedItems;
