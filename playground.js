const { flattenRoutes } = require('./dist/main.js')

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
        name: 'foo-2nd-first-level-child-2',
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
