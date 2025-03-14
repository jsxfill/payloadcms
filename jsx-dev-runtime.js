export const jsxDEV = (type, { children: fields, ...rest }) => {
  if (type instanceof Function) return type(rest)

  fields = fields == null ? [] : fields
  fields = fields instanceof Array ? fields : [fields]

  if (type === "tabs") {
    return { type, tabs: fields, ...rest }
  }
  return { type, fields, ...rest }
}
export const Fragment = Symbol("Illegal Fragment")