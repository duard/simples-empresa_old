import { Field, ID, ObjectType } from '@nestjs/graphql'
import JSON from 'graphql-type-json'

@ObjectType()
export class ApiCoreStatus {
  @Field((type) => JSON)
  app: any

  @Field((type) => JSON)
  system: any

  @Field()
  time: Date
}

// https://stackoverflow.com/questions/56885199/schema-generator-cannot-determine-graphql-output-type-for-custom-object-within-d
