var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var Model = mongoose.model('employee', schema);

module.exports = Model;