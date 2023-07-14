/**
 * note: This is not a `package.json` official field.
 */
export interface JSCPD {
  /**
   * Use absolute paths in report.
   */
  absolute?: boolean

  /**
   * Get information about authors and dates of duplicated blocks from Git.
   */
  blame?: boolean

  /**
   * Exit code to use when at least one duplicate code block is detected but
   * threshold is not exceeded.
   */
  exitCode?: number

  /**
   * list of formats for which to detect duplication (default: all);
   *
   * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  format?: Array<
  // alfa
  | 'abap'
  | 'actionscript'
  | 'ada'
  | 'apacheconf'
  | 'apl'
  | 'applescript'
  | 'arduino'
  | 'arff'
  | 'asciidoc'
  | 'asm6502'
  | 'aspnet'
  | 'autohotkey'
  | 'autoit'
  // bravo
  | 'bash'
  | 'basic'
  | 'batch'
  | 'bison'
  | 'brainfuck'
  | 'bro'
  // charlie
  | 'c'
  | 'c-header'
  | 'clike'
  | 'clojure'
  | 'coffeescript'
  | 'comments'
  | 'cpp'
  | 'cpp-header'
  | 'crystal'
  | 'csharp'
  | 'csp'
  | 'css'
  | 'css-extras'
  // delta
  | 'd'
  | 'dart'
  | 'diff'
  | 'django'
  | 'docker'
  // echo
  | 'eiffel'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang'
  // foxtrot
  | 'flow'
  | 'fortran'
  | 'fsharp'
  // golf
  | 'gedcom'
  | 'gherkin'
  | 'git'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  // hotel
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haxe'
  | 'hpkp'
  | 'hsts'
  | 'http'
  // india
  | 'ichigojam'
  | 'icon'
  | 'inform7'
  | 'ini'
  | 'io'
  // juliet
  | 'j'
  | 'java'
  | 'javascript'
  | 'jolie'
  | 'json'
  | 'jsx'
  | 'julia'
  // kilo
  | 'keymap'
  | 'kotlin'
  // london
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'lolcode'
  | 'lua'
  // mike
  | 'makefile'
  | 'markdown'
  | 'markup'
  | 'matlab'
  | 'mel'
  | 'mizar'
  | 'monkey'
  // november
  | 'n4js'
  | 'nasm'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  // oscar
  | 'objectivec'
  | 'ocaml'
  | 'opencl'
  | 'oz'
  // papa
  | 'parigp'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'powershell'
  | 'processing'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'pug'
  | 'puppet'
  | 'pure'
  | 'python'
  // quebec
  | 'q'
  | 'qore'
  // romeo
  | 'r'
  | 'reason'
  | 'renpy'
  | 'rest'
  | 'rip'
  | 'roboconf'
  | 'ruby'
  | 'rust'
  // sierra
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'smalltalk'
  | 'smarty'
  | 'soy'
  | 'sql'
  | 'stylus'
  | 'swift'
  // tango
  | 'tap'
  | 'tcl'
  | 'textile'
  | 'tsx'
  | 'tt2'
  | 'twig'
  | 'typescript'
  // uniform
  | 'url'
  // victor
  | 'vbnet'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'visual-basic'
  // whiskey
  | 'wasm'
  | 'wiki'
  // x-ray
  | 'xeora'
  | 'xojo'
  | 'xquery'
  // yankee
  | 'yaml'
  >

  /**
   * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts\);
   *
   * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  formatsExts?: Record<string, string[]>

  /**
   * Ignore all files from `.gitignore` file.
   */
  gitignore?: boolean

  /**
   * Glob pattern for files that should be excluded from duplicate detection.
   */
  ignore?: string[]

  /**
   * Ignore case of symbols in code (experimental).
   */
  ignoreCase?: boolean

  /**
   * Ignore code blocks matching these regular expressions.
   */
  ignorePattern?: string[]

  /**
   * Maximum size of source file in lines to check for duplication.
   */
  maxLines?: number

  /**
   * Maximum size of source file in bytes to check for duplication (e.g.,: 1kb,
   * 1mb, 120kb).
   */
  maxSize?:
  | number
  | `${number}kb`
  | `${number}kB`
  | `${number}Kb`
  | `${number}KB`
  | `${number}mb`
  | `${number}mB`
  | `${number}Mb`
  | `${number}MB`
  | `${number}gb`
  | `${number}gB`
  | `${number}Gb`
  | `${number}GB`
  | `${number}tb`
  | `${number}tB`
  | `${number}Tb`
  | `${number}TB`
  | `${number}pb`
  | `${number}pB`
  | `${number}Pb`
  | `${number}PB`

  /**
   * Minimum size of code block in lines to check for duplication.
   */
  minLines?: number

  /**
   * Minimum size of code block in tokens to check for duplication.
   */
  minTokens?: number

  /**
   * Mode of detection quality;
   *
   * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
   */
  mode?: 'mild' | 'strict' | 'weak'

  /**
   * Do not follow symlinks.
   */
  noSymLinks?: boolean

  /**
   * Path to directory for non-console reports.
   */
  output?: `./${string}`

  /**
   * Paths that should be included in duplicate detection (default:
   * [process.cwd()]).
   */
  path?: string[]

  /**
   * Glob pattern for files that should be included in duplicate detection
   * (e.g., **\/*.txt); only used to filter directories configured via path
   * option.
   */
  pattern?: string

  /**
   * A list of reporters to use to output information about duplication;
   *
   * see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
   */
  reporters?: Array<
  | 'console'
  | 'consoleFull'
  | 'csv'
  | 'html'
  | 'json'
  | 'markdown'
  | 'silent'
  | 'threshold'
  | 'xcode'
  | 'xml'
  >

  reportersOptions?: {
    badge?: {
      /**
       * Badge color (name or RGB code without #, default: green if beneath
       * threshold, red if above threshold, grey if threshold not set);
       *
       * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
       */
      color?:
      | 'black'
      | 'blue'
      | 'cyan'
      | 'gray'
      | 'green'
      | 'grey'
      | 'orange'
      | 'pink'
      | 'purple'
      | 'red'
      | 'yellow'

      /**
       * URL for icon to display in front of badge subject text (e.g.,
       * data:image/svg+xml;base64,...).
       */
      icon?: string

      /**
       * SVG width of icon to display in front of badge subject text; set this
       * if icon is not square.
       */
      iconWidth?: number

      /**
       * Badge subject text (URL-encoding needed for spaces or special
       * characters).
       */
      label?: string

      /**
       * Badge label color (name or RGB code without #);
       *
       * see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
       */
      labelColor?:
      | '555'
      | 'black'
      | 'blue'
      | 'cyan'
      | 'gray'
      | 'green'
      | 'grey'
      | 'orange'
      | 'pink'
      | 'purple'
      | 'red'
      | 'yellow'

      /**
       * Output path for duplication level badge (default: path.join(output,
       * 'jscpd-badge.svg')).
       */
      path?: string

      /**
       * Size of badge relative to default of 1.
       */
      scale?: number

      /**
       * Badge value text (URL-encoding needed for spaces or special
       * characters, default: duplication %)
       */
      status?: string

      style?: 'classic' | 'flat'
    }
  }

  /**
   * Do not write duplicate detection progress and result to console.
   */
  silent?: boolean

  /**
   * Skip duplicates within folders; just detect cross-folder duplicates.
   */
  skipLocal?: boolean

  /**
   * Store used to collect information about code (default: in-memory store);
   * install @jscpd/leveldb-store and use leveldb for big repositories.
   */
  store?: 'leveldb' | 'redis'
}
