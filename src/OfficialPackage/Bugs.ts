import type { URL, Email } from '../utils'

/**
 * The url to your project's issue tracker and / or the email address to which
 * issues should be reported. These are helpful for people who encounter issues
 * with your package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
 */
export type Bugs = URL | Email | {
  /**
   * The url to your project's issue tracker.
   */
  url?: URL

  /**
   * The email address to which issues should be reported.
   */
  email?: Email
}
