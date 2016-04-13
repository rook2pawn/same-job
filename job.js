var bull = require('bull');
var q = bull('queue1', 6379, '127.0.0.1')

var idx = 0;
setInterval(function() {
  q.add({idx:idx})
  idx++
},2000)
