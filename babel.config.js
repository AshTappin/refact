module.exports = {
    presets: [

        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        "@babel/typescript",
        "@babel/preset-react"
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties",  {"loose": true}]
    ],
};