import { DefaultEventFactory, EventFactory } from '@mbc-cqrs-sererless/core'
import { Logger } from '@nestjs/common'

@EventFactory()
export class CustomEventFactory extends DefaultEventFactory {
  private readonly logger = new Logger(CustomEventFactory.name)
}
