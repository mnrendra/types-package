/**
   * Version must be parseable by node-semver, which is bundled with npm as a
   * dependency.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version
   */
export type Version =
| `${number}.${number}.${number}`
| `${number}.${number}.${number}-${string}`
| `${number}.${number}.${number}+${string}`
