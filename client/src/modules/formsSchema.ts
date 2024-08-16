import { z } from "zod";


//craete configurationManagerSchema using zod and given err massge and check password and password comfirm
export const configurationManagerSchema = z.object({
    url: z?.string().url().min(4, "invalid url"),
    userName: z.string().min(1, 'First name is required'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[\W_]/, 'Password must contain at least one special character'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

//craete buildSchama using zod and given err massage version
export const buildSchama = z.object({
    versionNumber: z?.string().regex(/^\d+\.\d+\.\d+$/, "version invalid have to be like 1.0.0"),
    command: z.string(),
    outputDirectory: z.string()
})

//craete copyToTargetSchama using zod and given err massage
export const copyToTargetSchama = z.object({
    targetDirectory: z?.string(),
})
