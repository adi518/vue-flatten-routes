# Vue-Flatten-Routes
Get a flat routes array from your [`vue-router`](https://github.com/vuejs/vue-router) compatible routes.
## Install
```
npm install --save vue-flatten-routes
```
## Usage
```js
import { flattenRoutes } from 'vue-flatten-routes'

const routes = [
  {
    name: 'foo',
    path: 'foo',
    children: [
      {
        name: 'foo-first-level-child',
        path: 'foo-first-level-child',
        children: [
          {
            path: 'foo-second-level-child',
            name: 'foo-second-level-child',
            children: [
              {
                path: 'foo-third-level-child',
                name: 'foo-third-level-child'
              }
            ]
          }
        ]
      },
      {
        name: 'foo-first-level-child-2',
        path: 'foo-first-level-child-2'
      }
    ]
  },
  {
    path: 'bar',
    children: [
      {
        name: 'bar-first-level-child',
        path: 'bar-first-level-child',
        children: [
          {
            name: 'bar-second-level-child',
            path: 'bar-second-level-child'
          }
        ]
      }
    ]
  }
]

console.log(JSON.stringify(flattenRoutes(routes), null, 2))

/* Output:
[
  {
    "name": "foo",
    "path": "foo",
    "level": 0,
    "root": true,
    "nested": false,
    "hasNamedParent": false
  },
  {
    "name": "foo-first-level-child",
    "path": "foo-first-level-child",
    "level": 1,
    "root": false,
    "nested": true,
    "hasNamedParent": false
  },
  {
    "name": "foo-second-level-child",
    "path": "foo-second-level-child",
    "level": 2,
    "nested": true,
    "hasNamedParent": false
  },
  {
    "name": "foo-third-level-child",
    "path": "foo-third-level-child",
    "level": 3,
    "nested": true,
    "hasNamedParent": false
  },
  {
    "name": "foo-first-level-child-nd",
    "path": "foo-first-level-child-nd",
    "level": 1,
    "nested": true,
    "hasNamedParent": false
  },
  {
    "path": "bar",
    "level": 0,
    "root": true,
    "nested": false,
    "hasNamedParent": false
  },
  {
    "name": "bar-first-level-child",
    "path": "bar-first-level-child",
    "level": 1,
    "nested": true,
    "hasNamedParent": false
  },
  {
    "name": "bar-second-level-child",
    "path": "bar-second-level-child",
    "level": 2,
    "nested": true,
    "hasNamedParent": true
  }
]
*/
```
