import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions() {
    const dbConfig = this.configService.get('database')
    console.log(`Running in ${this.configService.get('environment')} mode`)
    console.log('DB CONFIG', dbConfig)
    return dbConfig
  }
}
