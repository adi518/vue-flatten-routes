export const flattenRoutes = (routes = [], level = 0, hasNamedParent = false) => {
  if (Array.isArray(routes)) {
    return routes.reduce((acc, { name, path, children = [] }) => {
      const root = level === 0
      const nested = !root
      acc.push({ name, path, level, root, nested, hasNamedParent })
      if (children.length) {
        const hasNamedParent = !!name
        acc = acc.concat(
          flattenRoutes(children, level + 1, hasNamedParent)
        )
      }
      return acc
    }, [])
  }
}
