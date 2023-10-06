(function (global, jquery) {
    let Greeter = function (firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    };

    Greeter.init = function (firstName, lastName, language) {
        let self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    let greetings = {
        en: "Hello",
        es: "Hola",
    };

    let formalGreetings = {
        en: "Greetings",
        es: "Saludos",
    };

    let logMessages = {
        en: "Logged in ",
        es: "Inicio sesion",
    };

    let supportedLanguage = ["en", "es"];
    Greeter.prototype = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validate: function () {
            if (!supportedLanguage.includes(this.language)) {
                throw "Invalid language";
            }
        },

        greeting: function () {
            return greetings[this.language] + " " + this.firstName + "!";
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + " " + this.fullName();
        },
        greet: function (formal) {
            let message = "";
            if (formal) {
                message = this.formalGreeting();
            } else {
                message = this.greeting();
            }

            console.log(message);
            return this;
        },
        log: function () {
            console.log(logMessages[this.language] + ": " + this.fullName());
            return this;
        },
        setLang: function (lang) {
            this.language = lang;
            this.validate();
            return this;
        },
    };
    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;
})(window, {});
