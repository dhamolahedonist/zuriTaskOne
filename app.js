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
