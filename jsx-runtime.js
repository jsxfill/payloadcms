let ChildrenKey = "fields"

export const jsx = (type, { children, ...rest }) => {
  if (type instanceof Function) return type(rest)
  if (type === "tabs") ChildrenKey = "tabs"

  return { type, [ChildrenKey]: children != null ? [children] : [], ...rest }
}
export const jsxs = (type, { children, ...rest }) => {
  if (type instanceof Function) return type(rest)
  if (type === "tabs") ChildrenKey = "tabs"

  return { type, [ChildrenKey]: children, ...rest }
}
export const Fragment = Symbol("Illegal Fragment")
