import fs from 'node:fs/promises'
import collections from '@iconify/collections/collections.json' with { type: 'json' }

await fs.writeFile(
  './src/collections.ts',
  `// GENERATED BY scripts/collections.ts\nexport default ${JSON.stringify(Object.keys(collections).sort(), null, 2)}`,
  'utf-8',
)
