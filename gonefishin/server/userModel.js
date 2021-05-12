const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
    },
    
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
          
        beforeUpdate: async (updatedUserData) => {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
});

module.exports = mongoose.model("user", user);
module.exports = user;