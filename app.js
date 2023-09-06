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
function getCurrentUtcTime() {
  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0"); // Adding 1 to month since it's zero-based
  const day = String(currentDate.getUTCDate()).padStart(2, "0");
  const hours = String(currentDate.getUTCHours()).padStart(2, "0");
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(currentDate.getUTCMilliseconds()).padStart(
    3,
    "0"
  );

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
}

const currentUtcTime = getCurrentUtcTime();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  const responseJson = {
    slack_name: slack_name,
    current_day: currentDayName,
    utc_time: currentUtcTime,
    track: track,
    github_file_url:
      "https://github.com/dhamolahedonist/zuriTaskOne/blob/main/README.md",
    github_repo_url: "https://github.com/dhamolahedonist/zuriTaskOne",
    status_code: 200,
  };
  res.setHeader("Content-Type", "application/json"); // Set the Content-Type header
  res.status(200).json(responseJson); // Send the JSON response
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: http://localhost:${PORT}`);
});

module.exports = app;
