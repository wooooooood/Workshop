//webpack configuration file, 존나 수정 예정
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //src의 파일을 public에 만드러줌

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
        })
    ]
}