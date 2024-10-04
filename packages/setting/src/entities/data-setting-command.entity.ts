import { CommandEntity } from '@thinhnguyen_zsy/core'

export class DataSettingCommandEntity extends CommandEntity {
  attributes?: object

  constructor(partial: Partial<DataSettingCommandEntity>) {
    super()

    Object.assign(this, partial)
  }
}
