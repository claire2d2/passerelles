// api/graphql.js
const { handler } = require('../dist/index'); // Import the handler from the correct file
console.log("Handler function is being called");  

module.exports = handler; // Export the handler for Vercel
