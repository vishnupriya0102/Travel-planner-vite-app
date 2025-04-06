const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(bodyparser.json());
app.use(cors());
mongoose.connect("mongodb+srv://vishnupriyas2021csec:12345@cluster0.wks42.mongodb.net/adv-mern?retryWrites=true&w=majority&appName=Cluster0",
    // { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log("Connected to MongoDB");
})

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})