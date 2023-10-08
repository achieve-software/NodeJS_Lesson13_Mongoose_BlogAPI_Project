"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
 */

const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

app.use(express.json());
require("./src/dbConnection");
app.all("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

app.use('/user', require('./src/routes/userRoute'))
app.use('/blog', require('./src/routes/blogRoute'))



// require('./src/sync')()
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
