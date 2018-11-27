var Cylon = require('cylon');

Cylon.robot({
  connections: {
    neurosky: { adaptor: 'neurosky' }
  },

  devices: {
    neurosky: { driver: 'neurosky' }
  },

  work: function(my) {
    my.headset.on('blink', function(data) {
      console.log("blink:" + data);
    });
  }
});

Cylon.start();