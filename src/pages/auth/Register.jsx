import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const registerSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    role: z.enum(["alumni", "student", "faculty"], {
        required_error: "Please select a role",
    }),
    institution: z.string().min(1, "Please select your institution"),
    gradYear: z.string().min(4, "Please enter graduation year"),
});

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            role: "alumni",
            institution: "",
        },
    });

    const role = watch("role");

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log("Register data:", data);
            setIsLoading(false);
            navigate("/dashboard");
        }, 1500);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Create an account
                </h1>
                <p className="text-sm text-gray-500">
                    Join your alma mater's exclusive network
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                            id="firstName"
                            placeholder="John"
                            disabled={isLoading}
                            className={errors.firstName ? "border-red-500" : ""}
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p className="text-xs text-red-500">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                            id="lastName"
                            placeholder="Doe"
                            disabled={isLoading}
                            className={errors.lastName ? "border-red-500" : ""}
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="text-xs text-red-500">{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        disabled={isLoading}
                        className={errors.email ? "border-red-500" : ""}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-xs text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        disabled={isLoading}
                        className={errors.password ? "border-red-500" : ""}
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-xs text-red-500">{errors.password.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label>I am a...</Label>
                    <Select onValueChange={(val) => setValue("role", val)} defaultValue="alumni">
                        <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="alumni">Alumni</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="faculty">Faculty / Staff</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Institution</Label>
                        <Select onValueChange={(val) => setValue("institution", val)}>
                            <SelectTrigger className={errors.institution ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mit">MIT</SelectItem>
                                <SelectItem value="stanford">Stanford University</SelectItem>
                                <SelectItem value="harvard">Harvard University</SelectItem>
                                <SelectItem value="iit_bombay">IIT Bombay</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.institution && (
                            <p className="text-xs text-red-500">{errors.institution.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="gradYear">
                            {role === "student" ? "Class of" : "Graduation Year"}
                        </Label>
                        <Input
                            id="gradYear"
                            placeholder="2024"
                            disabled={isLoading}
                            className={errors.gradYear ? "border-red-500" : ""}
                            {...register("gradYear")}
                        />
                        {errors.gradYear && (
                            <p className="text-xs text-red-500">{errors.gradYear.message}</p>
                        )}
                    </div>
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </Button>
            </form>

            <div className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                    to="/auth/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Register;
