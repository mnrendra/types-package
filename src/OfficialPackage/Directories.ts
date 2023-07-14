/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 */
export interface Directories {
  /**
   * If you specify a 'bin' directory, then all the files in that folder will
   * be used as the 'bin' hash.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directoriesbin
   */
  bin?: string

  /**
   * A folder that is full of man pages. Sugar to generate a 'man' array by
   * walking the folder.
   *
   * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directoriesman
   */
  man?: string
}
