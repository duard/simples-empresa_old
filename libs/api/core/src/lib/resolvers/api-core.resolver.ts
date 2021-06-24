import { Float, Query, Resolver } from '@nestjs/graphql'

import { ApiCoreStatus } from '../models/api-core-status'
import { ApiCoreService } from '../services/api-core.service'

@Resolver()
export class ApiCoreResolver {
  constructor(private service: ApiCoreService) {}

  @Query((returns) => ApiCoreStatus)
  status() {
    return this.service.status()
  }

  @Query(() => Float)
  uptime() {
    return process.uptime()
  }
}
