function doAsyncTask(cb) {
    setImmediate(() => {
        console.log("asynce called");
        cb();
    });
}
doAsyncTask(() => console.log(message));

let message = "Callback Called";

const fs = require("fs");

function readFileThenDo(next) {
    fs.readFile("./blah.nofile", (err, data) => {
        next(err, data);
    });
}

readFileThenDo((err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
