import type { ActivationEvents } from './ActivationEvents'
import type { API } from './API'
import type { AVA } from './AVA'
import type { Badges } from './Badges'
import type { BundledDependencies } from './BundledDependencies'
import type { Capabilities } from './Capabilities'
import type { Categories } from './Categories'
import type { Contributes } from './Contributes'
import type { Directories } from './Directories'
import type { Dist } from './Dist'
import type { EnabledApiProposals } from './EnabledApiProposals'
import type { Engines } from './Engines'
import type { ESLintConfig } from './ESLintConfig'
import type { ESNext } from './ESNext'
import type { Exports } from './Exports'
import type { ExtensionDependencies } from './ExtensionDependencies'
import type { ExtensionKind } from './ExtensionKind'
import type { ExtensionPack } from './ExtensionPack'
import type { GalleryBanner } from './GalleryBanner'
import type { Icon } from './Icon'
import type { Jest } from './Jest'
import type { JSCPD } from './JSCPD'
import type { JSPM } from './JSPM'
import type { Licenses } from './Licenses'
import type { Maintainers } from './Maintainers'
import type { Markdown } from './Markdown'
import type { PackageManager } from './PackageManager'
import type { Prettier } from './Prettier'
import type { QnA } from './QnA'
import type { Release } from './Release'
import type { Resolutions } from './Resolutions'
import type { Scripts } from './Scripts'
import type { Sponsor } from './Sponsor'
import type { Stylelint } from './Stylelint'
import type { Type } from './Type'
import type { TypesVersions } from './TypesVersions'

/**
 * Unofficial `package.json` fields.
 */
export interface UnofficialPackage {
  /**
   * Activation events for the VS Code extension.
   *
   * note: This is not a `package.json` official field.
   */
  activationEvents?: ActivationEvents

  /**
   * Describe the API provided by this extension. For more details visit:
   * https://code.visualstudio.com/api/advanced-topics/remote-extensions#handling-dependencies-with-remote-extensions
   *
   * `none`: Give up entirely the ability to export any APIs. This allows other
   * extensions that depend on this extension to run in a separate extension
   * host process or in a remote machine.
   *
   * note: This is not a `package.json` official field.
   */
  api?: API

  /**
   * AVA Config Schema
   *
   * Configuration Schema for the JavaScript test runner AVA.
   *
   * note: This is not a `package.json` official field.
   */
  ava?: AVA

  /**
   * Array of badges to display in the sidebar of the Marketplace's extension
   * page.
   *
   * note: This is not a `package.json` official field.
   */
  badges?: Badges

  /**
   * Array of package names that will be bundled when publishing the package.
   *
   * note: This is not a `package.json` official field.
   */
  bundledDependencies?: BundledDependencies

  /**
   * Declare the set of supported capabilities by the extension.
   *
   * note: This is not a `package.json` official field.
   */
  capabilities?: Capabilities

  /**
   * The categories used by the VS Code gallery to categorize the extension.
   *
   * note: This is not a `package.json` official field.
   */
  categories?: Categories

  /**
   * All contributions of the VS Code extension represented by this package.
   *
   * note: This is not a `package.json` official field.
   */
  contributes?: Contributes

  /**
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
   */
  directories?: Directories

  /**
   * The display name for the extension used in the VS Code gallery.
   *
   * note: This is not a `package.json` official field.
   */
  displayName?: string

  /**
   * note: This is not a `package.json` official field.
   */
  dist?: Dist

  /**
   * Enable API proposals to try them out. Only valid during development.
   * Extensions cannot be published with this property. For more details visit:
   * https://code.visualstudio.com/api/advanced-topics/using-proposed-api
   *
   * note: This is not a `package.json` official field.
   */
  enabledApiProposals?: EnabledApiProposals

  /**
   * Engine compatibility.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
   */
  engines?: Engines

  /**
   * note: This is not a `package.json` official field.
   */
  engineStrict?: boolean

  /**
   * JSON schema for ESLint configuration files.
   *
   * ESLint configuration.
   *
   * note: This is not a `package.json` official field.
   */
  eslintConfig?: ESLintConfig

  /**
   * A module ID with untranspiled code that is the primary entry point to your
   * program.
   *
   * note: This is not a `package.json` official field.
   */
  esnext?: ESNext

  /**
   * Used to specify conditional exports, note that Conditional exports are
   * unsupported in older environments, so it's recommended to use the fallback
   * array option if support for those environments is a concern.
   *
   * note: This is not a `package.json` official field.
   */
  exports?: Exports

  /**
   * Dependencies to other extensions. The identifier of an extension is always
   * ${publisher}.${name}. For example: vscode.csharp.
   *
   * note: This is not a `package.json` official field.
   */
  extensionDependencies?: ExtensionDependencies

  /**
   * Define the kind of an extension. `ui` extensions are installed and run on
   * the local machine while `workspace` extensions run on the remote.
   *
   * note: This is not a `package.json` official field.
   */
  extensionKind?: ExtensionKind

  /**
   * A set of extensions that can be installed together. The identifier of an
   * extension is always ${publisher}.${name}. For example: vscode.csharp.
   *
   * note: This is not a `package.json` official field.
   */
  extensionPack?: ExtensionPack

  /**
   * Banner used in the VS Code marketplace.
   *
   * note: This is not a `package.json` official field.
   */
  galleryBanner?: GalleryBanner

  /**
   * The path to a 128x128 pixel icon.
   *
   * note: This is not a `package.json` official field.
   */
  icon?: Icon

  /**
   * Official `Jest` config.
   *
   * note: This is not a `package.json` official field.
   */
  jest?: Jest

  /**
   * note: This is not a `package.json` official field.
   */
  jscpd?: JSCPD

  /**
   * JSON schema for NPM package.json files.
   *
   * note: This is not a `package.json` official field.
   */
  jspm?: JSPM

  /**
   * The relative path to a folder containing localization (bundle.l10n.*.json)
   * files. Must be specified if you are using the vscode.l10n API.
   *
   * note: This is not a `package.json` official field.
   */
  l10n?: string

  /**
   * @deprecated Instead, use SPDX expressions, like this: { "license": "ISC" }
   * or { "license": "(MIT OR Apache-2.0)" }
   *
   * see: https://docs.npmjs.com/files/package.json#license.
   *
   * note: This is not a `package.json` official field.
   */
  licenses?: Licenses

  /**
   * A list of people who maintains this package.
   *
   * note: This is not a `package.json` official field.
   */
  maintainers?: Maintainers

  /**
   * Controls the Markdown rendering engine used in the Marketplace. Either
   * github (default) or standard.
   *
   * note: This is not a `package.json` official field.
   */
  markdown?: Markdown

  /**
   * An ECMAScript module ID that is the primary entry point to your program.
   *
   * note: This is not a `package.json` official field.
   */
  module?: string

  /**
   * Defines which package manager is expected to be used when working on the
   * current project. This field is currently experimental and needs to be
   * opted-in; see https://nodejs.org/api/corepack.html
   *
   * note: This is not a `package.json` official field.
   */
  packageManager?: PackageManager

  /**
   * @deprecated This option used to trigger an npm warning, but it will no
   * longer warn. It is purely there for informational purposes. It is now
   * recommended that you install any binaries as local devDependencies
   * wherever possible.
   *
   * note: This is not a `package.json` official field.
   */
  preferGlobal?: boolean

  /**
   * Schema for .prettierrc
   *
   * Prettier configuration.
   *
   * note: This is not a `package.json` official field.
   */
  prettier?: Prettier

  /**
   * Sets the extension to be flagged as a Preview in the Marketplace.
   *
   * note: This is not a `package.json` official field.
   */
  preview?: boolean

  /**
   * The publisher of the VS Code extension.
   *
   * note: This is not a `package.json` official field.
   */
  publisher?: string

  /**
   * Controls the Q&A link in the Marketplace. Set to marketplace to enable the
   * default Marketplace Q & A site. Set to a string to provide the URL of a
   * custom Q & A site. Set to false to disable Q & A altogether.
   *
   * note: This is not a `package.json` official field.
   */
  qna?: QnA

  /**
   * note: This is not a `package.json` official field.
   */
  readme?: string

  /**
   * semantic-release Schema.
   *
   * note: This is not a `package.json` official field.
   */
  release?: Release

  /**
   * Resolutions is used to support selective version resolutions using yarn,
   * which lets you define custom package versions or ranges inside your
   * dependencies. For npm, use overrides instead.
   *
   * See: https://classic.yarnpkg.com/en/docs/selective-version-resolutions
   *
   * note: This is not a `package.json` official field.
   */
  resolutions?: Resolutions

  /**
   * The 'scripts' member is an object hash of script commands that are run at
   * various times in the lifecycle of your package. The key is the lifecycle
   * event, and the value is the command to run at that point.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
   */
  scripts?: Scripts

  /**
   * Specify the location from where users can sponsor your extension.
   *
   * note: This is not a `package.json` official field.
   */
  sponsor?: Sponsor

  /**
   * JSON schema for the Stylelint configuration files.
   *
   * note: This is not a `package.json` official field.
   */
  stylelint?: Stylelint

  /**
   * When set to "module", the type field allows a package to specify all .js
   * files within are ES modules. If the "type" field is omitted or set to
   * "commonjs", all .js files are treated as CommonJS.
   *
   * note: This is not a `package.json` official field.
   */
  type?: Type

  /**
   * Set the types property to point to your bundled declaration file.
   *
   * note: This is not a `package.json` official field.
   */
  types?: string

  /**
   * The "typesVersions" field is used since TypeScript 3.1 to support features
   * that were only made available in newer TypeScript versions.
   *
   * note: This is not a `package.json` official field.
   */
  typesVersions?: TypesVersions

  /**
   * Note that the "typings" field is synonymous with "types", and could be
   * used as well.
   *
   * note: This is not a `package.json` official field.
   */
  typings?: string
}

export type {
  Directories as UnofficialDirectories,
  Engines as UnofficialEngines,
  Scripts as UnofficialScripts
}
