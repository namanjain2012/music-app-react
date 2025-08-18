import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { loginSchema } from "../validations/register-validation";
import { useForm } from "react-hook-form";
import { doLogin } from "../api/user-api";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

const Login = () => {
	const[message,setMessage] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const alertJSX = (
		<div>
			<Alert variant="default">
				<AlertTitle>{message}</AlertTitle>
			</Alert>
		</div>
	);
	const mySubmit = async (userObject: unknown) => {
		try {
			const result = await doLogin(userObject);
			if (result.data.message) {
				localStorage.role = result.data.role;
				console.log(result.data.message);
				setMessage(result.data.message);
			} else {
				console.log("Login Fail");
				setMessage(result.data.message);
			}
		} catch (err) {
			console.log("Login fail : ", err);
		}
	};
	return (
		<Card className="w-full max-w-md mx-auto bg-green-300">
			<CardHeader>
				<CardTitle className="space-y-1 text-center text-2xl">
					Login Here
				</CardTitle>
				<CardDescription className="text-center">
					Music App Login Form
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit(mySubmit)}>
					{alertJSX}
					<div className="grid w-full max-w-sm items-center gap-3">
						<Label htmlFor="email">Email</Label>
						<Input
							{...register("email")}
							type="email"
							id="email"
							placeholder="Email"
							className="border-black"
						/>
						<span className="text-red-500">
							{errors.email && errors.email.message}
						</span>
					</div>
					<div className="grid w-full max-w-sm items-center gap-3">
						<Label htmlFor="password">Password</Label>
						<Input
							{...register("password")}
							type="password"
							id="password"
							placeholder="Password"
							className="border-black"
						/>
						<span className="text-red-500">
							{errors.password && errors.password.message}
						</span>
					</div>
					<br />
					<div className="grid w-full max-w-sm items-center gap-3">
						<Button className="bg-blue-600 hover:bg-blue-800 hover:text-2xl">
							Login
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default Login;
