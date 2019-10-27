const router = require('./router');
const merge = require('./merge');

const split = (url) => url.split('/').slice(1);

module.exports = (config) => {
  const route = merge(
    ...Object.keys(config).map(r => router([...split(r)], config[r]))
  );
  const match = (url) => {
    let result = null;
    const params = {};
    const search = (r, key) => {
      if (!key) return r;
      if (r.hasOwnProperty(key)) {
        return r[key];
      } else {
        if (r.hasOwnProperty('$')) {
          params[r['$']['$param']] = key;
          return r['$'];
        } else {
          throw new Error('Route not found');
        }
      }
    };
    try {
      result = {
        handler: split(url).reduce(search, route).$handler,
        params
      };
    } catch (error) {
      result = {
        handler: config['/404'],
        params
      };
    }
    return result;
  };
  return match;
};