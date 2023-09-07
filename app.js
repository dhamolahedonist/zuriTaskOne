const express = require("express");
const app = express();
const appRoute = require("./routes/appRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

// const express = require("express");
// const helper = require("./helper");

// require("dotenv").config();
// const PORT = process.env.PORT;

// const app = express();

// app.use(express.json());

// const currentDayName = helper.currentDayName();

// const currentUtcTime = helper.getCurrentUtcTime();

// app.get("/api", (req, res) => {
//   const { slack_name, track } = req.query;
//   const responseJson = {
//     slack_name: slack_name,
//     current_day: currentDayName,
//     utc_time: currentUtcTime,
//     track: track,
//     github_file_url:
//       "https://github.com/dhamolahedonist/zuriTaskOne/blob/main/README.md",
//     github_repo_url: "https://github.com/dhamolahedonist/zuriTaskOne",
//     status_code: 200,
//   };
//   res.setHeader("Content-Type", "application/json"); // Set the Content-Type header
//   res.status(200).json(responseJson); // Send the JSON response
// });

// app.listen(PORT, () => {
//   console.log(`Server started on PORT: http://localhost:${PORT}`);
// });

// module.exports = app;
