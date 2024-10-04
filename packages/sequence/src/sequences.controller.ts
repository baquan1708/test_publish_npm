import { DetailDto, IInvoke, INVOKE_CONTEXT } from '@thinhnguyen_zsy/core'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { GenSequenceDto } from './dto/gen-sequence.dto'
import { SequencesService } from './sequences.service'
@ApiTags('sequence')
@Controller()
export class SequencesController {
  constructor(private readonly sequenceService: SequencesService) {}

  @Get('/:pk/:sk')
  async getSequence(@Param() dto: DetailDto) {
    return await this.sequenceService.getCurrentSequence(dto)
  }

  @Post('/')
  async genSequence(
    @INVOKE_CONTEXT() invokeContext: IInvoke,
    @Body() dto: GenSequenceDto,
  ) {
    return await this.sequenceService.genNewSequence(dto, { invokeContext })
  }
}
