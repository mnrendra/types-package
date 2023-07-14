/**
 * Overrides is used to support selective version overrides using npm, which
 * lets you define custom package versions or ranges inside your dependencies.
 * For yarn, use resolutions instead.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
 */
export type Overrides = Record<string, unknown>
