/**
 * The "typesVersions" field is used since TypeScript 3.1 to support features
 * that were only made available in newer TypeScript versions.
 *
 * note: This is not a `package.json` official field.
 */
export type TypesVersions = Record<string, Record<string, string[]>>
