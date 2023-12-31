const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logEvents, logger } = require("./middleware/logEvents");
const { callbackify } = require("util");
const errorHandler = require("./middleware/errorHandle");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");

//const fs = require("fs");
//const fsPromises = require("fs").promises;
const PORT = process.env.PORT || 3500;

//custom middlewhere log
app.use(logger);

//cross orgin recourse sharing
app.use(credentials);

app.use(cors(corsOptions));

//built in middleware
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
//middleware for cookies
app.use(cookieParser());

//serve static files
app.use(express.static(path.join(__dirname, "/public")));

//routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

//works like waterfall anything below will need auth
app.use(verifyJWT);
app.use("/employees", require("./routes/api/employees"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "page not found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
