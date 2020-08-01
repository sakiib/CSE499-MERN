const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const connectDB = require('./database/db');
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}`));