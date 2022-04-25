module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions'   //所有主流浏览器最近10个版本以内
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*", "!border"],     //存储那些将会被转换的属性列表
      unitPrecision: 5,     // 保留小数点后5位
      replace: true,
      mediaQuery: false,
      minPixelValue: 12     // 小于12px的不会被转换
    }
  }
}