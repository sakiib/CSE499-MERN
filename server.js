const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const connectDB = require("./database/db");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// api/path
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);

// mongoDB cloud connection
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
