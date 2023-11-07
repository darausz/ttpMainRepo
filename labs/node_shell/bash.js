let pwd = require("./pwd.js");
let ls = require("./ls.js");
let cat = require("./cat.js");
let curl = require("./curl.js");
//output a prompt
process.stdout.write("prompt > ");

function done(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}
//take in data
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim() //removes newLine
    if (cmd === "pwd") {
        pwd(done);
    }
    else if (cmd === "ls") {
        ls(done);
    }
    else if (cmd.split(" ")[0] === "cat") {
        cat(cmd.split(" ")[1], done);
    }
    else if (cmd.split(" ")[0] === "curl") {
        curl(cmd.split(" ")[1], done);
    }
    else {
    done("you typed: " + cmd); 
    }
})

