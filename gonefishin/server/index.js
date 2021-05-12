const express = require("express");
const mongojs = require("mongojs");
const compression = require('compression');
const helmet = require("helmet");

const app = express();

const PORT = process.env.PORT || 3010;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(helmet());
app.use(compression());

app.use(require("./utils/API.js"));

mongoose.connect(
    process.env.MONGODB_URL || 'mongodb://localhost/gonefishin',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});