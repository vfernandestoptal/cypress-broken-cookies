const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app
  .get("/domain-cookie", (req, res) => {
    res.cookie("test-cookie", "test-value", { domain: ".cypress.test" });

    res.send("Hello Express app!");
  })
  .get("/sub-domain-cookie", (req, res) => {
    res.cookie("test-cookie", "test-value", {
      domain: "local.cypress.test"
    });

    res.send("Hello Express app!");
  })
  .get("/cookies", (req, res) => {
    if (req.cookies["test-cookie"]) {
      res.send("Got it!");
    } else {
      res.status(400).end();
    }
  })
  .post("/cookies", (req, res) => {
    if (req.cookies["test-cookie"]) {
      res.send("Got it!");
    } else {
      res.status(400).end();
    }
  });

app.listen(5000, () => {
  console.log("server started");
});
