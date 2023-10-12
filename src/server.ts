import app from "./app";
import { port } from "./config/config";

app
  .listen(port, () => {
    return console.log(`Server is listening at the port http://127.0.0.1:${port}`);
  })
  .on("error", (e: any) => console.log(e));
