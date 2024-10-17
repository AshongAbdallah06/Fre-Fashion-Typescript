import React, { FormEvent } from "react";

const Form = () => {
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form
			action=""
			onSubmit={(e) => onSubmit(e)}
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
				maxLength={5000}
				name="Message"
				placeholder="Enter your message"
				id="Message"
			></textarea>

			<button className="submit-button send-message">Send Message</button>
		</form>
	);
};

export default Form;
