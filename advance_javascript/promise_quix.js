const fs = require("fs");

function readFile(filename, encoding) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
    return promise;
}
readFile("./files/demofile.txt", "utf-8").then(
    (data) => console.log(data),
    (err) => {
        console.log("failed ", err);
    }
);

const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

readFile("./files/demofile.txt", "utf-8").then(
    (data) =>
        zlibPromise(data).then(
            (data) => console.log(data),
            (err) => console.error(err)
        ),
    (err) => console.log("failed ", err)
); // --> Load it then zip it and then print it to screen

// promise chain
const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

readFile("./files/demofile.txt", "utf-8")
    .then(
        (data) => {
            return zlibPromise(data);
        },
        (err) => console.error("Failed to read ", err)
    )
    .then((data) => console.log(data)),
    (err) => console.log("failed to zip ", err); // --> Load it then zip it and then print it to screen

// error handler
const fs = require("fs");
const zlib = require("zlib");

function zlibPromise(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) reject(error);
            resolve(result);
        });
    });
}

function readFile(filename, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

readFile("./files/demofile.txt", "utf-8")
    .then((data) => {
        return zlibPromise(data);
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log("failed ", err);
    }); // --> genericerror message

// quiz 6
function authenticate() {
    console.log("Authenticating");
    return new Promise((resolve) => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
    console.log("Publishing");
    return new Promise((resolve) => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
    return new Promise((resolve, reject) =>
        setTimeout(reject, sleep, "timeout")
    );
}

Promise.race([publish(), timeout(1000)])
    .then((res) => {
        if (res.status === 403) {
            return authenticate();
        }
    })
    .then((_) => console.log("Published"))
    .catch((err) => {
        if (err === "timeout") {
            console.error("request time out");
        } else {
            console.error(err);
        }
    });

function authenticate() {
    console.log("Authenticating");
    return new Promise((resolve) => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
    console.log("Publishing");
    return new Promise((resolve) => setTimeout(resolve, 2000, { status: 403 }));
}

function safePublish() {
    return publish().then((res) => {
        if (res.status === 403) {
            return authenticate();
        }
        return res;
    });
}
function timeout(sleep) {
    return new Promise((resolve, reject) =>
        setTimeout(reject, sleep, "timeout")
    );
}

Promise.race([safePublish(), timeout(3000)])
    .then((_) => console.log("Published"))
    .catch((err) => {
        if (err === "timeout") {
            console.error("request time out");
        } else {
            console.error(err);
        }
    });
