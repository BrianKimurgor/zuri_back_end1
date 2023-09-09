const express = require('express');
const app = express();

// Define a GET endpoint
app.get('/api', (req, res) => {
  // Extract query parameters
  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Get the current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Get the current UTC time
  const currentUTCTime = new Date().toISOString();

  // Create the response JSON
  const responseData = {
    slack_name: "Brian Kimurgor",
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: "back end",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/BrianKimurgor/zuri_back_end1",
    status_code: 200
  };

  // Send the JSON response
  res.json(responseData);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
