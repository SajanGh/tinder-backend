import { z } from "zod";

const User = z.object({
  firstName: z.string().min(2).max(18),
  lastName: z.string().min(5).max(18),
  email: z.string().min(5).max(18),
  username: z.string().min(3).max(20),
  dateOfBirth: z.string().datetime().optional(),
  // dateOfBirth: z.date().safeParse(new Date()),
  password: z.string().min(5).max(50),
});

export default User;
