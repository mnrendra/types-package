/**
 * Describe the API provided by this extension. For more details visit:
 * https://code.visualstudio.com/api/advanced-topics/remote-extensions#handling-dependencies-with-remote-extensions
 *
 * `none`: Give up entirely the ability to export any APIs. This allows other
 * extensions that depend on this extension to run in a separate extension host
 * process or in a remote machine.
 *
 * note: This is not a `package.json` official field.
 */
export type API = 'none'
