module.exports = function (api) {
    api.cache(true)
    const presets = [
        "module:metro-react-native-babel-preset"
    ];
    const plugins = [
        "@babel/plugin-transform-flow-strip-types",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
        "@babel/plugin-transform-regenerator",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-runtime"
    ];

    return {
        presets,
        plugins,
        'sourceMaps': true,
    };
}