//easyconfig.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common'
import { EasyconfigService } from 'nestjs-easyconfig'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

@Injectable()
export class EasyConfiguration implements OnModuleInit {
  constructor(private easyConfigService: EasyconfigService) {}

  onModuleInit() {
    const configDB = this.easyConfigService.get('envConfig')
    console.log(configDB)
    return configDB
  }
}
