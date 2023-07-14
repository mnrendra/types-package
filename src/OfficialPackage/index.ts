import type { URL, People } from '../utils'

import type { Name } from './Name'
import type { Version } from './Version'
import type { Keywords } from './Keywords'
import type { Bugs } from './Bugs'
import type { Contributors } from './Contributors'
import type { Funding } from './Funding'
import type { Files } from './Files'
import type { Browser } from './Browser'
import type { Bin } from './Bin'
import type { Man } from './Man'
import type { Directories } from './Directories'
import type { Repository } from './Repository'
import type { Scripts } from './Scripts'
import type { Config } from './Config'
import type { Dependencies } from './Dependencies'
import type { PeerDependenciesMeta } from './PeerDependenciesMeta'
import type { BundleDependencies } from './BundleDependencies'
import type { Overrides } from './Overrides'
import type { Engines } from './Engines'
import type { OS } from './OS'
import type { CPU } from './CPU'
import type { Private } from './Private'
import type { PublishConfig } from './PublishConfig'
import type { Workspaces } from './Workspaces'

/**
 * Official `package.json` fields.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json
 */
export interface OfficialPackage {
  /**
   * The name of the package.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
   */
  name: Name

  /**
   * Version must be parseable by node-semver, which is bundled with npm as a
   * dependency.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#version
   */
  version: Version

  /**
   * This helps people discover your package, as it's listed in 'npm search'.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#description
   */
  description?: string

  /**
   * This helps people discover your package as it's listed in 'npm search'.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#keywords
   */
  keywords?: Keywords

  /**
   * The url to the project homepage.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#homepage
   */
  homepage?: URL

  /**
   * The url to your project's issue tracker and / or the email address to
   * which issues should be reported. These are helpful for people who
   * encounter issues with your package.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs
   */
  bugs?: Bugs

  /**
   * You should specify a license for your package so that people know how they
   * are permitted to use it, and any restrictions you're placing on it.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#license
   */
  license?: string

  /**
   * A person who has been involved in creating or maintaining this package.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
   */
  author?: People

  /**
   * A list of people who contributed to this package.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#people-fields-author-contributors
   */
  contributors?: Contributors

  /**
   * Used to inform about ways to help fund development of the package.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#funding
   */
  funding?: Funding

  /**
   * The 'files' field is an array of files to include in your project. If you
   * name a folder in the array, then it will also include the files inside
   * that folder.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#files
   */
  files?: Files

  /**
   * The main field is a module ID that is the primary entry point to your
   * program.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#main
   */
  main?: string

  /**
   * note: There is no this field in vscode.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser
   */
  browser?: Browser

  /**
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bin
   */
  bin?: Bin

  /**
   * Specify either a single file or an array of filenames to put in place for
   * the man program to find.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#man
   */
  man?: Man

  /**
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
   */
  directories?: Directories

  /**
   * Specify the place where your code lives. This is helpful for people who
   * want to contribute.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository
   */
  repository?: Repository

  /**
   * The 'scripts' member is an object hash of script commands that are run at
   * various times in the lifecycle of your package. The key is the lifecycle
   * event, and the value is the command to run at that point.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
   */
  scripts?: Scripts

  /**
   * A 'config' hash can be used to set configuration parameters used in
   * package scripts that persist across upgrades.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#config
   */
  config?: Config

  /**
   * Dependencies are specified with a simple hash of package name to version
   * range. The version range is a string which has one or more space-separated
   * descriptors. Dependencies can also be identified with a tarball or git URL.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#dependencies
   */
  dependencies?: Dependencies

  /**
   * Dependencies are specified with a simple hash of package name to version
   * range. The version range is a string which has one or more space-separated
   * descriptors. Dependencies can also be identified with a tarball or git URL.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#devdependencies
   */
  devDependencies?: Dependencies

  /**
   * Dependencies are specified with a simple hash of package name to version
   * range. The version range is a string which has one or more space-separated
   * descriptors. Dependencies can also be identified with a tarball or git URL.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependencies
   */
  peerDependencies?: Dependencies

  /**
   * When a user installs your package, warnings are emitted if packages
   * specified in "peerDependencies" are not already installed. The
   * "peerDependenciesMeta" field serves to provide more information on how
   * your peer dependencies are utilized. Most commonly, it allows peer
   * dependencies to be marked as optional. Metadata for this field is
   * specified with a simple hash of the package name to a metadata object.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#peerdependenciesmeta
   */
  peerDependenciesMeta?: PeerDependenciesMeta

  /**
   * @deprecated This field is honored, but "bundledDependencies" is the
   * correct field name.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bundledependencies
   */
  bundleDependencies?: BundleDependencies

  /**
   * Dependencies are specified with a simple hash of package name to version
   * range. The version range is a string which has one or more space-separated
   * descriptors. Dependencies can also be identified with a tarball or git URL.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#optionaldependencies
   */
  optionalDependencies?: Dependencies

  /**
   * Overrides is used to support selective version overrides using npm, which
   * lets you define custom package versions or ranges inside your
   * dependencies. For yarn, use resolutions instead.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#overrides
   */
  overrides?: Overrides

  /**
   * Engine compatibility.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
   */
  engines?: Engines

  /**
   * Specify which operating systems your module will run on.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#os
   */
  os?: OS

  /**
   * Specify that your code only runs on certain cpu architectures.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#cpu
   */
  cpu?: CPU

  /**
   * If set to true, then npm will refuse to publish it.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#private
   */
  private?: Private

  /**
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#publishconfig
   */
  publishConfig?: PublishConfig

  /**
   * Allows packages within a directory to depend on one another using direct
   * linking of local files. Additionally, dependencies within a workspace are
   * hoisted to the workspace root when possible to reduce duplication. Note:
   * It's also a good idea to set "private" to true when using this feature.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#workspaces
   */
  workspaces?: Workspaces
}

export type {
  Directories as OfficialDirectories,
  Engines as OfficialEngines,
  Scripts as OfficialScripts
}
