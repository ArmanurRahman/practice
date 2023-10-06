module.exports = {
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    resolve: {
        extensions: [".ts", ".tsx"],
    },
};
