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
/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session")

app.use(session({
    secret: process.env.SECRET_KEY || 'secret_keys_for_cookies',


    // name: 'cookie', // default: req.session
    // maxAge: 1000 * 60 * 60 * 24 // 1 day (miliseconds)
}))


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
