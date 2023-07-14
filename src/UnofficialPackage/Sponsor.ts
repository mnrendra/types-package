import type { URL } from '../utils'

/**
 * Specify the location from where users can sponsor your extension.
 *
 * note: This is not a `package.json` official field.
 */
export interface Sponsor {
  /**
   * URL from where users can sponsor your extension. It must be a valid URL
   * with a HTTP or HTTPS protocol.
   *
   * Example value: https://github.com/sponsors/nvaccess
   */
  url?: URL
}
