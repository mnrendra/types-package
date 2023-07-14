/**
 * JSON schema for ESLint configuration files.
 *
 * ESLint configuration.
 *
 * note: This is not a `package.json` official field.
 */
export interface ESLintConfig {
  /**
   * By default, ESLint supports only ECMAScript 5 syntax. You can override
   * that setting to enable support for ECMAScript 6 as well as JSX by using
   * configuration settings.
   */
  ecmaFeatures?: Record<string, unknown>

  /**
   * An environment defines global variables that are predefined.
   */
  env?: Record<string, unknown>

  /**
   * If you want to extend a specific configuration file, you can use the
   * extends property and specify the path to the file. The path can be either
   * relative or absolute.
   */
  extends?: string | string[]

  /**
   * Set each global variable name equal to true to allow the variable to be
   * overwritten or false to disallow overwriting.
   */
  globals?: Record<string, 'off' | 'readonly' | 'writable'>

  /**
   * Tell ESLint to ignore specific files and directories. Each value uses the
   * same pattern as the `.eslintignore` file.
   */
  ignorePatterns?: string | string[]

  /**
   * Prevent comments from changing config or rules.
   */
  noInlineConfig?: boolean

  /**
   * Allows to override configuration for files and folders, specified by glob
   * patterns.
   */
  overrides?: Array<Record<string, unknown>>

  parser?: string

  /**
   * The JavaScript language options to be supported.
   */
  parserOptions?: {
    /**
     * By default, ESLint supports only ECMAScript 5 syntax. You can override
     * that setting to enable support for ECMAScript 6 as well as JSX by using
     * configuration settings.
     */
    ecmaFeatures?: Record<string, unknown>

    /**
     * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12, 13, 14 or "latest" to
     * specify the version of ECMAScript syntax you want to use. You can also
     * set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same
     * as 9), 2019 (same as 10), 2020 (same as 11), 2021 (same as 12), 2022
     * (same as 13) or 2023 (same as 14) to use the year-based naming. "latest"
     * always enables the latest supported ECMAScript version.
     */
    ecmaVersion?:
    | 3
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 2015
    | 2016
    | 2017
    | 2018
    | 2019
    | 2020
    | 2021
    | 2022
    | 2023
    | 'latest'

    /**
     * Set to "script" (default) or "module" if your code is in ECMAScript
     * modules.
     */
    sourceType?: 'script' | 'module'
  }

  /**
   * ESLint supports the use of third-party plugins. Before using the plugin,
   * you have to install it using npm.
   */
  plugins?: string[]

  /**
   * By default, ESLint will look for configuration files in all parent folders
   * up to the root directory. This can be useful if you want all of your
   * projects to follow a certain convention, but can sometimes lead to
   * unexpected results. To limit ESLint to a specific project, set this to
   * `true` in a configuration in the root of your project.
   */
  root?: boolean

  /**
   * ESLint comes with a large number of rules. You can modify which rules your
   * project uses either using configuration comments or configuration files.
   */
  rules?: Record<string, unknown>

  /**
   * ESLint supports adding shared settings into configuration file. You can
   * add settings object to ESLint configuration file and it will be supplied
   * to every rule that will be executed. This may be useful if you are adding
   * custom rules and want them to have access to the same information and be
   * easily configurable.
   */
  settings?: Record<string, unknown>
}
