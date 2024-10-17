import { useEffect, useState } from "react";
import Loading from "../Loading";

const Accessories = () => {
	const [loading, setLoading] = useState<boolean>(false);
	document.title = "Shop | Accessories";

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
			{!loading && "Accessories"}
		</div>
	);
};

export default Accessories;
