import type { Route } from 'vitepress'
export const outboundRE = /^[a-z]+:/i
export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}
export function isActive(route: Route, path?: string): boolean {
  if (path === undefined)
    return false

  const routePath = normalize(`/${route.data.relativePath}`)
  const pagePath = normalize(path)

  return routePath === pagePath
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

export function joinUrl(base: string, path: string): string {
  const baseEndsWithSlash = base.endsWith('/')
  const pathStartsWithSlash = path.startsWith('/')

  if (baseEndsWithSlash && pathStartsWithSlash)
    return base.slice(0, -1) + path

  if (!baseEndsWithSlash && !pathStartsWithSlash)
    return `${base}/${path}`

  return base + path
}
