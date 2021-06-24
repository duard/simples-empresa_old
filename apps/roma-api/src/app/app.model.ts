import { Field, ID, ObjectType } from '@nestjs/graphql'

import JSON from 'graphql-type-json'

@ObjectType()
export class AppStatus {
  @Field((type) => JSON)
  app: any

  @Field((type) => JSON)
  system: any

  @Field()
  time: Date
}
