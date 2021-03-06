var path = require('path'),
    Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'pushserver',
    script: path.join(__dirname, 'pushserver.js')
});

svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists: ',svc.exists);
});

svc.on('install',function(){
    svc.start();
});

svc.install();