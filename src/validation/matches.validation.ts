import { z } from "zod";

const Matches = z.object({
  reverse: z.string(),
  favourite: z.string(),
  like: z.string(),
  popular: z.string(),
});

export default Matches