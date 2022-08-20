// set this if your path is httP://www.aaa.com/walike-talkie/public
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/walkie-talkie/public/'
    : '/walkie-talkie/public/'
}
