import { CommandEntity } from '@mbc-cqrs-sererless/core'

import { MasterAttributes } from '../dto/master-attributes.dto'

export class MasterCommandEntity extends CommandEntity {
  attributes: MasterAttributes

  constructor(partial: Partial<MasterCommandEntity>) {
    super()

    Object.assign(this, partial)
  }
}
