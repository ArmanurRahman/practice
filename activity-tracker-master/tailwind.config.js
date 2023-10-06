module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            padding: {
                "3/5": "60%",
            },
        },
        fontFamily: {
            main: ["Nunito"],
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            translate: ["responsive", "group-hover", "hover", "focus"],
            scale: ["active", "group-hover"],
        },
    },
    plugins: [],
};
