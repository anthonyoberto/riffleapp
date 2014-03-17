var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  id: Objectid,
  name: String,
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date
  },
  photo: String

});

var soundSchema = new Schema({
  id: Objectid,
  tags: Array,
  length: number,
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    defualt: Date
  },
  source: String

});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Sound', soundSchema);
