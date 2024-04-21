import React from "react";

const Signup = () => {
	return (
		<section className="section">
			<div className="subscribe">
				<p className="subscribe-text">Sign up to our mailing list</p>
				<input
					type="text"
					className="signup-input js-signup-input"
					placeholder="Email address"
				/>
				<button className="submit-button js-signup-button">
					Sign Up
				</button>
			</div>
		</section>
	);
};

export default Signup;
