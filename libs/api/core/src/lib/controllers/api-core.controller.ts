import { Controller, Get } from '@nestjs/common'

import { ApiCoreService } from '../services/api-core.service'

@Controller()
export class ApiCoreController {
  constructor(private service: ApiCoreService) {}

  @Get('status')
  status() {
    return this.service.status()
  }
}
