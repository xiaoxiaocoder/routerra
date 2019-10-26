const router = (route, handler) => {
  const [path, ...paths] = route;
  const isDynamic = /\{\w+\}/g.test(path);
  const chunk = isDynamic ? `${path.replace(/\{(\w+)\}/g, '$1')}` : path;
  if (!path) {
    return { "$handler": handler };
  }
  if (isDynamic) {
    return {'$': {
      '$param': chunk,
      ...router(paths, handler)
    }};
  }
  return { [chunk]: router(paths, handler) };
};

module.exports = router;

