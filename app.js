const express = require("express");
const Index = require("./routes/index");

const app = express();

// CONFIG
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", Index);

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on PORT ${process.env.PORT}`);
});
