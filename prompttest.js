var prompt = require('prompt');

  prompt.start();

  prompt.get(['IPAddr', 'Port'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  IP Address: ' + result.IPAddr);
    console.log('  Port: ' + result.port);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }