const { z } = require("zod");

exports.userAccountSchema = z.object({
  fullName: z.string({ required_error: "Please supply your full name" }).min(3),
  username: z.string({ required_error: "Please supply your username" }).min(3),
  email: z.string({ required_error: "Please supply your email" }).email(),
  password: z
    .string({ required_error: "Please supply your password" })
    .min(3)
    .max(15),
  userType: z.string().optional(),
});

exports.userLoginSchema = z.object({
  usernameOrEmail: z.string({
    required_error: "Please supply your email or username",
  }),
  password: z.string({ required_error: "Please supply your password" }),
});
