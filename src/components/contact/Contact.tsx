import React, { useEffect, useState } from "react";
import Signup from "../home/Signup";
import Heading from "../home/Heading";
import Form from "./Form";
import "../../styles/contact.css";
import Loading from "../Loading";

const Contact = ({ title = "Contact" }) => {
	document.title = "Fre Fashion & Clothing | Contact";

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		//setLoading;
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			{loading && <Loading />}

			{!loading && (
				<>
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
				</>
			)}
		</div>
	);
};

export default Contact;
