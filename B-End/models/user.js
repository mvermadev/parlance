var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var shortid = require("shortid");

// User Roles:
// 0 - Admin
// 1 - User
// 2 - Monk
// 3 - Enlightener


var userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        default: shortid.generate
    },
    avatar: {
        type: String
    },
    name: {
        type: String
    },
    username: {
        type: String
    },
    googleUserId: {
        type: String,
        default: ''
    },
    linkedInUserId: {
        type: String,
        default: ''
    },
    role: {
        type: Number,
        required: true,
        default: 1
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },

    password: {
        type: String
    },
    pdf: {
        type: [String]
    },
    resetPasswordToken: {
        type: String,
        default: ''
    },
    resetPasswordExpires: {
        type: Date,
        default: new Date()
    }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  };