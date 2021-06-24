import { Module } from '@nestjs/common'
import { ApiCoreModule } from '@simples-empresa/api/core'

import { environment } from '../environments/environment'
import { AppController } from './app.controller'
import { AppResolver } from './app.resolver'
import { AppService } from './app.service'

@Module({
  imports: [ApiCoreModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {
  constructor() {
    console.log('=> APP_MODULE : ', environment.API_TYPEORM_HOSTNAME)
  }
}
