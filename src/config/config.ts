let keys;
if (process.env.NODE_ENV === 'development') {
  keys = require('./dev');
} else if (process.env.NODE_ENV === 'ci') {
  keys = require('./ci');
} else {
  keys = require('./prod');
  //keys for production
}
export { keys };
