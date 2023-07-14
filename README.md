# @mnrendra/types-package
`package.json` interface extended from the official and unofficial fields.

## Install
```bash
npm i -D @mnrendra/types-package
```

## Usage
```typescript
import type { Package } from '@mnrendra/types-package'

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process'

const { name, version }: Package = JSON.parse(readFileSync(resolve(cwd(), 'package.json'), 'utf-8'))

console.log(name, version)
```

## Types
```typescript
import type {
  Package // `package.json` interface extended from the official and unofficial fields.
} from '@mnrendra/types-package'
```

## License
[MIT](https://github.com/mnrendra/types-package/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
