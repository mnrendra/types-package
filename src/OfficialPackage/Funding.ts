import type { URL } from '../utils'

type Fund = URL | {
  /**
   * URL to a website with details about how to fund the package.
   */
  url: URL

  /**
   * The type of funding or the platform through which funding can be provided,
   * e.g. patreon, opencollective, tidelift or github.
   */
  type?: string
}

/**
 * Used to inform about ways to help fund development of the package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
 */
export type Funding = Fund | Fund[]
