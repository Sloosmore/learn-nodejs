const whitelist = [
  "https://www.yoursite.com",
  "http://127.0.0.1:5500",
  "https://www.google.com",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by cors"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports= corsOptions