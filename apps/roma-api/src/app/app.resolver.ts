import { Query, Resolver } from '@nestjs/graphql'

import { AppService } from './app.service'
import { AppStatus } from './app.model'

@Resolver()
export class AppResolver {
  constructor(private service: AppService) {}

  @Query((returns) => AppStatus)
  status() {
    return this.service.status()
  }
}
