import React from "react";

const Label = ({ label }: { label: string }) => {
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
