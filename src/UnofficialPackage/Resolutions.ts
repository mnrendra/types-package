/**
 * Resolutions is used to support selective version resolutions using yarn,
 * which lets you define custom package versions or ranges inside your
 * dependencies. For npm, use overrides instead.
 *
 * See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
 *
 * note: This is not a `package.json` official field.
 */
export type Resolutions = Record<string, unknown>
