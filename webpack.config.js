import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default (env = {}) => {
    return {
        mode: "production",
        target: "web",
        entry: [ path.resolve("./src/index.js") ],
        output: {
            filename: "[name].[contenthash].js",
            chunkFilename: "[id].[chunkhash].js",
            assetModuleFilename: "[name][ext]",
            path: path.resolve("./dist")
        },

        resolve: {
            extensions: [ ".js" ]
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(woff(2)?|ico|ttf|eot|svg|png|jpg|txt)(\?v=\d+\.\d+\.\d+)?$/,
                    exclude: /node_modules/,
                    type: "asset/resource"
                },
                {
                    test: /\.mp3$/,
                    include: path.resolve("./src"),
                    loader: "file-loader",
                    options: {
                        name: "[name][ext]",
                    }
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve("./public/index.html")
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "public/assets", to: "assets" },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[name].[chunkhash].css",
                ignoreOrder: true,
            }),
            new CleanWebpackPlugin()
        ], 

        ...(env.sourceMap && {
            devtool: "source-map",
        })
    }
}