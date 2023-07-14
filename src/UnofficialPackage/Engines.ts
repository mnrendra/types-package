/**
 * Engine compatibility.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
export interface Engines {
  /**
   * For VS Code extensions, specifies the VS Code version that the extension
   * is compatible with. Cannot be *. For example: ^0.10.5 indicates
   * compatibility with a minimum VS Code version of 0.10.5.
   *
   * note: This is not a `package.json` official field.
   */
  vscode?: string
}
