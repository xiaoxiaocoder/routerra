const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const merge = (target, ...objects) => {
  if (!objects.length) return target;
  const [source, ...rest] = objects;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) {
          target[key] = {};
        };
        merge(target[key], source[key]);
      } else {
        target[key] = source[key]
      }
    });
  }
  return merge(target, ...rest);
};

module.exports = merge;
