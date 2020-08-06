var mongoose = require("mongoose");
var shortid = require("shortid");
const Schema = require("mongoose");

var contentSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        default: shortid.generate
    },
    uploaded_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    video: {
        id: {
            type: String,
            default: shortid.generate
        },
        value: {
            type: String
        }
    },
    pdf:
        {
            id: {
                type: String,
                default: shortid.generate
            },
            value: {
                type: String
            }
        },
    category: {
        type: String
    },
    title: {
        type: String
        },
    time : { type : Date, default: Date.now() }

});

module.exports = mongoose.model("Content", contentSchema);
