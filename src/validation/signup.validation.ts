import { z } from "zod";

const User = z.object({
  firstName: z.string().min(2).max(18),
  lastName: z.string().min(5).max(18),
  email: z.string().min(5).max(18),
  password: z.string().min(8).max(100),
  username: z.string().min(3).max(20),
  bio: z.string().min(1).max(50).optional(),
  dateOfBirth: z.string().datetime().optional(),
});

export default User;
