import type { URL } from '../utils'

/**
 * semantic-release Schema.
 *
 * note: This is not a `package.json` official field.
 */
export interface Release {
  /**
   * The branches on which releases should happen.
   */
  branches?: string | Array<string | {
    name: string
    prerelease?: boolean | string
    channel?: string
    range?: string
  }>

  /**
   * Set to false to skip Continuous Integration environment verifications.
   * This allows for making releases from a local machine.
   */
  ci?: boolean

  /**
   * The objective of the dry-run mode is to get a preview of the pending
   * release. Dry-run mode skips the following steps: prepare, publish, success
   * and fail. In addition to this it prints the next version and release notes
   * to the console.
   */
  dryRun?: boolean

  /**
   * List of modules or file paths containing a shareable configuration. If
   * multiple shareable configurations are set, they will be imported in the
   * order defined with each configuration option taking precedence over the
   * options defined in a previous shareable configuration.
   */
  extends?: string | string[]

  /**
   * Define the list of plugins to use. Plugins will run in series, in the
   * order defined.
   */
  plugins?: string[]

  /**
   * The git repository URL.
   */
  repositoryUrl?: URL

  /**
   * The Git tag format used by semantic-release to identify releases. The tag
   * name is generated with Lodash template and will be compiled with the
   * version variable.
   */
  tagFormat?: string
}
