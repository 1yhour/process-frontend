import z from "zod";
export const createProductSchema = z.object({
    name: z.string().min(4),
    price: z.number().min(1),
})

export const createCategorySchema = z.object({
    category_name: z.string().min(4),
})

export type Product = z.infer<typeof createProductSchema>;
export type Category = z.infer<typeof createCategorySchema>;