const mongoose = require('mongoose');
const sequenceSchema = new mongoose.Schema({sequence: [Number]});
module.exports = mongoose.model('Sequence', sequenceSchema);