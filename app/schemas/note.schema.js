const { z } = require("zod");

exports.noteSchema = z.object({
  title: z.string().min(5),
  text: z.string().min(5),
  completed: z.boolean().optional(),
  by: z.string().min(24).max(24),
});
