import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const Accessories = () => {
	const [loading, setLoading] = useState(false);
	document.title = "Shop | Accessories";

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
			{!loading && "Accessories"}
		</div>
	);
};

export default Accessories;
