import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CoreResolver } from './api-core.resolver'
import { configuration } from './config/configuration'
import { DatabaseConfig } from './config/db.config'
import { validationSchema } from './config/validation'

const ENV = process.env.NODE_ENV
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class ApiCoreModule {
  constructor() {
    console.log('AMBIENTE', ENV, !ENV ? '.env' : `.env.${ENV}`)
    console.log('ENV_FILE', process.env.ENV_FILE)
    // console.log(process.env)
  }
}
