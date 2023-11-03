import * as dotenv from "dotenv";
dotenv.config();
export const port = process.env.PORT || 3000;

export const db = process.env.MONGO_URI;
export const secret = process.env.SECRET_KEY || "";
export const corsUrl = "http://localhost:5173";
