import express from "express";
import { errorHandler, notFound } from "./Middleware/errorHandler.js";
import { userRoute } from "./Routes/userRoute.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
