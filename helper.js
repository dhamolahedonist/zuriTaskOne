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
    const formattedUtcTime = `${currentDate.getUTCFullYear()}-${(
      currentDate.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate
      .getUTCDate()
      .toString()
      .padStart(2, "0")}T${currentDate
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getUTCMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getUTCSeconds()
      .toString()
      .padStart(2, "0")}Z`;

    return formattedUtcTime;
  },
};
module.exports = helper;
