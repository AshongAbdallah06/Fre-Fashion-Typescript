import React from "react";
import Signup from "../home/Signup";
import Heading from "../home/Heading";
import Form from "./Form";
import "../../styles/contact.css";

const Contact = ({ title = "Contact" }) => {
	return (
		<div>
			<div className="heading">
				<h1>{title}</h1>
			</div>

			<section className="contact section">
				<Heading heading="Stay In Touch" />

				<Form />
			</section>

			<section className="section">
				<Signup />
			</section>
		</div>
	);
};

export default Contact;
