import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {useForm} from "react-hook-form";
const Register = ()=>{
    const {register,handleSubmit,formState:{errors}} = useForm();
    const registerSubmit = (userData:unknown)=>{
        console.log("Form Submit : ",userData);
    }
    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Register Here</CardTitle>
            <CardDescription className="text-center">Music App Form</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit(registerSubmit)}>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input {...register('email')} type="email" id="email" placeholder="Email" />

                <Label htmlFor="password">Password</Label>
                <Input {...register('password')} type="password" id="password" placeholder="Password" />

                <Label htmlFor="name">Name</Label>
                <Input {...register('name')} type="text" id="name" placeholder="name" />

                <Button>Register</Button>
                </div>
                </form>
        </CardContent>
    </Card>)
}
export default Register;