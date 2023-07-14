/**
 * AVA Config Schema
 *
 * Configuration Schema for the JavaScript test runner AVA.
 *
 * note: This is not a `package.json` official field.
 */
export interface AVA {
  /**
   * Defaults to `true` to cache compiled files under
   * `node_modules/.cache/ava.` If `false`, files are cached in a temporary
   * directory instead.
   */
  cache?: boolean

  /**
   * Max number of test files running at the same time (default: CPU cores).
   */
  concurrency?: number

  /**
   * Environment variables
   *
   * Specifies environment variables to be made available to the tests. The
   * environment variables defined here override the ones from `process.env`.
   */
  environmentVariables?: Record<string, string>

  /**
   * Extensions of test files. Setting this overrides the default
   * `["cjs", "mjs", "js"]` value, so make sure to include those extensions in
   * the list. Experimentally you can configure how files are loaded.
   */
  extensions?: string[] | Record<string, 'commonjs' | 'module'>

  /**
   * Stop running further tests once a test fails.
   */
  failFast?: boolean

  /**
   * If `false`, does not fail a test if it doesn't run assertions.
   */
  failWithoutAssertions?: boolean

  /**
   * An array of glob patterns to select test files. Files with an underscore
   * prefix are ignored. By default only selects files with `cjs`, `mjs` &
   * `js` extensions, even if the pattern matches other files. Specify
   * `extensions` to allow other file extensions.
   */
  files?: string[]

  /**
   * An array of glob patterns to match files that, even if changed, are
   * ignored by the watcher.
   */
  ignoredByWatcher?: string[]

  /**
   * Not typically useful in the `package.json` configuration, but equivalent
   * to specifying `--match` on the CLI.
   */
  match?: string[]

  /**
   * Configure Node.js arguments used to launch worker processes.
   */
  nodeArguments?: string[]

  /**
   * Extra modules to require before tests are run. Modules are required in
   * the worker processes.
   */
  require?: string[]

  /**
   * Specifies a fixed location for storing snapshot files. Use this if your
   * snapshots are ending up in the wrong location.
   */
  snapshotDir?: string

  /**
   * If `true`, enables the TAP reporter.
   */
  tap?: boolean

  /**
   * Timeouts in AVA behave differently than in other test frameworks. AVA
   * resets a timer after each test, forcing tests to quit if no new test
   * results were received within the specified timeout. This can be used to
   * handle stalled tests. See our timeout documentation for more options.
   */
  timeout?: number | `${number}s` | `${number}m`

  /**
   * Configuration
   *
   * Configures @ava/typescript for projects that precompile TypeScript.
   * Alternatively, you can use `ts-node` to do live testing without
   * transpiling, in which case you shouldn't use the `typescript` property.
   */
  typescript?: {
    /**
     * If `false`, AVA will assume you have already compiled your project. If
     * set to `'tsc'`, AVA will run the TypeScript compiler before running your
     * tests. This can be inefficient when using AVA in watch mode.
     */
    compile?: false | 'tsc'

    /**
     * You can configure AVA to recognize additional file extensions as
     * TypeScript (e.g., `["ts", "tsx"]` to add partial JSX support). Note that
     * the preserve mode for JSX is not (yet) supported. See also AVA's
     * `extensions` object.
     */
    extensions?: string[]

    /**
     * paths
     *
     * AVA searches your entire project for `*.js`, `*.cjs`, `*.mjs` and `*.ts`
     * files (or other extensions you've configured). It will ignore such files
     * found in the `rewritePaths` targets (e.g. `build/`). If you use more
     * specific paths, for instance `build/main/`, you may need to change AVA's
     * `files` configuration to ignore other directories. Paths are relative to
     * your project directory.
     */
    rewritePaths?: Record<string, unknown>
  }

  /**
   * If `false`, disable parallel builds (default: `true`).
   */
  utilizeParallelBuilds?: boolean

  /**
   * If `true`, enables verbose output (though currently non-verbose output
   * is not supported).
   */
  verbose?: boolean

  /**
   * Use worker threads to run tests (enabled by default). If `false`, tests
   * will run in child processes.
   */
  workerThreads?: boolean
}
