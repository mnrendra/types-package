/**
 * Allows packages within a directory to depend on one another using direct
 * linking of local files. Additionally, dependencies within a workspace are
 * hoisted to the workspace root when possible to reduce duplication. Note:
 * It's also a good idea to set "private" to true when using this feature.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#workspaces
 */
export type Workspaces = string[] | {
  /**
   * Workspace package paths. Glob patterns are supported.
   */
  packages?: string[]

  /**
   * Packages to block from hoisting to the workspace root. Currently only
   * supported in Yarn only.
   */
  nohoist?: string[]
}
