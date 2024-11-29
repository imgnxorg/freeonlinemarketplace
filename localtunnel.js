const localtunnel = require("localtunnel");

(async () => {
    const tunnel = await localtunnel({
        port: 3000,
        local_host: "freeonlinemarketplace.com",
    });

    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    console.log(tunnel.url);

    tunnel.on("close", () => {
        // tunnels are closed
    });
})();
