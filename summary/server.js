//import express
const express = require("express");
//this creates an app to make the server
const app = express();
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  //status sets status code of res
  //send sends string data
  //res.status(200).send("test");
  res.status(200).json({ message: "yello!" });
  //send out html file
  //res.download(filepath)
});

app.use("/user", userRouter);

//run the app on port 3000
app.listen(3000);
