//webpack configuration file, 존나 수정 예정
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //src의 파일을 public에 만드러줌
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: './src/index.js',  //쉼표, 중괄호, 세미콜론 중요
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, //js확장자 파일 찾는 정규식
                exclude: /node_modules/, //익스클루드 안하면 빌드할때마다 몇분씩 걸림
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackPwaManifest({
            name: "리액트 메모",
            short_name: "메모",
            description: "리액트로 제작한 메모앱입니다.",
            background_color: '#ffffff',
            crossorigin: 'use-credentials',
            theme_color: '#eeeeee',
            icons: [
                {
                    src: path.resolve('src/assets/Icon.png'),
                    sizes: [96,128,192,256,384,512]
                }
            ]
        })
    ]
}