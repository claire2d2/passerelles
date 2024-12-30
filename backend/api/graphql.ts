import {server} from "../src/index"
const { startServerAndCreateNextHandler } = require('@as-integrations/next');

// Export the handler to process requests
module.exports = startServerAndCreateNextHandler(server);
