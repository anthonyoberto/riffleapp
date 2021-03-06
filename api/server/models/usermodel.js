var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
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

module.exports = mongoose.model('User', userSchema);
