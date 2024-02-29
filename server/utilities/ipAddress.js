const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null);

exports.ipaddress = () => {

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
            if (net.family === familyV4Value && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    if(results['Wi-Fi'] !== null){
        console.log(results['Wi-Fi'][0])
        return results['Wi-Fi'][0]
    }
    return ['eth0'][0]
}

// ipaddress()

// exports.ipaddress
// Example output:
// results["en0"][0] => "192.168.1.101"
