"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var projectRootPath = path.resolve(__dirname, "../");
var assetsPath = path.resolve(projectRootPath, "./dist/static");
var config = {
    context: path.resolve(__dirname, ".."),
    entry: "./src/App.tsx",
    output: {
        path: assetsPath,
        publicPath: "/static/",
        filename: "bundle.js",
    },
    devtool: "#source-map",
    resolve: {
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ],
    },
};
exports.default = config;
//# sourceMappingURL=webpack.config.js.map