import { Injectable } from '@nestjs/common'

import { environment } from '../environments/environment'

@Injectable()
export class AppService {
  DB_HOST = environment.API_TYPEORM_HOSTNAME
  getData(): { message: string } {
    return { message: `We are connected on ${this.DB_HOST}` }
  }
}
