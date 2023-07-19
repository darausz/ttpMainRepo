let request = require("request");

module.exports = function(url, done) {
    request(url, function(error, response, body) {
        done(body);
    });
    
}