const test = require('ava');
const routerra = require('../src');

const routes = {
  '/': 'index',
  '/404': '404',
  '/main': 'main',
  '/main/settings/user': 'main-settings-user',
  '/user/{id}': 'user-id',
  '/{param1}/{param2}/{param3}': 'param1-param2-param3',
  '/{param1}/static': 'param1-static'
};

const match = routerra(routes);

test('static root', t => {
  t.snapshot(match('/'));
});

test('static single', t => {
  t.snapshot(match('/main'));
});

test('static deep', t => {
  t.snapshot(match('/main/settings/user'));
});

test('static + dynamic', t => {
  t.snapshot(match('/user/12'));
});

test('dynamic deep', t => {
  t.snapshot(match('/11/12/13'));
});

test('dynamic + static', t => {
  t.snapshot(match('/11/static'));
});

test('404', t => {
  t.snapshot(match('/route/not/found/dude'));
});
