import {z} from 'zod';
export const registerSchema = z.object({
    email : z.string().min(1,'Email is required').email('Please enter valid email'),
    password : z.string().min(8,'Password must be of length 8').max(20,'Password not more than 20 chars'),
    name : z.string().min(3,'Min length of name is 3 chars').max(10,'Max length of name is 10 chars')
});

export type RegisterSchema = z.infer<typeof registerSchema>