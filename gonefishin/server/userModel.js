const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        allowNull: false,
        unique: true,
        trim: true
    },
    skilllevel: {
        type: String,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
          }
    },
    password: {
        type: String,
        validate:  {
            len: [8],
          }
    }
});

module.exports = mongoose.model("user", user);
module.exports = user;