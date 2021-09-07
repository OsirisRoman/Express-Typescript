import express, { Request, Response } from "express";

import { router } from "./routes/login";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
