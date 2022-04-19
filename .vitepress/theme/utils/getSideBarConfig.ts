import type { DefaultTheme } from 'vitepress'

// Sidebar
export function isSideBarConfig(
  sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig,
): sidebar is DefaultTheme.SideBarConfig {
  return sidebar === false || sidebar === 'auto' || Array.isArray(sidebar)
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(
  sidebar: DefaultTheme.SideBarConfig | DefaultTheme.MultiSideBarConfig,
  path: string,
): DefaultTheme.SideBarConfig {
  if (isSideBarConfig(sidebar))
    return sidebar
  path = ensureStartingSlash(path)
  const sidebarKeys = Object.keys(sidebar).sort((a, b) => b.length - a.length)
  for (const dir of sidebarKeys) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(dir)))
      return sidebar[dir]
  }

  return 'auto'
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}
