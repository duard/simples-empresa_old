import { Module } from '@nestjs/common'
import { ApiCoreModule } from '@simples-empresa/api/core'
import { environment } from '../environments/environment'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ApiCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('=> APP_MODULE : ', environment.API_TYPEORM_HOSTNAME)
  }
}
