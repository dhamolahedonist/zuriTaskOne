const express = require("express");

require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

// get day
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayIndex];

// utc time
const currentUtcTime = new Date().toISOString();

app.get("/", (req, res) => {
  const { slack_name, track } = req.query;
  return res.status(200).json({
    slack_name: slack_name,
    current_day: currentDayName,
    utc_time: currentUtcTime,
    track: track,
    github_file_url:
      "https://github.com/dhamolahedonist/zuriTaskOne/blob/main/README.md",
    github_repo_url: "https://github.com/dhamolahedonist/zuriTaskOne",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});

module.exports = app;
