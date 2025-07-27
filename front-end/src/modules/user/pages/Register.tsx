import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/register-validation";
import { doRegister } from "../api/user-api";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Angry } from "lucide-react";
import { useState } from "react";

const Register = () => {
	const [status, setStatus] = useState();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
			name: "",
		},
	});
	const alertJSX = (
		<div>
			<Alert variant="destructive">
				<Angry />
				<AlertTitle>Register Message</AlertTitle>
				<AlertDescription>Register Fails!</AlertDescription>
			</Alert>
		</div>
	);
	const registerSubmit = async (userData: unknown) => {
		console.log("Form Submit : ", userData);
		try {
			const result = await doRegister(userData);
			if (result.data.id) {
				setStatus(false);
				navigate("/login");
			} else {
				console.log("Unable to register");
				setStatus(true);
			}
			console.log("Result is : ", result);
		} catch (err) {
			console.log("Register failed", err);
		}
	};
	return (
		<Card className="w-full max-w-md mx-auto bg-green-300">
			<CardHeader>
				<CardTitle className="space-y-1 text-center text-2xl">
					Register Here
				</CardTitle>
				<CardDescription className="text-center">
					Music App Form
				</CardDescription>
			</CardHeader>
			<CardContent>
				{status && alertJSX}
				<form onSubmit={handleSubmit(registerSubmit)}>
					<div className="grid w-full max-w-sm items-center gap-3">
						<Label htmlFor="email">Email</Label>
						<Input className="border-black"
							{...register("email")}
							type="email"
							id="email"
							placeholder="abc@example.com"
						/>
						<span className="text-red-500">
							{errors.email && errors.email.message}
						</span>
					</div>

					<div className="grid w-full max-w-sm items-center gap-3">
						<Label htmlFor="password">Password</Label>
						<Input className="border-black"
							{...register("password")}
							type="password"
							id="password"
							placeholder="Example@123"
						/>
						<span className="text-red-500">
							{errors.password && errors.password.message}
						</span>
					</div>

					<div className="grid w-full max-w-sm items-center gap-3">
						<Label htmlFor="name">Name</Label>
						<Input className="border-black"
							{...register("name")}
							type="text"
							id="name"
							placeholder="Naman"
						/>
						<span className="text-red-500">
							{errors.name && errors.name.message}
						</span>
					</div>

					<div className="grid w-full max-w-sm items-center gap-3">
						<Button className="bg-blue-600 hover:bg-blue-800 hover:text-2xl">
							Register
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};
export default Register;
