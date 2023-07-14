/**
 * Used to specify conditional exports, note that Conditional exports are
 * unsupported in older environments, so it's recommended to use the fallback
 * array option if support for those environments is a concern.
 *
 * note: This is not a `package.json` official field.
 */
export type Exports = null | `./${string}` | Exports[] | {
  /**
   * Used to specify conditional exports, note that Conditional exports are
   * unsupported in older environments, so it's recommended to use the fallback
   * array option if support for those environments is a concern.
   */
  '.'?: Exports

  /**
   * The module path that is resolved when this specifier is imported. Set to
   * `null` to disallow importing this module.
   */
  default?: Exports

  /**
   * The module path that is resolved when this specifier is imported. Set to
   * `null` to disallow importing this module.
   */
  import?: Exports

  /**
   * The module path that is resolved when this specifier is imported. Set to
   * `null` to disallow importing this module.
   */
  node?: Exports

  /**
   * The module path that is resolved when this specifier is imported. Set to
   * `null` to disallow importing this module.
   */
  require?: Exports

  /**
   * The module path that is resolved when this specifier is imported. Set to
   * `null` to disallow importing this module.
   */
  types?: Exports
}
