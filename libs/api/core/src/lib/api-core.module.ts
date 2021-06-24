import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { configuration } from './config/configuration'
import { DatabaseConfig } from './config/db.config'
import { validationSchema } from './config/validation'
import { ApiCoreController } from './controllers/api-core.controller'
import { ApiCoreResolver } from './resolvers/api-core.resolver'
import { DateScalar } from './scalars/date.scalars'
import { ApiCoreService } from './services/api-core.service'

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
  controllers: [ApiCoreController],
  providers: [ApiCoreResolver, ApiCoreService, DateScalar],
  exports: [],
})
export class ApiCoreModule {
  constructor() {
    // console.log('AMBIENTE', ENV, !ENV ? '.env' : `.env.${ENV}`)
    // console.log('ENV_FILE', process.env.ENV_FILE)
    // console.log(process.env)
  }
}
