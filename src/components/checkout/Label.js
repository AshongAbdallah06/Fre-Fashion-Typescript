import React from "react";

const Label = ({ label }) => {
	return (
		<label
			style={{ textTransform: "capitalize" }}
			className="checkout-label"
		>
			{label}
		</label>
	);
};

export default Label;
