var mongoose = require('mongoose');
var soundSchema = mongoose.Schema({
  id: {

  },
  tags: {

  },
  length: {

  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {

  },
  source: {

  }

});

module.exports = mongoose.model('Sound', soundSchema);
