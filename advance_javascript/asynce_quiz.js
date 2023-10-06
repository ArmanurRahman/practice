const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

(async function () {
    let promises = files.map((name) => readFile(name, "utf8"));
    let values = await Promise.all(promises);
    console.log(values);
})();

const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const fileIterator = (files) => ({
    [Symbol.asyncIterator]: () => ({
        x: 0,
        next() {
            if (this.x >= files.length) {
                return Promise.resolve({ done: true });
            }
            let file = files[this.x++];
            return readFile(file, "utf8").then((data) => ({
                done: false,
                value: data,
            }));
        },
    }),
});

(async () => {
    for await (let x of fileIterator([
        "./files/demofile.txt",
        "./files/demofile.other.txt",
    ])) {
        console.log(x);
    }
})();
