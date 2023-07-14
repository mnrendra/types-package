import type { URL } from '../utils'

/**
 * Array of badges to display in the sidebar of the Marketplace's extension
 * page.
 *
 * note: This is not a `package.json` official field.
 */
export type Badges = Array<{
  /**
   * Badge description.
   */
  description: string

  /**
   * Badge link.
   */
  href: URL

  /**
   * Badge image URL.
   */
  url: URL
}>
