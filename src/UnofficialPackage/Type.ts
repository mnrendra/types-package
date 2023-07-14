/**
 * When set to "module", the type field allows a package to specify all .js
 * files within are ES modules. If the "type" field is omitted or set to
 * "commonjs", all .js files are treated as CommonJS.
 *
 * note: This is not a `package.json` official field.
 */
export type Type = 'commonjs' | 'module'
