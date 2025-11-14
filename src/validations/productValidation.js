import z, { email } from "zod";

export const createProductSchema = z.object({
  user_id: z.string().min(1, "user id minimal 1 karakter"),
  name: z.string().min(3, "name minimal 3 karakter"),
  description: z.string().min(5, "description minimal 5 karakter"),
  price: z.number({ invalid_type_error: "harga harus angka" }),
  stock: z.number({ invalid_type_error: "stock harus angka" }),
});

export const updateProductSchema = z.object({
  user_id: z.string().min(1, "user id minimal 1 karakter").optional,
  name: z.string().min(3, "name minimal 3 karakter").optional,
  description: z.string().min(5, "description minimal 5 karakter").optional,
  price: z.number({ invalid_type_error: "harga harus angka" }).optional,
  stock: z.number({ invalid_type_error: "stock harus angka" }).optional,
});