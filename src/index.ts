import type { AnyScripts } from './utils'

import type {
  OfficialPackage,
  OfficialDirectories,
  OfficialEngines,
  OfficialScripts
} from './OfficialPackage'

import type {
  UnofficialPackage,
  UnofficialDirectories,
  UnofficialEngines,
  UnofficialScripts
} from './UnofficialPackage'

/**
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#directories
 */
interface Directories extends OfficialDirectories, UnofficialDirectories {}

/**
 * Engine compatibility.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
 */
interface Engines extends OfficialEngines, UnofficialEngines {}

/**
 * The 'scripts' member is an object hash of script commands that are run at
 * various times in the lifecycle of your package. The key is the lifecycle
 * event, and the value is the command to run at that point.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#scripts
 */
interface Scripts extends OfficialScripts, UnofficialScripts, AnyScripts {}

/**
 * `package.json` interface extended from the official and unofficial fields.
 *
 * @see https://github.com/mnrendra/types-package#readme
 */
export interface Package extends OfficialPackage, UnofficialPackage {
  directories?: Directories
  engines?: Engines
  scripts?: Scripts
}
