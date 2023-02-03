import * as z from "zod";

export const userSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }).min(3, {
        message: "Name must be at least 3 characters length"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Email must be in email format (xxx@xxxx.com)"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 character length"
    }),
    role: z.string().optional().default('customer')
});
