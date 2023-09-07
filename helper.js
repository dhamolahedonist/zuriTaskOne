const helper = {
  currentDayName: () => {
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
    return currentDayName;
  },
  getCurrentUtcTime: () => {
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
    return `${year}-${month}-${day}T${hours}:${minutes}:${milliseconds}:${seconds}Z`;
  },
};
module.exports = helper;
