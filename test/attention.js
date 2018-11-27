var Cylon = require('cylon');

Cylon.robot({
  connections: {
    neurosky: { 
        adaptor: 'neurosky',
        port: '/dev/tty.MindWaveMobile-SerialPo' 
    }
  },

  devices: {
    headset: { 
      driver: 'neurosky' 
    }
  },

  work: function(my) {
    my.headset.on('attention', function(data) {
      console.log("attention:" + data);
    });
  }
});

start();