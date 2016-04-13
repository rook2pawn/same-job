var bull = require('bull');
var q = bull('queue1', 6379, '127.0.0.1')

q.process(function(job, done) {
  console.log("data:", job.data);
  done()
})
