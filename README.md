# routerra
Tiny router library

### Install
```sh
npm i routerra
```

### Setup
```javascript
const routerra = require('routerra');

const routes = {
  '/': indexHandler,
  '/user': userHandler,
  '/user/settings': userSettingsHandler,
  '/page/{id}': pageHandler,
  '/404': notFoundHandler
};

const match = routerra(routes);
```

### Use
```javascript
match('/');
/*
  {
    handler: indexHandler,
    params: {}
  }
*/

match('/user');
/*
  {
    handler: userHandler,
    params: {}
  }
*/

match('/user/settings');
/*
  {
    handler: userSettingsHandler,
    params: {}
  }
*/

match('/page/17');
/*
  {
    handler: pageHandler,
    params: { id: 17 }
  }
*/

match('/something');
/*
  {
    handler: notFoundHandler,
    params: {}
  }
*/
```

---

Also you can use routes like:
```javascript
const routes = {
  '/one/two/three/four/and/more': longRoute,
  '/use/more/{path}/{params}/{as}/{you}/want': moreParams,
  '/{or}/{only}/{params}': butWhyNeededHandler
};
```

### Test
```sh
npm test
```