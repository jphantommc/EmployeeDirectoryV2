import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

app.use(express.json())

app.route("/").get((req, res) => {
  res.send("Howdy employees!")
})

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Oh no, something went wrong")
})