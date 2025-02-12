import React from "react";

const Heading = ({ heading }: { heading: string }) => {
	return (
		<div className="top-title">
			<h2>{heading}</h2>
			<div className="divider"></div>
		</div>
	);
};

export default Heading;
