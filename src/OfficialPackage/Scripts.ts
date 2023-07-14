/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
export interface Scripts {
  /**
   * install scripts
   */

  /**
   * Run BEFORE the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  preinstall?: string
  [key: `preinstall:${string}`]: string

  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  install?: string
  [key: `install:${string}`]: string

  /**
   * Run AFTER the package is installed.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-install
   */
  postinstall?: string
  [key: `postinstall:${string}`]: string

  /**
   * pack scripts
   */

  /**
   * Run BEFORE a tarball is packed (on npm pack, npm publish, and when
   * installing git dependencies).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepack?: string
  [key: `prepack:${string}`]: string

  /**
   * Run both BEFORE the package is packed and published, and on local npm
   * install without any arguments. This is run AFTER prepublish, but BEFORE
   * prepublishOnly.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  prepare?: string
  [key: `prepare:${string}`]: string

  /**
   * Run AFTER the tarball has been generated and moved to its final
   * destination.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-pack
   */
  postpack?: string
  [key: `postpack:${string}`]: string

  /**
   * publish scripts
   */

  /**
   * @deprecated
   *
   * Run BEFORE the package is published (Also run on local npm install
   * without any arguments).
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#prepare-and-prepublish
   */
  prepublish?: string
  [key: `prepublish:${string}`]: string

  /**
   * Run BEFORE the package is prepared and packed, ONLY on npm publish.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  prepublishOnly?: string
  [key: `prepublishOnly:${string}`]: string

  /**
   * Publishes a package to the registry so that it can be installed by name.
   * See https://docs.npmjs.com/cli/v8/commands/npm-publish
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  publish?: string
  [key: `publish:${string}`]: string

  /**
   * Run AFTER the package is published.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-publish
   */
  postpublish?: string
  [key: `postpublish:${string}`]: string

  /**
   * restart scripts
   */

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  prerestart?: string
  [key: `prerestart:${string}`]: string

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  restart?: string
  [key: `restart:${string}`]: string

  /**
   * Run by the 'npm restart' command. Note: 'npm restart' will run the stop
   * and start scripts if no restart script is provided.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-restart
   */
  postrestart?: string
  [key: `postrestart:${string}`]: string

  /**
   * start scripts
   */

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  prestart?: string
  [key: `prestart:${string}`]: string

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  start?: string
  [key: `start:${string}`]: string

  /**
   * Run by the 'npm start' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-start
   */
  poststart?: string
  [key: `poststart:${string}`]: string

  /**
   * stop scripts
   */

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  prestop?: string
  [key: `prestop:${string}`]: string

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  stop?: string
  [key: `stop:${string}`]: string

  /**
   * Run by the 'npm stop' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-stop
   */
  poststop?: string
  [key: `poststop:${string}`]: string

  /**
   * test scripts
   */

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  pretest?: string
  [key: `pretest:${string}`]: string

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  test?: string
  [key: `test:${string}`]: string

  /**
   * Run by the 'npm test' command.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-test
   */
  posttest?: string
  [key: `posttest:${string}`]: string

  /**
   * uninstall scripts
   */

  /**
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  preuninstall?: string
  [key: `preuninstall:${string}`]: string

  /**
   * Run BEFORE the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  uninstall?: string
  [key: `uninstall:${string}`]: string

  /**
   * Run AFTER the package is uninstalled.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#a-note-on-a-lack-of-npm-uninstall-scripts
   */
  postuninstall?: string
  [key: `postuninstall:${string}`]: string

  /**
   * version scripts
   */

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  preversion?: string
  [key: `preversion:${string}`]: string

  /**
   * Run BEFORE bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  version?: string
  [key: `version:${string}`]: string

  /**
   * Run AFTER bump the package version.
   *
   * @see https://docs.npmjs.com/cli/v9/using-npm/scripts#npm-version
   */
  postversion?: string
  [key: `postversion:${string}`]: string
}
