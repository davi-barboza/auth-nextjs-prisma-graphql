import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ObjectType()
export class User implements Prisma.UserUncheckedCreateInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  avatar?: string;

  @Field()
  active?: boolean;

  @Field(() => String || Date)
  created_at?: string | Date;

  @Field(() => String || Date)
  updated_at?: string | Date;

  @Field()
  user_creation?: string;

  @Field()
  user_last_update?: string;
}