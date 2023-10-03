const path = require("path");
const Dotenv = require("dotenv-webpack");

/** @type {(env: any, arg: {mode: string}) => import('webpack').Configuration} **/
module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  /** @type {import('webpack').Configuration} **/
  const config = {
    // Quy định cách webpack giải quyết các file
    resolve: {
      // Giải quyết các file theo thứ tự ưu tiên từ trái sang phải nếu import
      // các file cùng một tên nhưng các đuôi mở rộng
      extensions: [".ts", ".tsx"],
      alias: {
        // Cấu hình alias cho webpack
        // để khi import cho ngắn gọn
        // Ví dụ: import Login from '@pages/Login'
        // Thay vì: import Login from '../pages/Login' chẳng hạn
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // File đầu vào cho webpack, file này thường là file import mọi file khác
    entry: ["./src/index.ts"],
    // Khai báo các module dùng trong webpack
    module: {
      rules: [
        {
          test: /\.tsx?$/, // duyệt các file .ts || .tsx
          exclude: /node_modules/,
          use: ["babel-loader"], // Giúp dịch code TS, React sang JS,
        },
      ],
    },

    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "lib"),
      publicPath: "/",
      clean: true,
    },
    devtool: isProduction ? false : "source-map",
    plugins: [
      // Dùng biến môi trường env trong dự án
      new Dotenv(),
      // Copy mọi files trong folder public trừ file index.html
      // Thêm eslint cho webpack
      // new ESLintPlugin({
      //   extensions: [".tsx", ".ts", ".js", ".jsx"],
      // }),
    ],
  };

  return config;
};
