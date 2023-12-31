import { Application, Request, Response } from "express";

export class CommonRoutes {
  public route(app: Application) {
    app.all("*", (req: Request, res: Response) => {
      res.status(401).send({ error: true, message: "Check your URL please" });
    });
  }
}
