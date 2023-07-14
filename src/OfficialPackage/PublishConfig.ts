import type { URL } from '../utils'

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
 */
export interface PublishConfig {
  access?: 'public' | 'restricted'
  registry?: URL
  tag?: string
}
