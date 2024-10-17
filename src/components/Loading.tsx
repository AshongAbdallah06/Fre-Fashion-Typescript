import React from "react";

const Loading = () => {
	return (
		<div className="content">
			<div className="top-left big absolute">
				<div className="circle absolute-circle"></div>
			</div>
			<div className="top-right big absolute">
				<div className="circle absolute-circle"></div>
			</div>
			<div className="bottom-left big absolute">
				<div className="circle absolute-circle"></div>
			</div>
			<div className="bottom-right big absolute">
				<div className="circle absolute-circle"></div>
			</div>
			<div className="big">
				<div className="circle"></div>
			</div>
		</div>
	);
};

export default Loading;
