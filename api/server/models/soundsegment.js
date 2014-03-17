var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
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

module.exports = mongoose.model('Sound', soundSchema);
