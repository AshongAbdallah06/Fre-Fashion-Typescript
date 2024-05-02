import React from "react";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
	const schema = yup.object().shape({
		username: yup.string().required(),
		password: yup.string().required(),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {};

	return (
		<div>
			<form
				className="login-form"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1>Login</h1>
				<div className="cont">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						{...register("username")}
					/>
				</div>
				<div className="cont">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						{...register("password")}
					/>
				</div>
				<button className="btn login">Login</button>
				<p className="new">
					Don't have an account yet!{" "}
					<Link
						to={"/signup"}
						className="signup"
					>
						Signup
					</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
