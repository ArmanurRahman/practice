function a() {
    console.log(this); // refer to the window object
}
a();

let b = function () {
    console.log(this); // refer to the window object
};
b();

let c = {
    name: "This is c object",
    log: function () {
        this.name = "this is updated object";

        let setName = function () {
            this.name = "update again"; // for internal function this does not refer to create object. this is not refer to c, this refer to window object. This is consider a bug of JS
        };
        setName();
        console.log(this); // refer to the object from where it is generated. this case c
    },
};

c.log();
