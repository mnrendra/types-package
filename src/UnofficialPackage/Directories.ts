/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 */
export interface Directories {
  /**
   * Put markdown files in here. Eventually, these will be displayed nicely,
   * maybe, someday.
   *
   * note: This is not a `package.json` official field.
   */
  doc?: string

  /**
   * Put example scripts in here. Someday, it might be exposed in some clever
   * way.
   *
   * note: This is not a `package.json` official field.
   */
  example?: string

  /**
   * Tell people where the bulk of your library is. Nothing special is done
   * with the lib folder in any way, but it's useful meta info.
   *
   * note: This is not a `package.json` official field.
   */
  lib?: string

  /**
   * note: This is not a `package.json` official field.
   */
  test?: string
}
