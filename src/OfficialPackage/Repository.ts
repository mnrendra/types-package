import type { URL } from '../utils'

/**
 * Specify the place where your code lives. This is helpful for people who want
 * to contribute.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
 */
export type Repository = URL | {
  type?: string
  url?: URL
  directory?: string
}

export default Repository
