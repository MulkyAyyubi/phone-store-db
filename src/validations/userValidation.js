import z, { email } from "zod";

export const createUserSchema = z.object({
  fullname: z.string().min(3, "fullname minimal 3 karakter"),
  username: z.string().min(3, "username minimal 3 karakter"),
  email: z.email("email tidak valid"),
  password: z.string().min(6, "password minimal 6 karakter"),
  role: z.enum(["admin", "user"], "role harus 'admin' atau 'user'"),
});

export const updateUserSchema = z.object({
  fullname: z.string().min(3, "fullname minimal 3 karakter").optional,
  username: z.string().min(3, "username minimal 3 karakter").optional,
  email: z.email("email tidak valid").optional,
  password: z.string().min(6, "password minimal 6 karakter").optional,
  role: z.enum(["admin", "user"], "role harus 'admin' atau 'user'").optional,
});
