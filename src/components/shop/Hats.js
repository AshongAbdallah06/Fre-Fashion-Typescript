import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const Hats = () => {
	const [loading, setLoading] = useState(false);
	document.title = "Shop | Hats";

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
			{!loading && "Hats"}
		</div>
	);
};

export default Hats;
