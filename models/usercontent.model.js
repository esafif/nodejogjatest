const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserContentSchema = new Schema({
    id_content: {type:String},
    name_user: {type: String, required: false},
    content: {type: String, required: false},
    date_content: {type: Date, default: Date.now},
    image_prof: {type: String},
    review: {type: Number}
});

module.exports = mongoose.model('UserContent', UserContentSchema);