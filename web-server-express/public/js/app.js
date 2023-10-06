console.log("client side js loaded");

const formEl = document.querySelector("form");
const buttonEl = document.querySelector("button");
const searchInput = document.querySelector("input");
const message1El = document.querySelector("#message1");
const message2El = document.querySelector("#message2");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = searchInput.value;
    message2El.textContent = "";
    if (!inputValue) {
        message1El.textContent = "Invalid input";

        return;
    }
    message1El.textContent = "Loading...";
    searchWeather(inputValue);
});

const searchWeather = (inputValue) => {
    fetch(`/weather?city=${inputValue}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1El.textContent = data.error;
            } else {
                message1El.textContent = `${data.location.name}, ${data.location.country}`;
                message2El.textContent = `${data.current.weather_descriptions[0]}, ${data.current.temperature}C`;
            }
            console.log(data);
        });
    });
};
