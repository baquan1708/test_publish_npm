import { DataListEntity } from '@thinhnguyen_zsy/core'

import { TaskEntity } from './task.entity'

export class TaskListEntity extends DataListEntity {
  items: TaskEntity[]

  constructor(partial: Partial<TaskListEntity>) {
    super(partial)

    Object.assign(this, partial)
  }
}
