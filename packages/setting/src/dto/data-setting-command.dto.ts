import { CommandDto } from '@thinhnguyen_zsy/core'
import { IsObject, IsOptional } from 'class-validator'

export class DataSettingCommandDto extends CommandDto {
  @IsObject()
  @IsOptional()
  attributes?: object
}
