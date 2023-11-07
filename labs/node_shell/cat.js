const fs = require("fs");

module.exports = function (file, done) {
    fs.readFile(`./${file}`, (err, content) => {
    if (err) {
        throw error;
    }
    done(content);
});

};