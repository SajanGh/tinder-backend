import { z } from "zod";

const User = z.object({
  firstName: z.string().min(2).max(18),
  lastName: z.string().min(5).max(18),
  email: z.string().min(5).max(18),
  username: z.string().min(3).max(20),
  password: z.string().min(5).max(50),
});

export default User;
