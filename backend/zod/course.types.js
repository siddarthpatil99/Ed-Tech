import z from "zod";

export const courseSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string(),
  instructorName: z.string(),
  category: z.string().min(1).max(50),
  price: z.number().min(0),
});
