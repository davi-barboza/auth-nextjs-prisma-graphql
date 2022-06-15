import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Payload {
  @Field(() => Int)
  sub: number;

  @Field(() => String)
  email: string;

  @Field(() => Int)
  iat?: number;

  @Field(() => Int)
  exp?: number;
}
