# Vue-Flatten-Routes
Get a flat routes array from your [`vue-router`](https://github.com/vuejs/vue-router) compatible routes.
## Install
```
npm install --save vue-flatten-routes
```
## Usage
```js
// Helpers
import { flattenRoutes } from 'vue-flatten-routes'

// Routes
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
        name: 'foo-first-level-child-nd',
        path: 'foo-first-level-child-nd',
      }
    ]
  },
  {
    name: 'bar',
    path: 'bar'
  }
]

// Flatten
console.log(JSON.stringify(flattenRoutes(routes), null, 2))

/* Output:
[
  {
    "name": "foo",
    "path": "foo",
    "level": 0
  },
  {
    "name": "foo-first-level-child",
    "path": "foo-first-level-child",
    "level": 1
  },
  {
    "name": "foo-second-level-child",
    "path": "foo-second-level-child",
    "level": 2
  },
  {
    "name": "foo-third-level-child",
    "path": "foo-third-level-child",
    "level": 3
  },
  {
    "name": "foo-first-level-child-nd",
    "path": "foo-first-level-child-nd",
    "level": 1
  },
  {
    "name": "bar",
    "path": "bar",
    "level": 0
  },
  ...
]
*/
```
