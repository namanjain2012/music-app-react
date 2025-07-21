import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const Register = ()=>{
    return (<Card className="w-full max-w-md mx-auto">
        <CardHeader>
            <CardTitle className="space-y-1 text-center">Register Here</CardTitle>
            <CardDescription className="text-center">Music App Form</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="name" />
                <Button>Register</Button>
                </div>
        </CardContent>
    </Card>)
}
export default Register;