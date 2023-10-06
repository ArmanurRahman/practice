const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getWeather = require("./utils/utils");

const app = express();

//setup static directory to server
app.use(express.static(path.join(__dirname, "../public")));

//setup handlebars engine and views location, the default name of view folder is views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("", (req, res) => {
    res.render("index", { name: "Mubeen Arman", title: "Weather " });
});

app.get("/about", (req, res) => {
    res.render("about", { name: "Mubeen Arman", title: "About" });
});

app.get("/help", (req, res) => {
    res.render("help", { name: "Mubeen Arman", title: "Help" });
});

app.get("/weather", (req, res) => {
    if (!req.query.city) {
        return res.send({ error: "Unable to search location" });
    }
    getWeather(req.query.city, (data) => {
        res.send(data.response);
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        message: "Help article not found",
        name: "Mubeen Arman",
        title: "404",
    });
});

app.get("/*", (req, res) => {
    res.render("404", {
        message: "page not found",
        name: "Mubeen Arman",
        title: "404",
    });
});

app.listen(3000, () => {
    console.log("Server listen 3000");
});
