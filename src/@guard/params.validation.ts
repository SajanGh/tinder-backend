import { z } from "zod";
import mongoose from "mongoose";
export const paramsValidationSchema = z.object({
  id: z.string().refine((val) => {
    return mongoose.Types.ObjectId.isValid(val);
  }),
});
