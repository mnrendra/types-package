import type { People } from '../utils'

/**
 * A list of people who maintains this package.
 *
 * note: This is not a `package.json` official field.
 */
export type Maintainers = string[] | People[]
