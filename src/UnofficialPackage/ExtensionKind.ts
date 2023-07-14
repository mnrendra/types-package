/**
 * Define the kind of an extension. `ui` extensions are installed and run on
 * the local machine while `workspace` extensions run on the remote.
 *
 * note: This is not a `package.json` official field.
 */
export type ExtensionKind = Array<'ui' | 'workspace'>
