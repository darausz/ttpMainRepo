const {cwd} = require("node:process");

module.exports = function (done) {
    done(`current directory: ${cwd()}`);  
};