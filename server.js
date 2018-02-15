const http = require('http');
const fs = require('fs');
const qs = require('querystring');

const PORT = 3111;

const studentController = require('./controller/students');



/* Load sync files into a global variable
 * This serves as an in-memory cache for speedy access.
 */






/** @function handleRequest
  * Handles requests to the webserver by rendering a page listing
  * students, and processing any new student additions submitted
  * through an HTTP request.
  * @param {http.ClientRequest} req - the client request object
  * @param {htt.ServerResponse} res - the server response object
  */
function handleRequest(req, res) {

  // Check for form submittal
  if(req.method === "POST") {
    studentController.create(req, res);
  } else{
      studentController.list(req, res)
  }
}

// Create the webserver
var server = http.createServer(handleRequest);

// Start listening for HTTP requests
server.listen(PORT, function() {
  console.log("Listening at port ", PORT);
});
