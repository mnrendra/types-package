/**
 * Defines which package manager is expected to be used when working on the
 * current project. This field is currently experimental and needs to be
 * opted-in; see https://nodejs.org/api/corepack.html
 *
 * note: This is not a `package.json` official field.
 */
export type PackageManager =
| `npm@${number}.${number}.${number}`
| `pnpm@${number}.${number}.${number}`
| `yarn@${number}.${number}.${number}`
