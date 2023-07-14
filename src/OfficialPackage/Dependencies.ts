/**
 * Dependencies are specified with a simple hash of package name to version
 * range. The version range is a string which has one or more space-separated
 * descriptors. Dependencies can also be identified with a tarball or git URL.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
 */
export type Dependencies = Record<string, string>
