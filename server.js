const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Process = require("./routes/api/process");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const uri = 'mongodb://127.0.0.1:27017/process'
// Connect to MongoDB
mongoose.connect(uri,
    {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(()=>console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


// Routes
app.use("/", Process);

const port = process.env.port || 5000;

app.listen(port, ()=> console.log(`Server up and running on port ${port} !`));
