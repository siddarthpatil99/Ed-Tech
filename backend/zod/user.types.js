import z from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().max(25),
  otp: z.string().optional(),
});

export const updateSchema = z.object({
    name: z.string().max(30),
    password: z.string().min(5).optional()
})