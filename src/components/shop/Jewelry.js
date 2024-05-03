import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const Jewelry = () => {
	const [loading, setLoading] = useState(false);
	document.title = "Shop | Jewelry";

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
			{!loading && "Jewelry"}
		</div>
	);
};

export default Jewelry;
