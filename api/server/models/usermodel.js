var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  id: {

  },
  name: {

  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {

  },
  photo: {
    
  }

});

module.exports = mongoose.model('User', userSchema);
