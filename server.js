const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const connectDB = require("./database/db");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));
