type BaseName =
| `~${string}`
| `-${string}`
| `0${string}`
| `1${string}`
| `2${string}`
| `3${string}`
| `4${string}`
| `5${string}`
| `6${string}`
| `7${string}`
| `8${string}`
| `9${string}`
| `a${string}`
| `b${string}`
| `c${string}`
| `d${string}`
| `e${string}`
| `f${string}`
| `g${string}`
| `h${string}`
| `i${string}`
| `j${string}`
| `k${string}`
| `l${string}`
| `m${string}`
| `n${string}`
| `o${string}`
| `p${string}`
| `q${string}`
| `r${string}`
| `s${string}`
| `t${string}`
| `u${string}`
| `v${string}`
| `w${string}`
| `x${string}`
| `y${string}`
| `z${string}`

/**
 * The name of the package.
 *
 * @see https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name
 */
export type Name = BaseName | `@${BaseName}/${BaseName}`
