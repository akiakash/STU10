const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(cors());

// app.use(express.json({ limit: "20mb", extended: true }));
// app.use(express.urlencoded({ limit: "20mb", extended: true }));
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: "1024*5",
//   })
// );
// app.use(bodyParser.json({ limit: "1024*5" }));

var bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    parameterLimit: 100000,
    extended: false,
  })
);

app.use(
  bodyParser.json({
    limit: "5mb",
  })
);

const ImagesManagement = require("./routes/imagesManagement");
const TeamManagement = require("./routes/teamManagement");

app.use("/imagesmanagement", ImagesManagement);
app.use("/teammanagement", TeamManagement);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

//connection to mongoDB
mongoose.connect(
  "mongodb+srv://akash:Akiakash1@cluster0.j9maf.mongodb.net/?retryWrites=true&w=majority",
  () => console.log("Successfully connected ")
);

//Server host
app.listen(4000);
