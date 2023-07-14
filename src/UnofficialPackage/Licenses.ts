import type { URL } from '../utils'

/**
 * @deprecated Instead, use SPDX expressions, like this: { "license": "ISC" }
 * or { "license": "(MIT OR Apache-2.0)" }
 *
 * see: https://docs.npmjs.com/files/package.json#license.
 *
 * note: This is not a `package.json` official field.
 */
export type Licenses = Array<{
  type?: string
  url?: URL
}>
