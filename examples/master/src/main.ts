import { createHandler } from '@thinhnguyen_zsy/core'

import { MainModule } from './main.module'

export const handler = createHandler({
  rootModule: MainModule,
})
