import type { Email } from './Email'
import type { URL } from './URL'

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
 */
export type People = string | {
  name: string
  email?: Email
  url?: URL
}
