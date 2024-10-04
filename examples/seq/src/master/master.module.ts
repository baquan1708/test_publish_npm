import { CommandModule } from '@thinhnguyen_zsy/core'
import { SequencesModule } from '@thinhnguyen_zsy/sequence'
import { Module } from '@nestjs/common'

import { MasterDataSyncRdsHandler } from './handler/master-rds.handler'
import { MasterController } from './master.controller'
import { MasterService } from './master.service'

@Module({
  imports: [
    CommandModule.register({
      tableName: 'master',
      dataSyncHandlers: [MasterDataSyncRdsHandler],
    }),
    SequencesModule,
  ],
  controllers: [MasterController],
  providers: [MasterService],
  exports: [MasterService],
})
export class MasterModule {}
