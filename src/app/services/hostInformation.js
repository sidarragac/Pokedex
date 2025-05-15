const os = require('os');

function containerId(){
    return os.hostname();
}

module.exports = containerId;