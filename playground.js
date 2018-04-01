// Resources
const flattenRoutes = require('./index.js')

// Implementation
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

console.log(JSON.stringify(flattenRoutes(routes), null, 2))
