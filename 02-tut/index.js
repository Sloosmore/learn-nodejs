const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );

    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\nnice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promise-complete.txt")
    );
    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "promise-complete.txt"),
      "utf8"
    );
    console.log("\n\n" + newdata);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
/*
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "nice to meet you",
  (err, data) => {
    if (err) throw err;
    console.log("Write complete");
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nYes it is",
      (err, data) => {
        if (err) throw err;
        console.log("Append complete");
        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newreply.txt"),
          (err, data) => {
            if (err) throw err;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);*/

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
