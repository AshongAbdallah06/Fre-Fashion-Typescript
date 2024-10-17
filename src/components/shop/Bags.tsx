import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const Bags = () => {
	const [loading, setLoading] = useState<boolean>(false);
	document.title = "Shop | Bags";

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
			{!loading && "Bags"}
		</div>
	);
};

export default Bags;
