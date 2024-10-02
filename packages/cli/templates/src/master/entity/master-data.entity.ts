import { DataEntity } from '@thinhnguyen_zsy/core'

import { MasterAttributes } from '../dto/master-attributes.dto'

export class MasterDataEntity extends DataEntity {
  attributes: MasterAttributes

  constructor(partial: Partial<MasterDataEntity>) {
    super(partial)

    Object.assign(this, partial)
  }
}
