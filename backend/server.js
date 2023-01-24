const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/books", require("./routes/bookRoutes"));
app.use("/books/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
