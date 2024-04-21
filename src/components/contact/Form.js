import React from "react";

const Form = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			action=""
			onSubmit={onSubmit}
		>
			<input
				className="text-field"
				type="text"
				placeholder="Enter your name"
			/>
			<input
				className="text-field"
				type="text"
				placeholder="Enter your email"
			/>
			<input
				className="text-field"
				type="text"
				placeholder="Subject"
			/>
			<textarea
				className="text-field"
				maxLength="5000"
				name="Message"
				placeholder="Enter your message"
				id="Message"
				// style="height: 120px;"
			></textarea>

			<button className="submit-button send-message">Send Message</button>
		</form>
	);
};

export default Form;
