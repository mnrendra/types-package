/**
 * When a user installs your package, warnings are emitted if packages
 * specified in "peerDependencies" are not already installed. The
 * "peerDependenciesMeta" field serves to provide more information on how your
 * peer dependencies are utilized. Most commonly, it allows peer dependencies
 * to be marked as optional. Metadata for this field is specified with a simple
 * hash of the package name to a metadata object.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
 */
export type PeerDependenciesMeta = Record<string, {
  /**
   * Specifies that this peer dependency is optional and should not be
   * installed automatically.
   */
  optional?: boolean
}>
