/**
 * Dependencies to other extensions. The identifier of an extension is always
 * ${publisher}.${name}. For example: vscode.csharp.
 *
 * note: This is not a `package.json` official field.
 */
export type ExtensionDependencies = Array<`${string}.${string}`>
