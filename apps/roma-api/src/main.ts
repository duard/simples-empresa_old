/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

import { AppModule } from './app/app.module'
const ENV = process.env.NODE_ENV

async function bootstrap() {
  console.log(':: AMBIENTE', !ENV ? '.env.dev' : `.env.${ENV}`)
  // console.log(
  //   ':: file =>',
  //   process.env.API_FILE,
  //   '\n',
  //   process.env.API_BASE_TYPEORM_TYPE,
  //   '\n',
  //   process.env.API_TIMEZONE,
  //   '\n',
  //   process.env.API_PORT,
  //   '\n',
  //   process.env.API_TYPEORM_TYPE,
  //   '\n',
  //   process.env.API_TYPEORM_PORT,
  //   '\n',
  //   process.env.API_TYPEORM_SYNC,
  //   '\n',
  //   process.env.API_TYPEORM_HOSTNAME,
  //   '\n',
  //   process.env.API_TYPEORM_USERNAME,
  //   '\n',
  //   process.env.API_TYPEORM_PASSWORD,
  //   '\n',
  //   process.env.API_TYPEORM_DATABASE,
  // )

  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const port = process.env.PORT || 3333

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix)
    Logger.log(`
    Running in ${config.get('environment')} mode
    `)
  })
}

bootstrap()
